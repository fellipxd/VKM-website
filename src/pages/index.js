/* eslint-disable @next/next/no-img-element */
import Contact from "../components/Contact/Contact";
import Container from "../components/Container/Container";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Stats from "../components/Stats/Stats";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
  return (
    <Container
      headerPix="/potrait-unsplash.webp"
      title={"Modern, seamless solutions at "}
      titleHighlighted={"record time"}
      subtitle=" With our strong and creative workforce, we customize and implement
    projects in extremely short time interval."
    >
      <Stats />
      <Services />
      <Projects />
      <Testimonial />
    </Container>
  );
}