import * as Craft from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

export function Contact() {
  return (
    <Craft.Section className="border-b">
      <Craft.Container className="space-y-8">
        <h2 className="text-2xl md:text-4xl">Contact Us!</h2>
        <p className="text-lg md:text-2xl opacity-70">
          <Balancer>
            Send us an email and we&apos;ll get back to you as soon as possible.
          </Balancer>
        </p>
        <p>
          Email us at:{" "}
          <Link href="mailto:mattgvangils@gmail.com">
            mattgvangils@gmail.com
          </Link>
        </p>
      </Craft.Container>
    </Craft.Section>
  );
}

export default Contact;
