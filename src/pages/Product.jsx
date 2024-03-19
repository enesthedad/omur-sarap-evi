import { ProductHeader } from "../components/ProductHeader";
import { Header } from "../components/Header";
import { Products } from "../components/Products";
export const Product = () => {
  return (
    <div className="">
      <div id="products" className="min-h-screen ">
        <div className="w-full">
          <Header />
        </div>
        <ProductHeader />
      </div>
      <Products />
    </div>
  );
};
