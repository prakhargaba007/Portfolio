import About from "../components/About";
import FeedbackForm from "../components/FeedbackForm";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

function MainPage() {
  return (
    <>
      <About />
      <hr />
      <AboutMe />
      <hr />
      <Projects />
      <hr />
      <FeedbackForm />
    </>
  );
}
export default MainPage;
