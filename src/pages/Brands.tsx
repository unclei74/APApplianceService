import { BRANDS, altBrand, imgBrand } from "../data";

export default function Brands() {
  return (
    <main className="container">
      <div className="sectionTitle">
        <h1>Appliance Brands We Repair in Las Vegas</h1>
        <p>We service many major appliance brands. If you don’t see yours, ask—we likely service it.</p>
      </div>

      <section className="brandGrid">
        {BRANDS.map((b) => (
          <div key={b.name} className="brandTile">
            <img src={imgBrand(b.file)} alt={altBrand(b.name)} />
            <span>{b.name}</span>
          </div>
        ))}
      </section>

      <div className="sectionTitle">
        <h2>Everyday and Luxury Brands</h2>
        <p>From popular brands to high-end built-ins.</p>
      </div>

      <section className="grid">
        <article className="card">
          <h3>Samsung, LG & GE Repair</h3>
          <p>Refrigerator, washer, dryer, and range repair for Samsung, LG, and GE appliances, including ice maker and error-code problems.</p>
        </article>
        <article className="card">
          <h3>Whirlpool, Maytag & KitchenAid Repair</h3>
          <p>Whirlpool, Maytag, KitchenAid, Kenmore, Amana, and Frigidaire repair for laundry and kitchen appliances.</p>
        </article>
        <article className="card">
          <h3>Sub-Zero, Viking, Wolf & Thermador Repair</h3>
          <p>Careful repair for high-end built-in refrigerators, ranges, and cooktops from Sub-Zero, Viking, Wolf, Thermador, GE Monogram, Dacor, Miele, and Bosch.</p>
        </article>
      </section>

      <div className="note">
        <strong>Brand images:</strong> These are custom brand tiles (not official logos). If you have permission to use official brand assets,
        replace files in <code>public/brands</code> with your authorized images.
      </div>
    </main>
  );
}
