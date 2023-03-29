export default function MyPlants() {
    return (
      <section className="my-plants">
        <ul className="my-plants-cards">
          <li>
            <h2>Tomatoes</h2>
            <p>Growing Since: 12/02/23</p>
            <form>
              <button className="plain-text" type="submit">
                Remove from My Plants
              </button>
            </form>
          </li>
          <div className="line-break"></div>
          <li>
            <h2>Potatoes</h2>
            <p>Growing Since: 12/02/23</p>
            <form>
              <button className="plain-text" type="submit">
                Remove from My Plants
              </button>
            </form>
          </li>
          <div className="line-break"></div>
        </ul>
      </section>
    );
}