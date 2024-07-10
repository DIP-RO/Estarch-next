import Products from "@/components/products/page";
import BestSell from "../components/bestSell/BestSell";
import HeaderBanner from "../components/headerBanner/page";
import ServiceMoto from "../components/serviceMoto/page";
import Subscription from "../components/subscription/page";


export default function Home() {
  return (
    <main className="">
      <HeaderBanner />
      <ServiceMoto />
      <BestSell />
      <Subscription />
      <Products/>
    </main>
  );
}
