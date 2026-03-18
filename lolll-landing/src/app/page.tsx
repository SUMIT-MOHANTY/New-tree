import Hero from "@/components/Hero";
import { HeroProps } from "@/components/Hero";

export default function Home() {
  // Default props used via Hero component defaults
  const heroProps: HeroProps = {
    headline: "Laugh First",
    tagline: "Because joy makes everything better.",
    ctaLabel: "Get beta access",
  };

  return <Hero />;
}
