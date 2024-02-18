import Flower from './Flower';

export default function FlowersList({ flowers }) {
  return (
    <div className="bg-white min-h-main pt-8">
      <ul className="flex flex-col w-72">
        {flowers.flowers.map(flower => (
          <Flower key={flower.id} flower={flower} />
        ))}
      </ul>
    </div>
  );
}
