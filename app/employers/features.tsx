// Layout
import * as Craft from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { Handshake, Globe, Trophy } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Building Bridges",
    description:
      "At Damai Global, we believe in the power of connections. We cultivate strong, professional relationships with offshore talent, understanding their unique skills and aspirations. Then, we bridge the gap by connecting them with US healthcare entities in need of their expertise.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Tailored Solutions",
    description:
      "We understand that every partnership is unique. That's why we take a personalized approach, ensuring that each collaboration between an offshore professional and a US healthcare company is tailored to meet the specific needs and goals of both parties.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Win-Win Scenarios",
    description:
      "Our mission is to create mutually beneficial partnerships. By facilitating matches that align with the strengths and objectives of both the offshore professional and the US entity, we ensure that every collaboration is a win-win scenario.",
  },
];

const Feature = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>How We Operate:</Balancer>
          </h3>

          <div className="grid md:grid-cols-3 mt-6 gap-6 md:mt-12">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature;
