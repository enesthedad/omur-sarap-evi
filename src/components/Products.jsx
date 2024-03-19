import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import products from "../data/products";
import { WineCard } from "./WineCard";
export const Products = () => {
  return (
    <div className="bg-[#212022] p-4 py-[100px] ">
      <div className="flex justify-center w-full h-auto mb-4 rounded-lg bg-stone-700">
        <h5 className="3xl:text-[144px] 2xl:text-[122px] xl:text-[122px] xl:py-20 lg:py-14 md:py-10 py-4 lg:text-[100px] md:text-4xl text-[36px] font-bold text-white">
          URUNLERIMIZ
        </h5>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 parent">
        {products.map((wine, i) => (
          <WineCard key={i} wine={wine} />
        ))}
      </div>
    </div>
  );
};
