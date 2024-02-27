import ContactUs from "@/components/footer/contactus";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ContactUs />
    </>
  );
}
