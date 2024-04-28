import * as Craft from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container>
        <h1>About Us</h1>
        <h2 className="text-muted-foreground">
          <Balancer>
            Our mission is to facilitate the professional relationship between
            intelligent and capable workers from around the globe with
            forward-thinking US businesses offering remote work.
          </Balancer>
        </h2>
        <div className="flex gap-2 items-center mt-8">
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
          <Link href="/employers">
            <Button variant={"outline"}>Employers</Button>
          </Link>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Header;
