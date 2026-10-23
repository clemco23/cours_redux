# Exemple Redux Toolkit

Lancer `npm run dev`, puis ouvrir `/redux.html`. L’exemple initial reste accessible à `/` et ses fichiers ne sont pas modifiés.

- `store/panierSlice.js` : état initial et action `ajouter` avec `createSlice`.
- `store/store.js` : création du store avec `configureStore`.
- `main.jsx` : `Provider` rend le store accessible aux composants.
- `components/Produit.jsx` : `useDispatch` envoie l’action au store.
- `components/Panier.jsx` : `useSelector` lit la quantité et suit ses changements.
- `components/Navigation.jsx` : ne reçoit ni ne transmet de prop.

Le flux est : clic → dispatch(ajouter()) → reducer → nouvel état → affichage de Panier.

Les styles de l’exemple initial sont réutilisés pour faciliter la comparaison. Le panier est en mémoire et revient à 0 au rechargement.
