import Profile from "./components/Profile";
import Intro from "./components/Intro";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="wrapper">
      <Profile />
      <Intro />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
