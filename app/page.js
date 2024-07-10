import BestSell from "./bestSell/BestSell";
import HeaderBanner from "./headerBanner/page";
import ServiceMoto from "./serviceMoto/page";
import Subscription from "./subscription/page";


export default function Home() {
  return (
    <main className="">
      <HeaderBanner />
      <ServiceMoto />
      <BestSell />
      <Subscription/>
    </main>
  );
}
