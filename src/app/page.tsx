import CustomBanner from "@/components/CustomBanner";
import HeroSection from "@/containers/home-page/hero-section";
import ProductSection from "@/containers/home-page/product-section";

export default function Home() {
  return (
    <main>
      <CustomBanner />
      <HeroSection />
      <ProductSection />
    </main>
  );
}
