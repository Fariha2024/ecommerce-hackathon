import { FaShoppingBag } from 'react-icons/fa';
import { useCart } from '../utils/useCart'; // To access the current cart and item count
import { CartItem } from '../utils/cartutils'; // CartItem type for type safety

const CartIcon = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <FaShoppingBag className="text-2xl text-gray-800" />
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 text-xs text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
