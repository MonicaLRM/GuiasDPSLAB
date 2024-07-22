import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.jugador} key={jugador.id}>
                <img src={jugador.foto} alt={jugador.nombre} className={styles.foto} />
                <div className={styles.jugadorInfo}>
                  <strong>{jugador.nombre}</strong>
                  <p>Altura: {jugador.Altura}m <br /> Peso: {jugador.Peso}Kg</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Eden Hazard", Altura: "1.75", Peso: "74Kg", foto: "/images/hazard.jpeg" },
        { id: 2, nombre: "Gonzalo", Altura: "1.82", Peso: "74Kg", foto: "/images/gonzalo.jpeg" },
        { id: 3, nombre: "Karim Benzema", Altura: "1.85", Peso: "81Kg", foto: "/images/benzema.jpeg" }
      ]
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        { id: 1, nombre: "Marc-André ter Stegen", Altura: "1.75", Peso: "74Kg", foto: "/images/Stegen.jpg" },
        { id: 2, nombre: "Iñigo Martinez", Altura: "1.82", Peso: "74Kg", foto: "/images/inigo.jpg" },
        { id: 3, nombre: "Gavi", Altura: "1.85", Peso: "81Kg", foto: "/images/gavi.jpeg" }
      ]
    },
    {
      id: 3,
      nombre: "Manchester United",
      plantilla: [
        { id: 1, nombre: "David de Gea", Altura: "1.92", Peso: "76Kg", foto: "/images/degea.jpg" },
        { id: 2, nombre: "Harry Maguire", Altura: "1.94", Peso: "100Kg", foto: "/images/maguire.jpeg" },
        { id: 3, nombre: "Marcus Rashford", Altura: "1.80", Peso: "70Kg", foto: "/images/rashford.jpeg" }
      ]
    },
    {
      id: 4,
      nombre: "Juventus",
      plantilla: [
        { id: 1, nombre: "Wojciech Szczęsny", Altura: "1.95", Peso: "84Kg", foto: "/images/szczesny.jpeg" },
        { id: 2, nombre: "Leonardo Bonucci", Altura: "1.90", Peso: "85Kg", foto: "/images/bonucci.jpg" },
        { id: 3, nombre: "Paulo Dybala", Altura: "1.77", Peso: "73Kg", foto: "/images/dybala.jpeg" }
      ]
    }
    // Puedes seguir agregando más equipos de la misma forma...
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
