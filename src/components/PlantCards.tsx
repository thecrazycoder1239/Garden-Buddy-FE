import AddPlantButton from './AddPlantButton';

export default function PlantCards() {
  return (
    <section className="plant-cards">
      <ul className="plant-cards">
        <li className="plant-card">
          <div>
            <h2>Tomatoes</h2>
            <AddPlantButton />
            <p>Description...</p>
            <p>Other API-sourced data fields...</p>
          </div>
          <img src="" />
        </li>
        <li className="plant-card">
          <div>
            <h2>Potatoes</h2>
            <p>Description...</p>
            <p>Other API-sourced data fields...</p>
          </div>
          <img src="" />
        </li>
        <li className="plant-card">
          <div>
            <h2>Aubergines</h2>
            <p>Description...</p>
            <p>Other API-sourced data fields...</p>
          </div>
          <img src="" />
        </li>
        <li className="plant-card">
          <div>
            <h2>Carrots</h2>
            <p>Description...</p>
            <p>Other API-sourced data fields...</p>
          </div>
          <img src="" />
        </li>
      </ul>
    </section>
  );
}
