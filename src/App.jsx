import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LearningModules from "./components/LearningModules.jsx";
import Competition from "./components/Competition.jsx";
import Courses from "./components/Courses.jsx";
import Blog from "./pages/Blog.jsx";
import Shop from "./pages/Shop.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
          <Navbar />
          <Hero />
          {/*<LearningModules />*/}
          <Competition />
          <Courses />
          <Blog />
          <Shop />
          <Footer />
      </main>
    </BrowserRouter >
  )
}

export default App
