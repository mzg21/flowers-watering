import AddFlowerWindow from '../Flowers/AddFlowerWindow';

export default function Nav({ addFlower, showWindow, isWindowDisplayed }) {
  console.log(isWindowDisplayed);
  return (
    <nav className=" p-5">
      <ul>
        <li>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-3"
            onClick={() => {
              addFlower();
              showWindow();
            }}
          >
            Add Flower
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            My Flowers
          </button>
        </li>
      </ul>
      {isWindowDisplayed && <AddFlowerWindow />}
    </nav>
  );
}
