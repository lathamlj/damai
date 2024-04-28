import { Main } from "@/components/craft";
import Feature from "./features";
import Hero from "./hero";
import ValueProps from "./value-props";
import Contact from "./contact";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Feature />
      <ValueProps />
      <Testimonials />
      <Contact />
    </Main>
  );
}
