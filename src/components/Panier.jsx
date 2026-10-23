// La prop arrive d'App en passant par Navigation.
export default function Panier({ quantite }) {
  return (
    <section className="component component-panier" aria-labelledby="panier-title">
      <div className="component-heading">
        <h4 id="panier-title">Panier.jsx</h4>
        <span>Enfant de Navigation</span>
      </div>
      <p>J’utilise la prop pour afficher le panier.</p>
      <p className="prop"><code>Prop reçue : quantite = {quantite}</code></p>
      <p className="cart-count" role="status">
        <strong>{quantite}</strong> article(s) dans le panier
      </p>
    </section>
  );
}
