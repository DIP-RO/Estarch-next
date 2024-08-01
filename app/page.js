import SellingCategory from "@/components/sellingCategory/SellingCategory";
import BestSell from "../components/bestSell/BestSell";
import HeaderBanner from "../components/headerBanner/page";
import ServiceMoto from "../components/serviceMoto/page";
import Subscription from "../components/subscription/page";
import NewArrival from "@/components/newArrival/NewArrival";



export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeaderBanner />
      <ServiceMoto />
      <SellingCategory/>
      <NewArrival/>
      <BestSell />
      <Subscription />    
    </main>
  );
}
