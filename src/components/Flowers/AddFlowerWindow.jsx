export default function AddFlowerWindow() {
  const labelClass = 'text-gray-700 text-sm font-bold mb-2 mr-2';
  const inputClass = 'rounded-sm border-2 border-solid';

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 px-8 pt-6 pb-8 bg-white rounded-lg shadow-md`}
    >
      <button className="absolute top-0.5 right-1 text-3xl cursor-pointer border-none">
        &times;
      </button>
      <form className="grid gap-8 items-center" onSubmit={handleSubmit}>
        <div className="grid gap-3 grid-cols-addWindow">
          <h3 className="col-span-full text-4xl font-bold mb-4 text-gray-700">
            Flower Data
          </h3>
          <label className="text-gray-700 text-sm font-bold mb-2 mr-2">
            Flower Name
          </label>
          <input
            className="rounded-sm border-2 border-solid "
            type="text"
            name="name"
          />
          <label className={labelClass}>Image url</label>
          <input className={inputClass} type="text" name="image" />
          <label className={labelClass}>Description</label>
          <input className={inputClass} type="text" name="description" />
          <label className={labelClass}>Dose</label>
          <input className={inputClass} type="number" name="dose" />
          <label className={labelClass}>Frequency</label>
          <input className={inputClass} type="number" name="frequency" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-24 py-2 px-4 rounded-full justify-self-center">
          Submit
        </button>
      </form>
    </div>
  );
}
