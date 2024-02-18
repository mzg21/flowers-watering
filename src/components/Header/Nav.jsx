import AddFlowerWindow from '../Flowers/AddFlowerWindow';
import Overlay from '../Overlay';

export default function Nav({
  addFlower,
  showWindow,
  isWindowDisplayed,
  displayFlowers,
}) {
  return (
    <nav className=" p-5">
      <ul>
        <li>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-3"
            onClick={() => showWindow()}
          >
            Add Flower
          </button>
          <button
            onClick={displayFlowers}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            My Flowers
          </button>
        </li>
      </ul>
      {isWindowDisplayed && (
        <AddFlowerWindow showWindow={showWindow} addFlower={addFlower} />
      )}
      {isWindowDisplayed && <Overlay showWindow={showWindow} />}
    </nav>
  );
}
