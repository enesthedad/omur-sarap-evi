import productLanding from "../imgs/productLanding.webp";
import { FaWhatsapp, FaWineBottle } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Divider } from "./Divider";
export const ProductHeader = () => {
  return (
    <>
      <div className="relative flex items-center justify-center w-full min-h-screen full-screen">
        <div className="flex items-center justify-center w-full min-h-screen py-10 pb-20 bg-black bg-opacity-35">
          <div className="grid items-center justify-center grid-cols-1 gap-4 p-4 md:grid-cols-2">
            <div className="flex flex-col justify-center w-full gap-5 mx-auto md:w-3/4 2xl:w-1/2 ">
              <h2 className="text-[18px] lg:text-[26px]  text-start xl:text-[28px] 2xl:text-[30px] text-stone-100">
                BIR DAMLA KEYIF, BIR ŞIŞE MUTLULUK
              </h2>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[18px] text-stone-300 lowercase">
                ÖMÜR SÜRYANI ŞARAP EVI, GELENEKSEL SURYANI SARAPLARI ILE
                BENZERSIZ BIR LEZZET YOLCULUĞUNA DAVET EDIYOR. BINLERCE YILLIK
                KÖKLERI VE ZENGIN MIRASIYLA SURYANI ŞARAPLARI, SIZE ÖZEL BIR TAT
                DENEYIMI SUNUYOR. EN SEÇKIN ÜZÜMLERLE ÜRETILEN ŞARAPLARIMIZ,
                TARIH VE LEZZETIN MÜKEMMEL BIR BULUŞMASIDIR. ÖMÜR SÜRYANI ŞARAP
                EVI ILE SURYANI ŞARAP KÜLTÜRÜNÜ KEŞFEDIN VE DAMAK ZEVKINIZI
                ÖDÜLLENDIRIN. ŞIMDI BIRINCI SINIF SURYANI SARAPLARIYLA TANIŞMAK
                IÇIN ADIM ATIN!
              </p>
              <div className="flex gap-4">
                <Button
                  className="text-[14px] md:text-[16px] p-4 xl:py-6 lg:text-[18px] flex items-center xl:text-[20px] 2xl:text-[18px] text-stone-300 uppercase"
                  color="danger"
                >
                  <FaWineBottle /> Urunlerimiz
                </Button>
                <Button
                  className="text-[14px] md:text-[16px] p-4 xl:py-6 lg:text-[18px] flex items-center xl:text-[20px] 2xl:text-[18px] text-stone-300 uppercase"
                  color="success"
                >
                  <FaWhatsapp /> Siparis Ver
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center ">
              <img
                className="w-3/4 shadow-lg lg:w-3/4 rounded-lg object-cover h-[400px] md:h-[500px] lg:h-[550px] xl:h-[500px] 2xl:h-[500px] md:w-2/3rounded-lg"
                src={productLanding}
                alt=""
              />
            </div>
          </div>
          <Divider color="#212022" />
        </div>
      </div>
    </>
  );
};
