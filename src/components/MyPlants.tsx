export default function MyPlants() {
    return (
      <section className="my-plants">
        <ul className="my-plants-cards">
          <li>
            <p>Tomatoes</p>
            <p>Growing Since: 12/02/23</p>
            <form>
              <button className="plain-text" type="submit">
                Remove from My Plants
              </button>
            </form>
          </li>
          <li>
            <p>Potatoes</p>
            <p>Growing Since: 12/02/23</p>
            <form>
              <button className="plain-text" type="submit">
                Remove from My Plants
              </button>
            </form>
          </li>
        </ul>
      </section>
    );
}