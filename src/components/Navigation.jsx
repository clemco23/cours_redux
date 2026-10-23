import Panier from "./Panier.jsx";

// Composant intermédiaire : reçoit la prop d'App et la transmet à Panier.
export default function Navigation({ quantite }) {
  return (
    <nav className="component component-navigation" aria-labelledby="navigation-title">
      <div className="component-heading">
        <h3 id="navigation-title">Navigation.jsx</h3>
        <span>Enfant d’App</span>
      </div>
      <p>Je reçois la prop et je la transmets à mon enfant.</p>
      <p className="prop"><code>App → Navigation : quantite</code></p>
      <p className="passing">↓ transmet <code>quantite</code> à Panier</p>
      <Panier quantite={quantite} />
    </nav>
  );
}
