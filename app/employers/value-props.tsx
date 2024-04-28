import * as Craft from "@/components/craft";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Item = {
  question: string;
  answer: string;
  link?: string;
};

const content: Item[] = [
  {
    question: "Access to Elite Talent",
    answer:
      "Say goodbye to the hassle of talent acquisition. With Damai Global, you gain access to a curated pool of rockstar offshore professionals who are eager to make a meaningful impact in your organization. Before pairing our professionals with a US entity counterpart, we train and certify them so that they come to you ready. Our professionals are HIPAA certified and receive technical training in Microsoft Office and cybersecurity, ensuring they possess the expertise and qualifications necessary to excel in your healthcare environment.",
  },
  {
    question: "Streamlined Processes",
    answer:
      "We take care of the logistics so you can focus on what matters most—growing your business. Our seamless integration process ensures a smooth transition and minimal disruption to your operations.",
  },
  {
    question: "Cost-Effective Solutions",
    answer:
      "Benefit from significant cost savings without compromising on quality. Our offshore professionals offer competitive rates, allowing you to maximize your resources while achieving superior results.",
  },
];

const ValueProps = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container>
        <h3 className="!mt-0 text-2xl lg:text-4xl">Why Choose Damai Global?</h3>
        <h4 className="text-muted-foreground">
          Here are just some of the reasons you should choose us
        </h4>
        <div className="mt-4 md:mt-8 not-prose flex flex-col gap-4">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="hover:bg-muted/50 transition-all border px-4 bg-muted/20 rounded-md"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="opacity-60 w-full mt-2 hover:opacity-100 transition-all flex items-center"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default ValueProps;
