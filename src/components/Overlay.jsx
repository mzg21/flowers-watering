export default function Overlay({ showWindow }) {
  return (
    <div
      onClick={showWindow}
      className="fixed top-0 left-0 w-full h-full z-40 bg-black backdrop-blur-sm bg-opacity-40 transition-all"
    ></div> // nei wiem czy tansitrion all potrzebne
  );
}
