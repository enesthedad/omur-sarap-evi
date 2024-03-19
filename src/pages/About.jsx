import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { Link } from "@nextui-org/react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquareWhatsapp,
  FaSquareEnvelope,
} from "react-icons/fa6";
export const About = () => {
  return (
    <>
      <div className="relative ">
        <div id="about" className="min-h-screen ">
          <div className="w-full min-h-screen bg-black/50">
            <div className="w-full ">
              <Header />
            </div>{" "}
            <div className="grid items-center justify-center h-full grid-cols-1 md:gap-4 gap-[100px] md:py-[100px] py-[50px] md:min-h-screen lg:grid-cols-2">
              <div className="flex flex-col items-center justify-center w-full gap-2 px-5 mx-auto xl:p-5 md:w-full md:px-4 2xl:w-2/3 2xl:mx-auto">
                <h3 className="xl:text-[46px] md:text-3xl text-2xl font-bold text-white uppercase text">
                  Hakkımızda
                </h3>
                <p className="xl:text-xl md:text-lg text-stone-300">
                  Ömür Şarap Evi olarak, sizlere en kaliteli ve lezzetli
                  şarapları sunmak için buradayız. Bizim için en önemli olan
                  şey, müşteri memnuniyetidir ve bu yüzden her bir ürünümüzü
                  özenle seçiyoruz.
                </p>
                <p className="xl:text-xl md:text-lg text-stone-300">
                  Mağazamız, sıcakkanlı ve samimi bir atmosfere sahip olup,
                  herkesin kendini evinde hissetmesi için tasarlanmıştır.
                  Bizimle geçireceğiniz her anın keyifli ve unutulmaz olmasını
                  istiyoruz. Ürünlerimiz, dünyanın dört bir yanından özenle
                  seçilmiş, en kaliteli ve lezzetli şaraplardan oluşmaktadır.
                  Her bir şarabımızın, damak tadınıza uygun bir seçenek
                  olacağına inanıyoruz.{" "}
                </p>
                <p className="xl:text-xl md:text-lg text-stone-300">
                  Müşteri memnuniyeti bizim için çok önemlidir. Bu yüzden,
                  sizlere en iyi hizmeti sunmak için elimizden gelenin en
                  iyisini yapıyoruz. Sorularınız, önerileriniz veya
                  endişeleriniz olursa, lütfen bizimle iletişime geçmekten
                  çekinmeyin.
                </p>
                <p className="xl:text-xl md:text-lg text-stone-300">
                  Ömür Şarap Evi olarak, sizleri mağazamızda ağırlamaktan büyük
                  mutluluk duyarız. Sizleri de aramızda görmeyi dört gözle
                  bekliyoruz.
                </p>
                <div className="flex gap-4 mx-auto mt-4 text-4xl md:self-start links text-stone-300">
                  <Link
                    href="https://www.facebook.com/omursuryanisarapevi"
                    target="_blank"
                    rel="noreferrer"
                    className="text-4xl links text-stone-300"
                  >
                    <FaFacebookSquare />
                  </Link>
                  <Link
                    href="https://www.instagram.com/omursuryanisarapevi/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-4xl links text-stone-300"
                  >
                    <FaInstagramSquare />
                  </Link>
                  <Link
                    href="https://twitter.com/suryanisarap"
                    target="_blank"
                    rel="noreferrer"
                    className="text-4xl links text-stone-300"
                  >
                    <FaSquareXTwitter />
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=905373972468&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                    className="text-4xl links text-stone-300"
                  >
                    <FaSquareWhatsapp />
                  </Link>
                  <Link
                    href="mailto:omursuryanisarapevi@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-4xl links text-stone-300"
                  >
                    <FaSquareEnvelope />
                  </Link>
                </div>
              </div>
              <div
                id="about-hero"
                className="flex items-center justify-center w-4/5 mx-auto rounded-lg h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[700px] md:w-2/3 bg-stone-200"
              ></div>
            </div>
          </div>
        </div>
        <Divider color="#212022" />
      </div>
    </>
  );
};
