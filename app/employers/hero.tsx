import { Section, Container } from "@/components/craft";

const Hero = () => {
  return (
    <Section className="not-prose border-b">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 flex flex-col gap-8">
          {/* Large Text */}
          <h1 className="text-4xl md:text-6xl font-normal tracking-tight">
            Welcome to Damai Global.
          </h1>
          {/* logo features */}
          <div className="p-4 flex flex-wrap border rounded-lg gap-6 items-center w-fit">
            <p>
              Helping companies hire <span className="font-bold">top-tier</span>{" "}
              offshore talent
            </p>
          </div>
          {/* End Text */}
          <div className="md:text-lg">
            <p className="hidden md:block">
              Welcome to Damai Global, your premier solution for accessing
              top-tier offshore talent to meet the needs of your US healthcare
              business. We specialize in cultivating robust relationships with
              highly educated and driven professionals residing offshore,
              matching them seamlessly with US healthcare companies seeking
              specialized expertise.
            </p>
            <div className="md:flex grid gap-2"></div>
            <p className="text-xs mt-4">
              <span className="opacity-50">Contact us now</span> to see how we
              can assist your business.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
