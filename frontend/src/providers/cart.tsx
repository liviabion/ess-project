import { createContext, PropsWithChildren, useState, useContext, useEffect } from "react"

interface CartItem {
  id: number;
  image: string;
  price: number;
  cor: string;
  name: string;
  quantity: number;
  size: string;
}

interface CartContextType {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  addItemToCart: (data: Omit<CartItem, 'quantity'>) => void
  removeItemToCart: (id: number) => void
  increaseQuantity: (id: number) => void
  diminishQuantity: (id: number) => void
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Try to load the cart from local storage at initialization
    const localCart = localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

  // adicionar item
  const addItemToCart = (data: Omit<CartItem, 'quantity'>) => {
    const isItemPresent = cart.find(cartItem => cartItem.id === data.id);
    if (!isItemPresent) setCart([...cart, { ...data, quantity: 1 }]);
  }

  // remover item
  const removeItemToCart = (id: number) =>  {
    setCart(cart.filter(cartItem => cartItem.id !== id) )
  }

  // aumentar qtd do item
  const increaseQuantity = (id: number) => {
    const itemToIncrease = cart.find(cartItem => cartItem.id === id)
    if (itemToIncrease === undefined) return;
    setCart(currentCart => currentCart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  ));

  }

  // remover qtd do item
  const diminishQuantity = (id: number) => {
    const itemToDiminish = cart.find(cartItem => cartItem.id === id)
    if (itemToDiminish === undefined) return;

    if (itemToDiminish.quantity === 1) removeItemToCart(id)
    else {
      setCart(currentCart => currentCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
    }
  }


  return (
    <CartContext.Provider value={{ cart, setCart, addItemToCart, removeItemToCart, increaseQuantity, diminishQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const values = useContext(CartContext);
  return values;
}