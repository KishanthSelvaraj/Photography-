import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Gal2 from "@/components/Gal2";
import Gallary from "@/components/Gallary";
import Hero from "@/components/Hero";
import List from "@/components/List";
import Service from "@/components/Service";
import Stats from "@/components/Stats";
import Test from "@/components/Test";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <List />
      <Service />
      <Gallary />
      <Stats />
      <FAQ />
      {/* <Gal2/> */}
      <Test />
      <Contact />
    </div>
  );
}
