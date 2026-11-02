import { BRANDS, SERVICES, SITE } from "../data";

export default function Repairs() {
  return (
    <main className="container">
      <div className="sectionTitle">
        <h1>Appliance Repairs in {SITE.city}</h1>
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

      <div className="sectionTitle">
        <h2>Common Appliance Problems We Fix</h2>
        <p>If it sounds like your appliance, we can help.</p>
      </div>

      <section className="grid">
        <article className="card">
          <h3>Refrigerator Not Cooling</h3>
          <p>Warm fridge, freezer frosting over, water leaking, or an ice maker that stopped making ice.</p>
        </article>
        <article className="card">
          <h3>Washer Not Draining or Spinning</h3>
          <p>Standing water, loud shaking, leaks, or a washer that won't start or finish its cycle.</p>
        </article>
        <article className="card">
          <h3>Dryer Not Heating</h3>
          <p>Clothes still damp after a full cycle, a dryer that squeals or thumps, or one that won't turn on.</p>
        </article>
        <article className="card">
          <h3>Oven or Stove Not Heating</h3>
          <p>Burners that won't light, an oven that won't reach temperature, or error codes on the display.</p>
        </article>
        <article className="card">
          <h3>Dishwasher Not Draining</h3>
          <p>Water left in the bottom, dishes coming out dirty, leaks, or a dishwasher that won't start.</p>
        </article>
      </section>

      <div className="note">
        Need service today? Text or call <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> during <strong>{SITE.hours}</strong>.
      </div>
    </main>
  );
}
