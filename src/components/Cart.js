import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Card = () => {

    
  const cartItem = useSelector((store) => store.cart.items);
  //you can also write like that
  //const store = useSelector((store) => store);
  //const cartItem=store.cart.items;
  //but this commented code is very very less efficient

  const despatch = useDispatch();
  const handleclearcart = () => {
    despatch(clearCart());
  };

  return (
    <div className="px-32">
      <h1 className="text-left text-2xl my-6 font-bold">Your Cart Items</h1>
      <div className="grid align-middle items-center justify-center">
        <div>
          <ItemList items={cartItem} />
        </div>
        <div>
          {cartItem.length === 0 ? (
            <div className="grid align-middle items-center justify-center my-10 text-xl">
              <div className=" w-80">
                <img src="https://img.freepik.com/premium-vector/flat-vector-illustration-add-cart_203633-5233.jpg?w=1480"></img>
              </div>
              <div className="flex text-center py-7 justify-center">
                Your cart is empty!
              </div>
            </div>
          ) : (
            <button
              onClick={handleclearcart}
              className="bg-red-500 text-white rounded-lg py-3 px-5 my-5 text-lg "
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
