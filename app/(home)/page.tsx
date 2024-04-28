import { Main } from "@/components/craft";
import Hero from "./hero";
import Feature from "./feature";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Feature />
      <Testimonials />
    </Main>
  );
}
