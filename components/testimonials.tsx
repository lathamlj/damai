// Layout
import * as Craft from "@/components/craft";
import Balancer from "react-wrap-balancer";

type YouTubeVideo = {
  id: string;
};

// Youtube
import { YouTubeEmbed } from "@next/third-parties/google";

const videos: YouTubeVideo[] = [
  {
    id: "Y78WwVyZavo",
  },
  {
    id: "BWdYG0qqK3k",
  },
];

const Testimonials = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl md:text-4xl">
            <Balancer>Testimonials</Balancer>
          </h3>
          <h4 className="md:text-2xl font-light opacity-70">
            <Balancer>See what our customers are saying about us</Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {videos.map((video, index) => (
              <YouTubeEmbed
                style="border-radius: 10px;"
                videoid={video?.id}
                params="controls=0"
                key={index}
              />
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Testimonials;
