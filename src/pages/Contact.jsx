import { Header } from "../components/Header";

export const Contact = () => {
  return (
    <div id="contact" className="hero-page">
      <div className="w-full">
        <Header />
      </div>
      <div className="grid items-center   py-[70px] w-full grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col gap-6 px-6 py-10 rounded-lg text-white 2xl:w-[750px]  w-[350px] md:w-[600px] lg:w-[500px] xl:w-[550px] lg:h-[500px]  justify-center  bg-stone-900/75">
            <h4 className="text-3xl font-bold uppercase">İletişim</h4>
            <div className="flex flex-col ">
              <h6 className="text-xl font-bold">Adres</h6>
              <p className="text-xl ">
                Akçakaya mahallesi, Kocamanoğlu Caddesi No:16K
              </p>
              <p className="text-xl ">Ömür Süryani Şarap Evi Mardin / Midyat</p>
            </div>
            <div className="flex flex-col">
              <h6 className="text-xl font-bold">Telefon</h6>
              <p className="text-xl ">0537 397 2468</p>
            </div>
            <div className="flex flex-col">
              <h6 className="text-xl font-bold">Email</h6>
              <p className="text-xl ">omursuryanisarapevi@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          <iframe
            className=" w-[350px] h-[350px] md:w-[600px] xl:w-[550px] 2xl:w-[750px] lg:w-[500px] lg:h-[500px] rounded-xl relative shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1584.4708358131602!2d41.373750667277854!3d37.41485353638204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400a4de6c8c136a9%3A0xd350f15bc5483e22!2zw5Ztw7xyIFPDvHJ5YW5pIMWeYXJhcCBFdmk!5e0!3m2!1str!2str!4v1710433618190!5m2!1str!2str"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
