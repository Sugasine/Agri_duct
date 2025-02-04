import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";
import "./menu.css"

const Menu = () => {
  const { filterby } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  // Filter the product only if productData exists
  const productDisplay = productData ? productData.filter((el) => el._id === filterby)[0] : null;

  const handleAddCartProduct = () => {
    if (productDisplay) {
      dispatch(addCartItem(productDisplay));
    }
  };

  const handleBuy = () => {
    if (productDisplay) {
      dispatch(addCartItem(productDisplay));
      navigate("/cart");
    }
  };

  if (!productDisplay) {
    return <div>Loading...</div>; // Or handle the case where productDisplay is not available yet
  }
  return (
    <div className="p-2 md:p-4">
      <div className=" men w-full max-w-4xl m-auto md:flex bg-white border-4 border-yellow-400">
        <div className="max-w-sm  overflow-hidden w-full p-5 border-2 border-yellow-400">
          <img
            src={productDisplay.image}
            className="hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-white py-3 mx-20  capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className=" text-yellow-500 px-20 font-bold text-2xl">{productDisplay.category}</p>
          <p className=" font-bold text-white px-20 md:text-2xl">
            <span className="text-yellow-500 ">₹</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3 py-2 px-20">
            <button onClick={handleBuy} className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Buy</button>
            <button onClick={handleAddCartProduct} className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Add Cart</button>
          </div>
          <div>
            <p className="text-yellow-500 px-20 py- font-3xl font-bold">Description : </p>
            <p className="px-20 text-white font-semibold">{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Product"}/>
    </div>
  );
};

export default Menu;
