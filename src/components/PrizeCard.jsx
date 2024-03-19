import { Card, CardFooter, Image, Chip } from "@nextui-org/react";
import cmcLogo from "../imgs/cmclogo.png";
import sakura from "../imgs/sakura.png";
import sommeliers from "../imgs/sommeliers.png";
export const PrizeCard = ({ prize }) => {
  const { degree, title, year, competition } = { ...prize };
  const prizeSelector = ({ degree }) => {
    if (degree === "Silver") {
      return "bg-stone-300";
    } else if (degree === "Gold") {
      return "bg-amber-500";
    } else {
      return "bg-emerald-300";
    }
  };
  const photoSelector = (competition) => {
    if (competition == "CMC") {
      return cmcLogo;
    } else if (competition == "Sommeliers") {
      return sommeliers;
    } else {
      return sakura;
    }
  };
  console.log(competition);
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="relative items-center md:h-[450px] h-[350px] bg-[#212022]/70  2xl:h-[400px] border-none"
    >
      <Image
        alt={`${competition}-${year}-${degree}}`}
        className="object-cover md:h-[450px] h-[350px] object-center scale-85  lg:w-[400px] lg:h-[400px]  2xl:h-[375px]  py-4 mx-auto "
        src={photoSelector(competition)}
      />
      <Chip className="absolute bg-[#212022] text-white font-semibold top-4 right-4">
        {prize.year}
      </Chip>
      <CardFooter className="justify-between bg-black/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className=" text-white/80">{title}</p>
        <Chip className={prizeSelector(prize)}>{degree}</Chip>
      </CardFooter>
    </Card>
  );
};
