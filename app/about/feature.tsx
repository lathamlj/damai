import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Placeholder from "@/public/adjei.jpg";

const Feature = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container className="grid md:grid-cols-2 md:gap-12 items-stretch">
        <div className="not-prose border relative rounded-lg overflow-hidden flex h-96">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="!my-0 md:text-2xl">Our Story</h3>
          <p className="font-light leading-[1.4] opacity-70">
            After cultivating deep friendships with ambitious and talented
            individuals across the globe, our founders, Carl and Kim Van Gils,
            felt compelled to offer them the opportunity to embark on a more
            fulfilling and enriching professional journey. To begin this
            endeavor, Carl made the decision to hire our first employee, a
            skilled individual based in Accra, Ghana, who worked remotely to
            support Carl&apos;s podiatry practice. This momentous step marked
            the birth of Damai Global LLC, a company founded on the principles
            of connecting talented individuals worldwide to meaningful career
            opportunities in the US.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="/employers">Learn More</Link>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature;
