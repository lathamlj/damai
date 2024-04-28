import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Main, Section, Container } from "@/components/craft";

export default function Home() {
  return (
    <Main>
      <Section className="relative backdrop-blur-sm">
        <Container className="flex flex-col gap-6">
          <Badge className="w-fit not-prose" variant="outline">
            <Link className="flex items-center gap-1 group" href="/">
              <ArrowLeft className="w-4" />
              Back to home
            </Link>
          </Badge>
          <h1 className="!mb-0">
            Uh oh! The page you&apos;re looking for doesn&apos;t exist.
          </h1>
          <h3 className="text-muted-foreground p-4 bg-muted/50 border rounded-md">
            See the links in the navigation bar or the footer to find a page
            you&apos;re looking for.
          </h3>

          <div className="flex gap-4">
            <Link href="/about">
              <Button>About us</Button>
            </Link>
            <Link href="/employers">
              <Button variant="outline">Employers</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </Main>
  );
}
