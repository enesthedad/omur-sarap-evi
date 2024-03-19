import { Accordion, AccordionItem } from "@nextui-org/react";
import { Divider } from "./Divider";

export const WhyWe = () => {
  const defaultContent = [
    "Süryani şarap geleneğini modern dünyaya taşıyoruz. Binlerce yıllık zengin mirasımızı sürdürerek, her damla şarabımızda bu köklü geçmişi hissettiriyoruz. Üretim sürecimizde geleneksel yöntemleri koruyor, en kaliteli üzümlerle birleştiriyor ve bu eşsiz birlikteliği sizinle paylaşıyoruz. Bu sadece bir içki değil, bir kültür ve tarih yolculuğudur. Bizimle, geleneksel Süryani şaraplarının eşsiz dünyasını keşfedin.",
    "Müşteri memnuniyetini en üst düzeye çıkarıyoruz. Her siparişi özenle hazırlıyor, sizin için en iyi hizmeti sunmak için sürekli çaba sarf ediyoruz. Sorularınızı çözmek, taleplerinizi karşılamak ve alışveriş deneyiminizi mükemmel hale getirmek için buradayız. Bizimle alışveriş yaptığınızda sadece ürün değil, aynı zamanda özel bir hizmet alacağınızı garanti ediyoruz.",
    "Biz, en kaliteli üzümleri seçerek ve özenle işleyerek lezzetin zirvesine ulaşıyoruz. Her damla şarabımız, özgün tat profili ve derin karakteri ile sizi büyülüyor. Damak zevkinize hitap eden geniş bir yelpaze sunuyoruz ve her bir şişe, zengin aromalar ve benzersiz lezzetlerle dolu bir deneyim sunuyor. Lezzetin doruklarına çıkmak için bize katılın ve Süryani şaraplarının muhteşem dünyasını keşfedin.",
  ];
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full gap-10  py-[140px]">
        <div className="flex flex-col gap-6 px-0 py-4 rounded-md xl:px-6 lg:px-4 md:px-2 ">
          <h3 className="p-2 text-3xl font-semibold tracking-wider text-center uppercase lg:text-4xl md:text-3xl">
            Neden Biz?
          </h3>
          <div className=" lg:w-[500px] md:w-[400px] w-[300px] sm:w-[200px]">
            <Accordion variant="shadow" className="p-2">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="GELENEK"
                color="shadow"
              >
                {defaultContent[0]}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="MÜŞTERI MEMNUNIYETI"
              >
                {defaultContent[1]}
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 3" title="LEZZET">
                {defaultContent[2]}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <Divider color="#722F37" />
      </div>
    </>
  );
};
