import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { Services } from "@/components/home/Services";
import { Trust } from "@/components/home/Trust";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProperties />
      <Services />
      <Trust />
      <CTA />
    </Layout>
  );
};

export default Index;
