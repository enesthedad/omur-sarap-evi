import { Header } from "../components/Header";
import { ScrollShadow } from "@nextui-org/react";
export const AssyrianWIne = () => {
  return (
    <div>
      <div className="min-h-screen " id="assyrian-wine">
        <div className="w-full">
          <Header />
        </div>
        <div className="grid items-center justify-center w-full min-h-screen grid-cols-1 px-4 md:grid-cols-2 bg-black/40">
          <ScrollShadow
            offset={-10}
            hideScrollBar
            className=" flex gap-2 flex-col justify-start items-start mx-auto h-[500px] w-full xs:w-[250px] bg-[#101211]/80 py-8 px-8 2xl:h-[700px] 2xl:w-[700px] xl:h-[600px] xl:w-[600px]   md:w-[350px]"
          >
            <h5 className="text-4xl 2xl:text-[42px] text-white">
              Süryani Şarabı nedir?
            </h5>
            <p className="text-xl 2xl:text-[24px] text-stone-300">
              Süryani şarabı, Mezopotamya Bölgesi'nde binlerce yıldır yaşamakta
              olan ve kadim bir halk olan Süryani'lerin büyük bir özveri ve
              titizlikle ürettikleri, içerisinde herhangi bir katkı-koruyucu
              madde içermeyen doğal bir şarap çeşididir. Süryani şarabı,
              yüzyıllar boyunca Süryani Toplumu tarafından; gerek özel günler,
              gerek ayinler, gerekse dost meclislerinde sunulmak amacıyla
              üretilmiştir. Binlerce yıl önce kullanılan geleneksel yöntemlerin,
              teknolojinin getirdiği yeniliklerle harmanlanması sonucu
              doğallığından ve kalitesinden ödün vermeden üretilen süryani
              şaraplarını, süryani şarap evi 'mizde siz değerli şarap severlerin
              beğenisine sunmaktayız.
            </p>
            <h5 className="text-4xl 2xl:text-[42px] text-white">
              Süryani Şarabı Çeşitleri Nelerdir?
            </h5>
            <p className="text-xl 2xl:text-[24px] text-stone-300">
              Geçmişin Tanrı'larından günümüz insanlarına kadar her daim tercih
              edilen bir içecek olan şarabı, özüne bağlı kalarak üretmekte olan
              Midyat Süryanileri, civar köylerde aynı zamanda bağcılık yapmakta
              ve yetiştirdikleri üzümleri süryani şarabı üretiminde
              kullanmaktadırlar. Bir beyaz üzüm çeşidi olan "mazrona" ve
              "kerküş" cinsi üzümlerden beyaz süryani şarabı, kırmızı üzüm
              çeşidi olan "hınwe kome" cinsinden ise kırmızı süryani şarabı
              üretilmektedir. Ayrıca kırmızı süryani şarabına katılan mahlep
              aromasıyla üretilmekte olan mahlepli süryani şarabı çeşidi de
              bulunmaktadır.
            </p>
          </ScrollShadow>
          <div
            className="flex gap-2 flex-col justify-start items-start mx-auto 2xl:h-[700px] 2xl:w-[700px] xl:h-[600px] xl:w-[600px]   md:w-[350px] h-[500px] w-full xs:w-[250px]"
            id="wine-hero"
          ></div>
        </div>
      </div>
    </div>
  );
};
