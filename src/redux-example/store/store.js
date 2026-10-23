import { configureStore } from "@reduxjs/toolkit";
import panierReducer from "./panierSlice.js";

// L'état partagé est disponible sous state.panier.
export const store = configureStore({
  reducer: { panier: panierReducer },
});
