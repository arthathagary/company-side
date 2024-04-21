import { InfiniteMovingCardsDemo } from "@/components/clients/InfiniteMovingCardsDemo";
import { Typewriter } from "@/components/hero-section/type-writer";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGridDemo } from "@/components/projects/BentoGridDemo";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <>
      <HeroHighlight>
        <MaxWidthWrapper>
          <Typewriter />
        </MaxWidthWrapper>
      </HeroHighlight>
      <InfiniteMovingCardsDemo />
      <MaxWidthWrapper>
        <BentoGridDemo />
      </MaxWidthWrapper>
    </>
  );
}
