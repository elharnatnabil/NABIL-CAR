
"use client";

import { useState } from "react";

const cars = [
  {
    name: "Mercedes-Benz Classe C",
    type: "Berline",
    price: 850,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900",
    tag: "PREMIUM",
  },
  {
    name: "BMW Série 3",
    type: "Berline",
    price: 750,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900",
    tag: "POPULAIRE",
  },
  {
    name: "Range Rover Sport",
    type: "SUV",
    price: 1400,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900",
    tag: "LUXE",
  },
  {
    name: "Porsche 911",
    type: "Sport",
    price: 2200,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    tag: "EXCLUSIVE",
  },
  {
    name: "Audi Q5",
    type: "SUV",
    price: 950,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900",
    tag: "CONFORT",
  },
  {
    name: "Mercedes Classe G",
    type: "SUV",
    price: 2500,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900",
    tag: "PRESTIGE",
  },
];

export default function Home() {
  const [filter, setFilter] = useState("Tous");
  const [selected, setSelected] = useState<string | null>(null);

  const filteredCars =
    filter === "Tous"
      ? cars
      : cars.filter((car) => car.type === filter);

  return (
    <main>
      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #090909; color: white;
          font-family: Arial, sans-serif; }
        button { cursor: pointer; }
        .gold { color: #d4af65; }
        .container { max-width: 1250px; margin: auto; padding: 0 25px; }
        header { border-bottom: 1px solid #292929; }
        .nav { height: 85px; display: flex; align-items: center;
          justify-content: space-between; }
        .logo { font-size: 27px; font-weight: 900; letter-spacing: 2px; }
        .nav a { color: white; text-decoration: none; margin-left: 25px;
          font-size: 14px; }
        .hero { min-height: 570px; display: flex; align-items: center;
          background: linear-gradient(90deg,#090909 15%,#090909bb 55%,#09090922),
          url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800')
          center/cover; }
        .hero-content { max-width: 650px; padding: 85px 0; }
        .eyebrow { color: #d4af65; letter-spacing: 4px; font-size: 12px; }
        h1 { font-size: clamp(42px,7vw,76px); line-height: 1.08;
          margin: 22px 0; }
        .hero p { color: #bbb; line-height: 1.8; font-size: 16px; }
        .gold-btn { background: #d4af65; color: #111; border: 0;
          padding: 16px 27px; font-weight: bold; margin-top: 20px; }
        .section { padding: 75px 0; }
        .section-title { font-size: 35px; margin-bottom: 12px; }
        .muted { color: #999; }
        .filters { display: flex; gap: 10px; flex-wrap: wrap; margin: 30px 0; }
        .filters button { background: #151515; color: white;
          border: 1px solid #333; padding: 12px 20px; }
        .filters button.active { background: #d4af65; color: black; }
        .grid { display: grid; grid-template-columns: repeat(3,1fr);
          gap: 22px; }
        .car { background: #151515; border: 1px solid #292929; }
        .car img { width: 100%; height: 220px; object-fit: cover; }
        .car-info { padding: 20px; }
        .tag { color: #d4af65; font-size: 11px; letter-spacing: 2px; }
        .car h3 { font-size: 20px; }
        .price { font-size: 23px; font-weight: bold; }
        .price small { font-size: 12px; color: #999; }
        .outline-btn { width: 100%; padding: 14px; margin-top: 15px;
          background: transparent; border: 1px solid #d4af65;
          color: #d4af65; }
        .features { display: grid; grid-template-columns: repeat(3,1fr);
          gap: 20px; }
        .feature { background: #151515; padding: 28px; border: 1px solid #292929; }
        footer { border-top: 1px solid #292929; padding: 35px 0;
          color: #999; text-align: center; }
        .modal { position: fixed; inset: 0; background: #000d;
          display: grid; place-items: center; padding: 20px; z-index: 10; }
        .modal-box { background: #181818; border: 1px solid #d4af65;
          padding: 30px; width: 100%; max-width: 420px; }
        @media(max-width:800px) {
          .grid { grid-template-columns: repeat(2,1fr); }
          .nav a { margin-left: 10px; font-size: 12px; }
        }
        @media(max-width:550px) {
          .grid,.features { grid-template-columns: 1fr; }
          .hero { min-height: 490px; }
          .logo { font-size: 21px; }
          .nav a { font-size: 11px; margin-left: 8px; }
          .car img { height: 230px; }
        }
      `}</style>

      <header>
        <div className="container nav">
          <div className="logo">NABIL<span className="gold"> CAR.</span></div>
          <nav>
            <a href="#accueil">Accueil</a>
            <a href="#voitures">Nos voitures</a>
            <a href="#services">Services</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="accueil">
        <div className="container">
          <div className="hero-content">
            <div className="eyebrow">LOCATION AUTOMOBILE DE PRESTIGE</div>
            <h1>
              L'élégance<br />
              <span className="gold">à chaque</span> trajet.
            </h1>
            <p>
              Découvrez une expérience de location exclusive.
              Choisissez votre véhicule et profitez de la route
              avec NABIL CAR.
            </p>
            <a href="#voitures">
              <button className="gold-btn">DÉCOUVRIR NOS VOITURES →</button>
            </a>
          </div>
        </div>
      </section>

      <section className="section container" id="voitures">
        <div className="eyebrow">NOTRE COLLECTION</div>
        <h2 className="section-title">Nos véhicules <span className="gold">Premium</span></h2>
        <p className="muted">Trouvez le véhicule idéal pour votre prochain voyage.</p>

        <div className="filters">
          {["Tous", "Berline", "SUV", "Sport"].map((type) => (
            <button
              key={type}
              className={filter === type ? "active" : ""}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredCars.map((car) => (
            <article className="car" key={car.name}>
              <img src={car.image} alt={car.name} />
              <div className="car-info">
                <div className="tag">{car.tag}</div>
                <h3>{car.name}</h3>
                <p className="muted">{car.type}</p>
                <div className="price">
                  {car.price.toLocaleString("fr-FR")} MAD
                  <small> / jour</small>
                </div>
                <button
                  className="outline-btn"
                  onClick={() => setSelected(car.name)}
                >
                  RÉSERVER CE VÉHICULE
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="services">
        <div className="eyebrow">POURQUOI NABIL CAR ?</div>
        <h2 className="section-title">Une expérience <span className="gold">exceptionnelle</span></h2>
        <div className="features">
          <div className="feature">
            <h3 className="gold">01 — Qualité</h3>
            <p className="muted">Des véhicules sélectionnés avec soin.</p>
          </div>
          <div className="feature">
            <h3 className="gold">02 — Confort</h3>
            <p className="muted">Une expérience agréable et personnalisée.</p>
          </div>
          <div className="feature">
            <h3 className="gold">03 — Service</h3>
            <p className="muted">Un accompagnement professionnel.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo">NABIL<span className="gold"> CAR.</span></div>
        <p>Location automobile Premium au Maroc.</p>
        <p>© 2026 NABIL CAR — Tous droits réservés.</p>
      </footer>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="eyebrow">DEMANDE DE RÉSERVATION</div>
            <h2>{selected}</h2>
            <p className="muted">
              Votre véhicule a été sélectionné.
              La prochaine étape sera de connecter le formulaire
              de réservation à votre base de données.
            </p>
            <button className="gold-btn" onClick={() => setSelected(null)}>
              FERMER
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

