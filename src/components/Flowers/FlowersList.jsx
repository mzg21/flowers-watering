import Flower from './Flower';

export default function FlowersList() {
  return (
    <div className="bg-white pt-8">
      <ul className="flex flex-col w-72">
        <Flower />
        <Flower />
        <Flower />
      </ul>
    </div>
  );
}
