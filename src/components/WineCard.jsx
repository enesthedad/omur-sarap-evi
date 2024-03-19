import {
  Card,
  CardFooter,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  Progress,
} from "@nextui-org/react";

export const WineCard = ({ wine }) => {
  const content = (
    <PopoverContent className="xl:w-[500px] lg:w-[440px] md:w-[400px] w-[300px] h-full">
      {(titleProps) => (
        <div className="w-full px-1 py-2">
          <p className="font-bold text-large text-foreground" {...titleProps}>
            {wine.wine}
          </p>
          <div className="flex flex-col w-full gap-2 mt-2">
            <p>
              <span className="font-bold text-stone-700">Üzüm Cinsi:</span>{" "}
              {wine.grapeType}
            </p>
            <p>
              <span className="font-bold text-stone-700">Alkol Oranı:</span> %
              {wine.percent}
            </p>
            <p>
              <span className="font-bold text-stone-700">Hacim:</span>{" "}
              {wine.volume} ML
            </p>
            <p className="p-2 bg-red-100 rounded-lg">{wine.message}</p>
            <p className="font-bold text-stone-700">Asitlik</p>
            <Progress
              color="danger"
              aria-label="Loading..."
              value={wine.acidity}
            />
            <p className="font-bold text-stone-700">Tat</p>
            <Progress
              color="danger"
              aria-label="Loading..."
              value={wine.taste}
            />
            <p className="font-bold text-stone-700">Yumusaklik</p>
            <Progress
              color="danger"
              aria-label="Loading..."
              value={wine.softness}
            />
          </div>
        </div>
      )}
    </PopoverContent>
  );
  return (
    <Card
      isFooterBlurred
      radius="lg"
      id={`card-${wine.id}`}
      className="border-none h-[400px] h-[400px]"
    >
      <CardFooter className="justify-between bg-black/40  before:bg-black/80 border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-medium text-white/80">{wine.wine}</p>
        <Popover
          key="blur"
          showArrow
          offset={10}
          placement="bottom"
          backdrop="blur"
        >
          <PopoverTrigger>
            <Button
              className="text-white bg-black/60 text-medium"
              variant="flat"
              radius="lg"
              size="sm"
            >
              Detaylar
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      </CardFooter>
    </Card>
  );
};
