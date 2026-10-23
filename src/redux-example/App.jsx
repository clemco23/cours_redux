import Navigation from "./components/Navigation.jsx";
import Produit from "./components/Produit.jsx";

export default function App() {
  return (
    <main>
      <header className="page-header">
        <p>Atelier React · Redux Toolkit</p>
        <h1>Un état partagé dans le store.</h1>
        <p>Le même panier, avec un accès direct à Redux depuis les composants.</p>
        <a href="/">Voir l’exemple avec props drilling</a>
      </header>
      <aside className="lesson">
        <h2>Store Redux · store.js et panierSlice.js</h2>
        <p>L’état est stocké dans <code>state.panier.quantite</code>, initialisé à 0.</p>
        <p><code>Provider</code> rend ce store accessible à toute l’application ci-dessous.</p>
      </aside>
      <section className="component component-app" aria-labelledby="app-title" style={{ marginTop: 24 }}>
        <div className="component-heading">
          <h2 id="app-title">App.jsx</h2>
          <span>Parent · organise les composants</span>
        </div>
        <p>Je n’ai plus d’état local ni de props à transmettre pour le panier.</p>
        <div className="children">
          <Navigation />
          <Produit />
        </div>
      </section>
      <aside className="lesson">
        <h2>Que se passe-t-il au clic ?</h2>
        <ol>
          <li>Produit envoie l’action avec <code>dispatch(ajouter())</code>.</li>
          <li>Le reducer du slice augmente la quantité dans le store.</li>
          <li>Panier lit la nouvelle quantité avec <code>useSelector</code> et se met à jour.</li>
        </ol>
        <p>La hiérarchie reste App → Navigation → Panier, mais Navigation ne transmet plus la quantité.</p>
      </aside>
    </main>
  );
}
