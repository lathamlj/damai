import * as Craft from "@/components/craft";
import Home from "@/public/home.jpg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container>
        <div className="not-prose flex flex-col gap-6">
          <Button asChild className="w-fit" size={"sm"} variant={"outline"}>
            <Link href="/contact">
              Contact Us <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1 className="text-primary-500 text-4xl md:text-6xl">
            Damai Global
          </h1>
          <h2 className="text-xl md:text-3xl font-light">
            Our mission is to facilitate the professional relationship between
            intelligent and capable workers from around the globe with
            forward-thinking US businesses offering remote work.
          </h2>
          <div className="my-8 h-96 w-full overflow-hidden border rounded-lg md:rounded-xl md:h-[480px]">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Home}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Hero;
