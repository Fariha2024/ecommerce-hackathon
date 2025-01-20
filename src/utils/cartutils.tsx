// /src/utils/cartUtils.ts
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

// Adds an item to the cart or updates the quantity if already present
export const addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {
  const existingItem = cart.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    // If item is already in the cart, update the quantity
    return cart.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
    );
  } else {
    // If item is not in the cart, add it
    return [...cart, item];
  }
};

// Removes an item from the cart
export const removeFromCart = (cart: CartItem[], itemId: string): CartItem[] => {
  return cart.filter(item => item.id !== itemId);
};

// Updates the quantity of an item in the cart
export const updateItemQuantity = (cart: CartItem[], itemId: string, quantity: number): CartItem[] => {
  return cart.map(item =>
    item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
  );
};

// Calculates the total price of the items in the cart
export const getTotalPrice = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Counts the total number of items in the cart
export const getItemCount = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};
