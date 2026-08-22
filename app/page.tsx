import { Career, Hero, Services, TechStack } from "@/components/home";
import WorksPage from "@/components/home/work";
import Testimonials from "@/components/home/testimonials";

export const metadata = {
  title: "Home | Software Architecture & Development",
  description:
    "Explore the technical portfolio of Alexander Ukwueze. Specializing in scalable infrastructure and modern web engines.",
};

export default function Page() {
  return (
    <div className="main-container">
      <Hero />
      <TechStack />
      <Career preview />
      <Services />
      <Testimonials />
      <WorksPage preview />
    </div>
  );
}
