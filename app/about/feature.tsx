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
            The inspiration for Damai Global began with the friendships that our founder, 
            Matthew, forged with ambitious and talented individuals while living in Ghana, Africa. 
            Moved by their potential and drive, Matthew sought to provide them with opportunities 
            for a more fulfilling and enriching professional journey.
            Partnering with Dr. Carl Van Gils, a podiatrist at the Foot & Ankle Institute in St. George, Utah, 
            they decided to test the idea of using a remote offshore worker to support the busy medical practice.<br />
            Their first hire was a skilled college graduate from Accra, Ghana. This step proved to 
            be life-changing for the Ghanaian worker and brought significant efficiency and cost 
            savings to the podiatry practice.
            Within three months, Dr. Van Gils’ office manager requested two additional workers, 
            leading to the birth of Damai Global.<br />
            Founded on the principles of connecting talented individuals worldwide with meaningful 
            opportunities in the United States, Damai Global has grown rapidly.
            Today, we assist businesses in multiple states, positively impacting the lives of motivated 
            and skilled individuals across the globe.
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
