import { Link } from "@nextui-org/react";
import { Logo } from "./Logo";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquareWhatsapp,
  FaSquareEnvelope,
} from "react-icons/fa6";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="w-full grid-cols-1 py-10  justify-center  lg:grid-cols-2 p-4 gap-4 grid bg-[#212022] xl:p-10">
        <div className="flex flex-col items-center justify-center max-w-lg md:mx-auto lg:mx-0">
          <Logo type="footer" />
          <div className="text-[15px] text-white">
            Ömür Süryani Şarap Evi, geleneksel Süryani şarapları ile benzersiz
            bir lezzet yolculuğuna davet ediyor. Binlerce yıllık kökleri ve
            zengin mirasıyla Süryani şarapları, size özel bir tat deneyimi
            sunuyor. En seçkin üzümlerle üretilen şaraplarımız, tarih ve
            lezzetin mükemmel bir buluşmasıdır. Ömür Süryani Şarap Evi ile
            Süryani şarap kültürünü keşfedin ve damak zevkinizi ödüllendirin.
            Şimdi birinci sınıf Süryani şaraplarıyla tanışmak için adım atın!
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 mx-auto md:mx-auto lg:mx-0">
          <h4 className="text-2xl text-white xl:text-3xl">Site Linkleri</h4>
          <div className="grid justify-between grid-cols-2 gap-3 text-2xl text-white">
            <Link className="text-[16px] md:text-lg lg:text-xl xl:text-2xl">
              <a
                className=" text-stone-400"
                aria-label="main-page-link"
                href="/"
              >
                Ana Sayfa
              </a>
            </Link>
            <Link className="text-[16px] md:text-lg lg:text-xl xl:text-2xl">
              <a
                className=" text-stone-400"
                aria-label="products-link"
                href="/products"
              >
                Ürünlerimiz
              </a>
            </Link>{" "}
            <Link className="text-[16px] md:text-lg lg:text-xl xl:text-2xl">
              <a
                className=" text-stone-400"
                aria-label="about-page-link"
                href="/about"
              >
                Hakkımızda
              </a>
            </Link>{" "}
            <Link className="text-[16px] md:text-lg lg:text-xl xl:text-2xl">
              <a
                className=" text-stone-400"
                aria-label="contact-page-link"
                href="/contact"
              >
                İletişim
              </a>
            </Link>
            <Link className="text-[16px] md:text-lg lg:text-xl xl:text-2xl">
              <a
                className=" text-stone-400"
                aria-label="assyrian-wine-link"
                href="/assyrian-wine"
              >
                Süryani Şarabı
              </a>
            </Link>
            <Link className="text-[16px] md:text-lg lg:text-xl xl:text-2xl">
              <a
                className=" text-stone-400"
                aria-label="midyat-page-link"
                href="/midyat"
              >
                Midyat
              </a>
            </Link>
            <Link className="text-[16px] md:text-lg lg:text-xl xl:text-2xl">
              <a
                className=" text-stone-400"
                aria-label="prizes-page-link"
                href="/prizes"
              >
                Ödüllerimiz
              </a>
            </Link>
            <Link className="text-[16px] md:text-lg lg:text-xl xl:text-2xl">
              <a
                className=" text-stone-400"
                aria-label="assyrians-page-link"
                href="/assyrians"
              >
                Süryaniler
              </a>
            </Link>
          </div>
          <div className="flex self-center gap-6 text-4xl md:self-start links text-stone-300">
            <Link
              href="https://www.facebook.com/omursuryanisarapevi"
              target="_blank"
              aria-label="facebook-link"
              rel="noreferrer"
              className="text-4xl links text-stone-300"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href="https://www.instagram.com/omursuryanisarapevi/"
              target="_blank"
              rel="noreferrer"
              aria-label="instagram-link"
              className="text-4xl links text-stone-300"
            >
              <FaInstagramSquare />
            </Link>
            <Link
              href="https://twitter.com/suryanisarap"
              target="_blank"
              aria-label="twitter-link"
              rel="noreferrer"
              className="text-4xl links text-stone-300"
            >
              <FaSquareXTwitter />
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=905373972468&text&type=phone_number&app_absent=0"
              target="_blank"
              aria-label="whatsapp-link"
              rel="noreferrer"
              className="text-4xl links text-stone-300"
            >
              <FaSquareWhatsapp />
            </Link>
            <Link
              href="mailto:omursuryanisarapevi@gmail.com"
              aria-label="mail-link"
              target="_blank"
              rel="noreferrer"
              className="text-4xl links text-stone-300"
            >
              <FaSquareEnvelope />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex  py-2 justify-center lg:gap-6 gap-2 items-center text-lg text-center text-white  flex-col w-full bg-[#212022]">
        <div className="text-[16px] lg:text-xl">
          Copyright ©{" "}
          <a href="/" aria-label="main-page" className="text-[#b64a56]">
            omursarapevi.com
          </a>{" "}
          {year} Tüm hakları saklıdır.
        </div>
        <div className="lg:text-lg text-[12px]">
          Designed and Developed by Enes Soyturk
        </div>
        <div className="flex gap-2 lg:gap-4 ">
          <Link
            href="https://twitter.com/enesthedad"
            target="_blank"
            aria-label="developer-twitter-link"
            rel="noreferrer"
            className="lg:text-[32px] text-[24px] text-stone-500"
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            href="https://github.com/enesthedad"
            target="_blank"
            aria-label="developer-github-link"
            rel="noreferrer"
            className="lg:text-[32px] text-[24px] text-stone-500"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </div>
    </>
  );
};
