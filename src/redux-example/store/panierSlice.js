import { createSlice } from "@reduxjs/toolkit";

// Le slice décrit l'état du panier et les actions qui peuvent le modifier.
const panierSlice = createSlice({
  name: "panier",
  initialState: { quantite: 0 },
  reducers: {
    ajouter(state) {
      state.quantite += 1;
    },
  },
});

export const { ajouter } = panierSlice.actions;
export default panierSlice.reducer;
