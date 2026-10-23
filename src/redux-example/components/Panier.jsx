import { useSelector } from "react-redux";

export default function Panier() {
  // Lit le store et abonne ce composant aux changements de la quantité.
  const quantite = useSelector(state => state.panier.quantite);

  return (
    <section className="component component-panier" aria-labelledby="panier-title">
      <div className="component-heading">
        <h4 id="panier-title">Panier.jsx</h4>
        <span>Enfant de Navigation</span>
      </div>
      <p>Je lis directement la quantité dans le store.</p>
      <p className="prop"><code>useSelector(state =&gt; state.panier.quantite)</code></p>
      <p className="cart-count" role="status"><strong>{quantite}</strong> article(s) dans le panier</p>
    </section>
  );
}
