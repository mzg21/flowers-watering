import roseImg from '../../assets/rose.jpg';

export default function Flower() {
  return (
    <li className="flex items-center pl-4 h-24 cursor-pointer hover:bg-slate-50">
      <div>
        <figure className="flex items-center pr-4">
          <img
            src={roseImg}
            alt="A flower image"
            className="block w-16 h-16 object-cover rounded-full"
          />
        </figure>
      </div>
      <div>
        <h2 className="text-md capitalize">rose</h2>
        <p className="text-xs">2 days until next watering</p>
      </div>
    </li>
  );
}
