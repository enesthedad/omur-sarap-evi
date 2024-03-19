import { Header } from "../components/Header";
import { ScrollShadow } from "@nextui-org/react";
export const Assyrians = () => {
  return (
    <div>
      <div className="min-h-screen " id="assyrians">
        <div className="w-full">
          <Header />
        </div>
        <div className="grid items-center justify-center w-full min-h-screen grid-cols-1 px-4 py-10 md:grid-cols-2 bg-black/40">
          <ScrollShadow
            offset={-10}
            hideScrollBar
            className=" flex gap-2 flex-col justify-start items-start mx-auto h-[500px] w-full xs:w-[250px] bg-[#101211] py-8 px-8 2xl:h-[700px] 2xl:w-[700px] xl:h-[600px] xl:w-[600px]   md:w-[350px]"
          >
            <h5 className="text-4xl 2xl:text-[42px] text-white">
              Suryaniler kimdir?
            </h5>
            <p className="text-xl 2xl:text-[24px] text-stone-300">
              Süryaniler, Mezopotamya'nın en eski halklarındandır. Kadim bir
              halk olan Süryanilerin bölgede yaklaşık olarak 6500 yıllık bir
              geçmişleri vardır. Turabdin denilen bölgeyi anavatanları olarak
              kabul eden Süryaniler, ağırlıklı olarak Mardin ve çevresinde
              yaşamaktadırlar. Sanata yatkınlıkları yüksek bir halk olan
              Süryaniler, bölgeye sayısız konak, tarihi yapı, kilise ve manastır
              kazandırmışlardır. Taş işlemeciliğinin yanı sıra yüzyıllardır
              şarap üretimi, gümüş(telkâri) işlemeciliği de yapmaktadırlar.
              Yurtdışına yoğun göç vermelerine rağmen bölgede hala daha aktif
              olarak bulunmaktadırlar. Süryanilerin atası olarak Mezopotamya’nın
              kadim halklarından olan Aramiler ve Asurlular kabul edilmekte. Din
              olarak Hristiyan olan Süryaniler, dil olarak Süryanice
              konuşmaktadırlar. Türkiye’de yoğun olarak İstanbul, Mardin,
              Diyarbakır, Antakya, İzmir, Aydın, Adıyaman gibi illerde
              yaşamaktadırlar. En yoğun nüfus İstanbul ve Mardin’dedir.
              Mardin’de el sanatlarının yanı sıra bağcılıkla da ilgilenen
              Süryaniler uzun yıllardır katkısız şarap olarak Süryani Şarabı
              üretmektedirler. Eskiden her hane kendi ihtiyacını karşılamak veya
              dost meclislerinde sunmak amacıyla üretim yapmaktaydı; fakat
              günümüzde Süryani Şarabı’na olan talebin artmasıyla bölgede bir
              sektör haline gelmiş ve bu alanda işletmeler kurulmuştur. Kurulan
              işletmelerin üretmiş olduğu şaraplar Hollanda, Almanya, Japonya,
              İsveç gibi ülkelere ihraç edilmekte olup ülke ekonomisine katkı
              sağlamakta. Ayrıca uluslararası birçok yarışmadan da ödüllerle
              dönen Süryani Şarap’ları kalitesini kanıtlamış durumda. Ödüllerle
              ilgili detaylı bilgiyi “Ödüllerimiz” sayfasından
              inceleyebilirsiniz, ayrıca whatsapp hattımızdan bize ulaşarak
              sipariş verebilirsiniz.
            </p>
          </ScrollShadow>
          <div
            className="flex gap-2 rounded-xl flex-col justify-start items-start mx-auto 2xl:h-[700px] 2xl:w-[700px] xl:h-[600px] xl:w-[600px]   md:w-[350px] h-[500px] w-full xs:w-[250px]"
            id="assyrians-hero"
          ></div>
        </div>
      </div>
    </div>
  );
};
