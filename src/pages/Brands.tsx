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

      <div className="note">
        <strong>Brand images:</strong> These are custom brand tiles (not official logos). If you have permission to use official brand assets,
        replace files in <code>public/brands</code> with your authorized images.
      </div>
    </main>
  );
}
