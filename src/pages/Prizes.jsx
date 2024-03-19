import { Header } from "../components/Header";
import { PrizeCard } from "../components/PrizeCard";
import prizes from "../data/prizes";
export const Prizes = () => {
  return (
    <div>
      <div className="hero-page" id="prizes">
        <div className="w-full">
          <Header />
        </div>
        <div className="grid items-center justify-center min-h-screen grid-cols-1 gap-4 px-4 py-4 xl:grid-cols-3 md:grid-cols-2">
          {prizes.map((prize, index) => (
            <PrizeCard key={`prize-${index}`} prize={prize} />
          ))}
        </div>
      </div>
    </div>
  );
};
