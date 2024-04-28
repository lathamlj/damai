import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const Contact = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container className="not-prose rounded-lg md:rounded-xl">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl md:text-4xl">
            <Balancer>
              Ready to elevate your team with top-tier offshore talent?
            </Balancer>
          </h3>
          <h4 className="md:text-2xl opacity-70">
            <Balancer>
              Contact Damai Global today to learn how we can help you thrive in
              the ever-evolving landscape of US healthcare.
            </Balancer>
          </h4>
          <div className="flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Contact;
