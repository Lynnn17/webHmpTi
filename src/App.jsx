import Documentation from "./components/Documentation";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Bg from "./assets/bg.png";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 selection:bg-cyan-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-center md:bg-cover"
          style={{ backgroundImage: `url(${Bg})` }}
        ></div>
      </div>
      <div className="">
        <Navbar />
        <Home />
        <Welcome />
        <About />
        <Documentation />
      </div>
    </div>
  );
}

export default App;
