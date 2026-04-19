import { BRANDS, SERVICES, SITE } from "../data";

export default function Repairs() {
  return (
    <main className="container">
      <div className="sectionTitle">
        <h2>Repairs</h2>
        <p>
          <strong>Repairing all major Appliances and Brands.</strong> We specialize in a wide range of appliances from top brands,
          and our professional, experienced technicians focus on honest diagnostics, clear communication, and quality repairs.
          Call or text us at <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>.
        </p>
      </div>

      <section className="grid twoListGrid">
        <article className="card">
          <h3>Appliances We Repair</h3>
          <ul className="twoColBullets">
            {SERVICES.map((s) => (
              <li key={s.name}>{s.name}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>Brands We Service</h3>
          <ul className="twoColBullets">
            {BRANDS.map((b) => (
              <li key={b.name}>{b.name}</li>
            ))}
          </ul>
        </article>
      </section>

      <div className="note">
        Need service today? Text or call <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> during <strong>{SITE.hours}</strong>.
      </div>
    </main>
  );
}
