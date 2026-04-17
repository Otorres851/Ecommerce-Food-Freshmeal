import { defineStore } from "pinia";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalItems: (state) =>
      state.items.reduce((acc, item) => acc + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(product: CartItem) {
      const existing = this.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
  },
});
