
const cars = [
  {
    name: "Mercedes-Benz Classe C",
    category: "Berline Premium",
    price: 850,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900",
  },
  {
    name: "BMW Série 3",
    category: "Berline Sport",
    price: 750,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900",
  },
  {
    name: "Range Rover Sport",
    category: "SUV Luxe",
    price: 1400,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900",
  },
];

export default function Home() {
  return (
    <main>
      <header style={{
        padding: "24px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee"
      }}>
        <h2>NABIL <span style={{color:"#c5a46d"}}>CAR.</span></h2>
        <nav style={{display:"flex",gap:20}}>
          <a href="#home">Accueil</a>
          <a href="#cars">Nos voitures</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" style={{
        minHeight: 500,
        background:"#111827",
        color:"white",
        padding:"100px 7%",
        textAlign:"center"
      }}>
        <p style={{color:"#c5a46d",letterSpacing:4}}>
          LOCATION AUTOMOBILE PREMIUM
        </p>
        <h1 style={{fontSize:48}}>
          Conduisez l'exception.
        </h1>
        <p style={{fontSize:18,color:"#ddd"}}>
          Découvrez notre sélection de voitures au Maroc.
        </p>
        <a href="#cars" style={{
          display:"inline-block",
          marginTop:25,
          padding:"15px 30px",
          background:"#c5a46d",
          color:"#111",
          borderRadius:5
        }}>
          Découvrir nos voitures
        </a>
      </section>

      <section id="cars" style={{padding:"70px 5%"}}>
        <h2 style={{textAlign:"center",fontSize:32}}>
          Nos voitures Premium
        </h2>
        <p style={{textAlign:"center",color:"#777"}}>
          Choisissez le véhicule qui vous correspond.
        </p>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:25,
          marginTop:40
        }}>
          {cars.map((car) => (
            <article key={car.name} style={{
              border:"1px solid #eee",
              borderRadius:12,
              overflow:"hidden"
            }}>
              <img src={car.image} alt={car.name}
                style={{width:"100%",height:220,objectFit:"cover"}}/>
              <div style={{padding:20}}>
                <h3>{car.name}</h3>
                <p style={{color:"#777"}}>{car.category}</p>
                <h3 style={{color:"#b08d57"}}>
                  {car.price} MAD / jour
                </h3>
                <a href="#contact" style={{
                  display:"block",
                  textAlign:"center",
                  padding:13,
                  background:"#111827",
                  color:"white",
                  borderRadius:6
                }}>
                  Réserver
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" style={{
        background:"#111827",
        color:"white",
        textAlign:"center",
        padding:40
      }}>
        <h2>NABIL CAR</h2>
        <p>Location de voitures Premium au Maroc</p>
        <p>Contactez-nous pour votre réservation.</p>
        <p style={{color:"#c5a46d"}}>
          © 2026 NABIL CAR - Tous droits réservés
        </p>
      </footer>
    </main>
  );
}
