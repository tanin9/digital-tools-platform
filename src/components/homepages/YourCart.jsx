import React from "react"; 
import { toast } from "react-toastify";
const YourCart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handelPayment = () => {
      setCarts([]);
        toast.success("Payment Successfully!")
      
    };
    
    const handelRemove = (data) => {
        const filterArray = carts.filter(cart => cart.id !== data.id);
        setCarts(filterArray);
        toast.error("Removed the item!");
        
     };

  return (
    <div className="container mx-auto">
      <div className="border border-gray-400 rounded-3xl px-9 py-7">
        <div className="mb-6">
          <p className="font-bold text-2xl">Your Cart</p>
        </div>

        {carts.length === 0 ? (
          <div className="flex flex-col justify-center items-center p-7">
            <div>
             <img src="/src/assets/images/cart-image.png" alt="" />
                      </div>
                      <div><p className="font-bold text-2xl text-gray-400">Your Cart is Empty</p></div>
          </div>
        ) : (
          <div>
            {carts.map((item) => (
              <div key={item.id}>
                <div className="bg-gray-100 p-3 mb-4 rounded-2xl flex justify-between items-center gap-2">
                  <div className=" flex items-center gap-3">
                    <div>
                      <img
                        src={item.icon}
                        alt=""
                      />
                    </div>

                    <div>
                      <p className="font-bold text-xl">{item.name}</p>
                      <p className="font-light text-gray-500 ">
                        $ {item.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button onClick={()=> handelRemove(item)} className="btn btn-ghost rounded-4xl text-red-600 font-semibold p-2">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between text-2xl font-bold">
          <p>Total</p>
          <p>$ {totalPrice}</p>
        </div>

        <div>
          <button
            onClick={handelPayment}
            className="bg-linear-to-r from-[#4F39F6] to-[#9514F5] w-full text-white font-bold rounded-4xl py-2 my-4"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
