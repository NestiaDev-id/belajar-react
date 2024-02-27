import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../components/elements/Button";
import CardProduct from "../components/fragments/CardProduct";
import Counter from "../components/fragments/Counter";
import { getProducts } from "../components/services/productService";
import { getUsername } from "../components/services/AuthService";
import { useLogin } from "../components/hooks/useLogin";
import TableCart from "../components/fragments/TableCart";
import Navbar from "../components/layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

export default function ProductsPage() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header
                  image={item.image}
                  id={item.id}
                ></CardProduct.Header>
                <CardProduct.Body name={item.title}>
                  {item.description}
                </CardProduct.Body>
                <CardProduct.Footer price={item.price} id={item.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>

          <TableCart products={products} />
        </div>
      </div>

      <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
}
