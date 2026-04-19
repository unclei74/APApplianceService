:root{
  --bg:#f6f8fb;
  --card:#ffffff;
  --text:#0b3c5d;
  --muted:#6b7280;
  --accent:#e94b3c;
  --accent2:#ffd166;
  --border:#e5e7eb;
  --shadow: 0 10px 30px rgba(0,0,0,.08);
  --radius:18px;
}
*{box-sizing:border-box}
body{
  margin:0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background:var(--bg);
  color:var(--text);
}
a{color:inherit}
.container{max-width:1100px;margin:0 auto;padding:24px}
.header{
  position:sticky;top:0;z-index:20;
  background:rgba(246,248,251,.92);
  backdrop-filter: blur(10px);
  border-bottom:1px solid var(--border);
}
.topbar{
  display:flex;align-items:center;justify-content:space-between;
  gap:16px;padding:12px 20px;
}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none}
.brand img{width:54px;height:auto;border-radius:12px;box-shadow: var(--shadow)}
.brand .name strong{display:block;font-size:16px}
.brand .name span{display:block;font-size:12px;color:var(--muted)}
.rightInfo{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.badge{
  display:flex;gap:10px;align-items:center;
  padding:8px 10px;border:1px solid var(--border);
  border-radius:999px;background:var(--card); text-decoration:none;
}
.pill{
  font-size:11px;font-weight:800;
  padding:4px 8px;border-radius:999px;
  background:linear-gradient(90deg,var(--accent),var(--accent2));
  color:#fff;
}
.tinyline{font-size:12px;color:var(--muted);font-weight:650}
.nav{
  display:flex;gap:8px;flex-wrap:wrap;
  padding:10px 20px 16px 20px;
}
.nav a{
  text-decoration:none;
  padding:8px 12px;border-radius:999px;
  border:1px solid transparent;
  color:var(--muted);
  font-weight:700;font-size:13px;
}
.nav a.active{
  background:var(--card);
  border-color:var(--border);
  color:var(--text);
  box-shadow: 0 6px 18px rgba(0,0,0,.06);
}
.hero{
  display:grid;grid-template-columns: 1.1fr .9fr;gap:20px;
  align-items:stretch;
}
@media (max-width: 900px){
  .hero{grid-template-columns: 1fr}
}
.copy{
  background:var(--card);border:1px solid var(--border);
  border-radius:var(--radius); box-shadow: var(--shadow);
  padding:22px;
}
.copy h1{margin:0 0 10px 0;font-size:34px;line-height:1.1}
.copy p{margin:0 0 12px 0;color:var(--muted);font-weight:650}
.bullets{list-style:none;margin:14px 0 0 0;padding:0;display:grid;gap:10px}
.bullets li{display:flex;gap:10px;align-items:flex-start;color:var(--text)}
.dot{width:10px;height:10px;border-radius:999px;margin-top:6px;background:linear-gradient(90deg,var(--accent),var(--accent2))}
.ctaRow{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}
.btn{
  display:inline-flex;align-items:center;justify-content:center;
  padding:10px 14px;border-radius:12px;text-decoration:none;
  font-weight:800;font-size:13px;border:1px solid var(--border);
  background:var(--card);
}
.btn.primary{
  border-color:transparent;
  background:linear-gradient(90deg,var(--accent),var(--accent2));
  color:#fff;
}
.btn.secondary{color:var(--text)}
.note{
  margin-top:14px;
  padding:12px 14px;border-radius:14px;
  background:rgba(233,75,60,.08);
  border:1px solid rgba(233,75,60,.18);
  color:var(--text);
  font-weight:650;
}
.heroArt{
  background:var(--card);border:1px solid var(--border);
  border-radius:var(--radius);box-shadow: var(--shadow);
  padding:14px; display:flex; align-items:center; justify-content:center;
}
.heroArt img{max-width:100%;height:auto;border-radius:14px}
.sectionTitle{margin:26px 0 12px 0}
.sectionTitle h2{margin:0;font-size:22px}
.sectionTitle p{margin:6px 0 0 0;color:var(--muted);font-weight:650}
.grid{
  display:grid;grid-template-columns: repeat(3, 1fr);gap:14px;
}
@media (max-width: 900px){
  .grid{grid-template-columns: 1fr}
}
.card{
  background:var(--card);border:1px solid var(--border);
  border-radius:var(--radius); box-shadow: 0 10px 24px rgba(0,0,0,.06);
  padding:16px;
}
.card h3{margin:0 0 8px 0}
.card p{margin:0;color:var(--muted);font-weight:650}
.iconBox{
  height:170px;border-radius:16px;border:1px solid var(--border);
  background:linear-gradient(180deg, rgba(11,60,93,.05), rgba(233,75,60,.04));
  display:flex;align-items:center;justify-content:center;margin-bottom:12px;
}
.iconBox img{max-width:100%;max-height:160px;height:auto}
.brandGrid{
  display:grid;grid-template-columns: repeat(4,1fr);gap:14px;
}
@media (max-width: 900px){
  .brandGrid{grid-template-columns: repeat(2,1fr)}
}
.brandTile{
  background:var(--card);border:1px solid var(--border);
  border-radius:16px;box-shadow: 0 8px 18px rgba(0,0,0,.06);
  padding:12px;display:flex;flex-direction:column;gap:10px;
}
.brandTile img{width:100%;height:auto;border-radius:12px;border:1px solid var(--border)}
.brandTile span{font-weight:800;color:var(--text)}
label{display:block;font-size:12px;color:var(--muted);font-weight:800;margin-bottom:6px}
input, select, textarea{
  width:100%;
  padding:10px 12px;
  border:1px solid var(--border);
  border-radius:12px;
  font: inherit;
}
textarea{min-height:120px;resize:vertical}
.twoCol{display:grid;grid-template-columns: 1fr 1fr;gap:12px}
@media (max-width: 900px){
  .twoCol{grid-template-columns:1fr}
}
.footer{
  margin-top:34px;
  border-top:1px solid var(--border);
  background:rgba(255,255,255,.55);
}
.footerInner{
  max-width:1100px;margin:0 auto;padding:18px 24px;
  display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;
}
.tiny{font-size:12px;color:var(--muted);font-weight:650}


/* Repairs page bullet lists */
.twoListGrid{ grid-template-columns: 1fr 1fr; }
.twoColBullets{
  margin: 10px 0 0;
  padding-left: 18px;
  column-count: 2;
  column-gap: 24px;
}
.twoColBullets li{
  break-inside: avoid;
  margin: 6px 0;
  color: #374151;
  font-size: 14px;
}
@media (max-width: 900px){
  .twoListGrid{ grid-template-columns: 1fr; }
  .twoColBullets{ column-count: 1; }
}
