import Panier from "./Panier.jsx";

// Navigation n'a plus besoin de recevoir ni de transmettre quantite.
export default function Navigation() {
  return (
    <nav className="component component-navigation" aria-labelledby="navigation-title">
      <div className="component-heading">
        <h3 id="navigation-title">Navigation.jsx</h3>
        <span>Enfant d’App</span>
      </div>
      <p>Je contiens Panier, sans transmettre de prop.</p>
      <p className="passing"><code>&lt;Panier /&gt;</code></p>
      <Panier />
    </nav>
  );
}
