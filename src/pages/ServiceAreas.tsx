import { useEffect, useRef, useState } from "react";
import type * as Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { BASE, SERVICE_AREAS, SITE } from "../data";

// Zip codes with no mapped boundary (PO box / single-delivery zips) are shown as points.
const ZIP_POINTS: Record<string, [number, number]> = {
  "89009": [36.0397, -114.9819],
  "89016": [36.0300, -115.0100],
  "89053": [36.0150, -115.0450],
  "89077": [35.9950, -115.0750],
  "89033": [36.2050, -115.1150],
  "89036": [36.1950, -115.1350],
  "89087": [36.2750, -115.1500],
  "89158": [36.1100, -115.1750],
};

// Initial view: the metro core (some zips extend far into rural Clark County).
const METRO_BOUNDS: Leaflet.LatLngBoundsExpression = [
  [35.97, -115.36],
  [36.33, -114.95],
];

const AREA_STYLE: Leaflet.PathOptions = { color: "#0b3c5d", weight: 1.2, fillColor: "#1e6fd9", fillOpacity: 0.22 };
const POINT_STYLE: Leaflet.PathOptions = { ...AREA_STYLE, fillOpacity: 0.6 };
const ACTIVE_STYLE: Leaflet.PathOptions = { color: "#e94b3c", weight: 2.5, fillColor: "#ffd166", fillOpacity: 0.55 };

export default function ServiceAreas() {
  const mapEl = useRef<HTMLDivElement>(null);
  const layers = useRef(new Map<string, Leaflet.Path>());
  const mapRef = useRef<Leaflet.Map | null>(null);
  const leafletRef = useRef<typeof Leaflet | null>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let map: Leaflet.Map | null = null;

    // Leaflet needs `window`, so load it only in the browser (also keeps it out of other pages' bundles).
    (async () => {
      const mod = await import("leaflet");
      const L = ((mod as unknown as { default?: typeof Leaflet }).default ?? mod) as typeof Leaflet;
      if (cancelled || !mapEl.current) return;
      leafletRef.current = L;

      const m = L.map(mapEl.current, { scrollWheelZoom: false, zoomSnap: 0.5 }).fitBounds(METRO_BOUNDS);
      map = m;
      mapRef.current = m;
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(m);

      const labelLayer = L.layerGroup().addTo(m);
      const updateLabels = () => {
        const el = mapEl.current;
        if (el) el.classList.toggle("hideZipLabels", m.getZoom() < 10);
      };
      m.on("zoomend", updateLabels);

      const bind = (zip: string, layer: Leaflet.Path, center: Leaflet.LatLng) => {
        layers.current.set(zip, layer);
        layer.on("click", () => setActive(zip));
        L.marker(center, {
          interactive: false,
          icon: L.divIcon({ className: "zipLabel", html: `<span>${zip}</span>`, iconSize: [0, 0] }),
        }).addTo(labelLayer);
      };

      const data: GeoJSON.FeatureCollection = await fetch(`${BASE}service-areas.geojson`).then((r) => r.json());
      if (cancelled) return;
      L.geoJSON(data, {
        style: AREA_STYLE,
        onEachFeature: (f, layer) => {
          const zip = f.properties?.zip as string;
          bind(zip, layer as Leaflet.Path, (layer as Leaflet.Polygon).getBounds().getCenter());
        },
      }).addTo(m);

      Object.entries(ZIP_POINTS).forEach(([zip, ll]) => {
        const pt = L.circleMarker(ll, { ...POINT_STYLE, radius: 7 }).addTo(m);
        bind(zip, pt, L.latLng(ll[0] + 0.012, ll[1]));
      });

      updateLabels();
    })().catch(() => {
      // Map failed to load; the zip list below still works.
    });

    return () => {
      cancelled = true;
      map?.remove();
      mapRef.current = null;
      layers.current.clear();
    };
  }, []);

  useEffect(() => {
    layers.current.forEach((layer, zip) => {
      const base = zip in ZIP_POINTS ? POINT_STYLE : AREA_STYLE;
      layer.setStyle(zip === active ? ACTIVE_STYLE : base);
    });
    const layer = active ? layers.current.get(active) : undefined;
    const map = mapRef.current;
    const L = leafletRef.current;
    if (!layer || !map || !L) return;
    layer.bringToFront();
    if (layer instanceof L.CircleMarker) map.setView(layer.getLatLng(), 13);
    else map.fitBounds((layer as Leaflet.Polygon).getBounds(), { maxZoom: 13, padding: [40, 40] });
  }, [active]);

  return (
    <main className="container">
      <div className="sectionTitle">
        <h1>Appliance Repair Service Areas</h1>
        <p>
          We provide in-home appliance repair across Las Vegas, Henderson, and North Las Vegas. Find your zip code below or
          call <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> to confirm coverage.
        </p>
      </div>

      <div className="card mapCard">
        <div ref={mapEl} className="serviceMap" role="region" aria-label="Map of service area zip codes" />
      </div>

      <section className="zipGroups">
        {SERVICE_AREAS.map((group) => (
          <article className="card" key={group.city}>
            <h3>{group.city}</h3>
            <div className="zipList">
              {group.zips.map((zip) => (
                <button
                  type="button"
                  key={zip}
                  className={`zipChip${zip === active ? " active" : ""}`}
                  onClick={() => setActive(zip === active ? null : zip)}
                  aria-pressed={zip === active}
                >
                  {zip}
                </button>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
