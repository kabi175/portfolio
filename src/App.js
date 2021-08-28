import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-mono">
      {" "}
      <About /> <Skills /> <Projects /> <Footer />
    </div>
  );
}

export default App;
