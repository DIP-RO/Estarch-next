import SellingCategory from "@/components/sellingCategory/SellingCategory";
import HeaderBanner from "../components/headerBanner/page";
import ServiceMoto from "../components/serviceMoto/page";
import Subscription from "../components/subscription/page";
import NewArrival from "@/components/newArrival/NewArrival";
import FeatureProduct from "@/components/FeatureProducts/FeatureProduct";



export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeaderBanner />
      <ServiceMoto />
      <SellingCategory/>
      <NewArrival/>
      <FeatureProduct />
      <Subscription />    
    </main>
  );
}
