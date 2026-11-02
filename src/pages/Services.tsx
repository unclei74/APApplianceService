import { SERVICES, SITE, imgService } from "../data";

export default function Services() {
  return (
    <main className="container">
      <div className="sectionTitle">
        <h1>Appliance Repair Services in Las Vegas</h1>
        <p>Professional in-home repair for the most common household appliances across the Las Vegas Valley.</p>
      </div>

      <section className="grid">
        {SERVICES.map((s) => (
          <article key={s.name} className="card">
            <div className="iconBox">
              <img src={imgService(s.file)} alt={s.alt} />
            </div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <p>Diagnosis, parts replacement, and performance testing. Call us during <strong>{SITE.hours}</strong>.</p>
          </article>
        ))}
      </section>

      <div className="note">
        <strong>Tip:</strong> If you can, have the model number ready when you call—it helps us bring the right parts and speed up the repair.
      </div>
    </main>
  );
}
