import Layout from "../components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <Pricing />
      <Contact />
    </Layout>
  );
};

export default Index;
