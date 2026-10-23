// Le clic appelle la fonction fournie par App.
export default function Produit({ ajouter }) {
  return (
    <section className="component component-produit" aria-labelledby="produit-title">
      <div className="component-heading">
        <h3 id="produit-title">Produit.jsx</h3>
        <span>Enfant d’App</span>
      </div>
      <p>Je reçois une fonction pour modifier l’état du parent.</p>
      <p className="prop"><code>Prop reçue : ajouter</code></p>
      <div className="product-detail">
        <h4>Casque audio</h4>
        <p>Un clic = un article supplémentaire.</p>
      </div>
      <button onClick={ajouter}>Ajouter au panier</button>
      <p className="click-explanation">Au clic : <code>ajouter()</code> s’exécute et met à jour l’état dans App.</p>
    </section>
  );
}
