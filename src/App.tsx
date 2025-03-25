import Approach from "./Approach";
import Climb from "./Climb";
import Protection from "./Protecting";
import jsFullImg from "./assets/5300255_large_1557853994.jpg";
import jsCloseUp from "./assets/106099080_large_1558647731.jpg";
import jsApproach from "./assets/112783725_large_1494314708.jpg";

function App() {
  return (
    <div>
      <h1 className="text-center text-xl font-semibold py-2 bg-rose-400">
        Jubilant Song Climb
      </h1>
      <div className="max-w-2xl mx-auto flex flex-col items-center pt-2 gap-2">
        <h2 className="text-lg font-semibold">Climb</h2>
        <Climb />
        <h2 className="text-lg font-semibold">Approach</h2>
        <Approach />
        <h2 className="text-lg font-semibold">Protection</h2>
        <Protection />
        <h2 className="text-lg font-semibold">Images</h2>
        <a href={jsFullImg}>
          <img src={jsFullImg} alt="Jubilant Song Full" />
        </a>
        <a href={jsCloseUp}>
          <img src={jsCloseUp} alt="Jubilant Song Close Up" />
        </a>
        <a href={jsApproach}>
          <img src={jsApproach} alt="Jubilant Song Approach" />
        </a>
      </div>
    </div>
  );
}

export default App;

/* 
jubilant Song
Tunnel vision
Domestic Bliss
Lotta Balls
*/
