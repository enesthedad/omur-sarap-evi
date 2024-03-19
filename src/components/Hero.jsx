import landingCard from "../imgs/landing-card.webp";
import { FaWhatsapp, FaWineBottle } from "react-icons/fa";

import { Button, Link } from "@nextui-org/react";
import { Divider } from "./Divider";
export const Hero = () => {
  return (
    <>
      <div className="relative flex items-center justify-center w-full">
        <div className="flex items-center justify-center w-full min-h-screen py-10 pb-20 bg-black bg-opacity-35">
          <div className="grid items-center justify-center grid-cols-1 gap-4 p-4 md:grid-cols-2">
            <div className="flex flex-col justify-center w-full gap-5 mx-auto md:w-3/4 ">
              <h2 className="text-[18px] lg:text-[26px]  text-start xl:text-[28px] 2xl:text-[32px] text-stone-100">
                BIR DAMLA KEYIF, BIR ŞIŞE MUTLULUK
              </h2>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-stone-300 ">
                Ömür Süryani Şarap Evi, geleneksel Süryani şarapları ile
                benzersiz bir lezzet yolculuğuna davet ediyor. Binlerce yıllık
                kökleri ve zengin mirasıyla Süryani şarapları, size özel bir tat
                deneyimi sunuyor. En seçkin üzümlerle üretilen şaraplarımız,
                tarih ve lezzetin mükemmel bir buluşmasıdır. Ömür Süryani Şarap
                Evi ile Süryani şarap kültürünü keşfedin ve damak zevkinizi
                ödüllendirin. Şimdi birinci sınıf Süryani şaraplarıyla tanışmak
                için adım atın!
              </p>
              <div className="flex gap-4">
                <Link href="/products">
                  <Button
                    className="text-[14px] md:text-[16px] p-4 xl:py-6 lg:text-[18px] flex items-center xl:text-[20px] 2xl:text-[20px] text-stone-300 "
                    color="danger"
                  >
                    <FaWineBottle /> Ürünlerimiz
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send/?phone=905373972468&text&type=phone_number&app_absent=0"
                >
                  <Button
                    className="text-[14px] md:text-[16px] p-4 xl:py-6 lg:text-[18px] flex items-center xl:text-[20px] 2xl:text-[20px] text-stone-300 "
                    color="success"
                  >
                    <FaWhatsapp /> Sipariş Ver
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center ">
              <img
                className="w-3/4 lg:w-3/4 object-cover xl:max-h-[600px] lg:max-h-[600px] md:max-h-[600px] max-h-[500px] rounded-lg"
                src={landingCard}
                alt=""
              />
            </div>
          </div>
          <Divider color="#fff" />
        </div>
      </div>
    </>
  );
};
