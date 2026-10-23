import { useDispatch } from "react-redux";
import { ajouter } from "../store/panierSlice.js";

export default function Produit() {
  const dispatch = useDispatch();

  return (
    <section className="component component-produit" aria-labelledby="produit-title">
      <div className="component-heading">
        <h3 id="produit-title">Produit.jsx</h3>
        <span>Enfant d’App</span>
      </div>
      <p>J’envoie une action au store avec useDispatch.</p>
      <p className="prop"><code>dispatch(ajouter())</code></p>
      <div className="product-detail">
        <h4>Casque audio</h4>
        <p>Un clic = un article supplémentaire.</p>
      </div>
      <button onClick={() => dispatch(ajouter())}>Ajouter au panier</button>
      <p className="click-explanation">Aucune fonction reçue en prop : l’action vient de panierSlice.js.</p>
    </section>
  );
}
