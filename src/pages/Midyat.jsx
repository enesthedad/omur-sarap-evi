import { Header } from "../components/Header";
import { ScrollShadow } from "@nextui-org/react";
export const Midyat = () => {
  return (
    <div>
      <div className="min-h-screen " id="midyat">
        <div className="w-full">
          <Header />
        </div>
        <div className="flex items-center justify-center w-full min-h-screen grid-cols-1 px-4 bg-black/40">
          <ScrollShadow
            offset={-10}
            hideScrollBar
            className=" flex text-center gap-2 flex-col justify-center rounded-3xl items-start mx-auto h-auto w-full xs:w-[250px] bg-[#101211]/50 py-8 lg:px-8 px-2  2xl:w-[700px]  xl:w-[600px]   md:w-[750px]"
          >
            <h5 className="text-4xl 2xl:text-[42px] mx-auto text-white">
              Midyat
            </h5>
            <p className="text-xl  2xl:text-[24px] text-stone-300">
              Midyat, tarihte birçok medeniyete başkentlik etmiş, Süryaniler’in
              anavatanı olarak kabul edilen Turabdin Bölgesi sınırları
              içerisinde yer alan kadim bir ilçedir. Midyat isminin kökeni,
              Süryanice “vatanım” anlamına gelmekte olan Matiate kelimesinden
              türemiştir. İlçede Süryaniler’in yanı sıra farklı etnik kökenlere
              sahip toplumların da yaşaması sebebiyle Dinler ve Diller Şehri
              olarak anılmaktadır. İlçenin birçok yerinde Süryani Ustalar
              tarafından yapılmış olan tarihi yapılar, konaklar, hanlar, kilise,
              manastır ve camiiler bulunmaktadır. İlçede taş işleme sanatının
              yanı sıra gümüş işlemeciliği, şarap üretimi gibi zanaatlar da
              yapılmaktadır. Başlıca geçim kaynağı tarım ve hayvancılık olan
              ilçenin Mardin’e uzaklığı 60 kilometredir. Taş işleme sanatının
              güzel örneklerini görmek için yurtiçi ve yurtdışından yoğun turist
              akınına uğrayan ilçede birçok dizi ve film çekimi de yapılmıştır.s
              Midyat’ta üretilen doğal Süryani Şarapları’na şarapevimiz
              aracılığıyla ulaşmak için whatsapp sipariş hattımızdan bize
              ulaşabilirsiniz.
            </p>
          </ScrollShadow>
        </div>
      </div>
    </div>
  );
};
