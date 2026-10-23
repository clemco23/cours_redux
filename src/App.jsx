import { useState } from "react";
import Navigation from "./components/Navigation.jsx";
import Produit from "./components/Produit.jsx";
import "./App.css";

// App possède l'état et transmet les props à ses enfants.
export default function App() {
  const [quantite, setQuantite] = useState(0);

  function ajouter() {
    setQuantite(ancienneQuantite => ancienneQuantite + 1);
  }

  return (
    <main>
      <header className="page-header">
        <p>Atelier React · Les props</p>
        <h1>Suivre la donnée, composant par composant.</h1>
        <p>Clique sur le produit et observe la quantité traverser les composants.</p>
      </header>
      <section className="component component-app" aria-labelledby="app-title">
        <div className="component-heading">
          <h2 id="app-title">App.jsx</h2>
          <span>Parent · possède l’état</span>
        </div>
        <p>L’état du panier est créé ici avec <code>useState(0)</code>.</p>
        <p className="state-value">État local : <code>quantite = {quantite}</code></p>
        <div className="children">
          <Navigation quantite={quantite} />
          <Produit ajouter={ajouter} />
        </div>
      </section>
      <aside className="lesson">
        <h2>Le props drilling, ici</h2>
        <p><code>App → Navigation → Panier</code></p>
        <p>Navigation reçoit la quantité uniquement pour la transmettre à Panier. Chaque cadre représente un composant ; un cadre imbriqué représente son enfant.</p>
      </aside>
    </main>
  );
}
