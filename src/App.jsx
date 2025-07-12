import { BackgroundBoxes } from "./components/elements/BackgroundBoxes";
import BackgroundSection from "./components/elements/BackgroundSection";
import { InfiniteMovingCardsElement } from "./components/elements/InfinteMovingCardsElement";
import { Boxes } from "./components/ui/Boxes";
import Navbar from "./components/ui/NavBar";


function App() {
  return (
    <div className="h-16">
      <div className="h-full ">
        <Navbar />
        <BackgroundSection/>
        <BackgroundBoxes />
        <InfiniteMovingCardsElement/>
      </div>
      <h1 className="text-3xl font-bold underline text-green-800"></h1>
    </div>
  );
}

export default App;
