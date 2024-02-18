function generateFlowerId(name) {
  return name.toLowerCase().replaceAll(' ', '') + Date.now();
}

export default function AddFlowerWindow({ showWindow, addFlower }) {
  const labelClass = 'text-gray-700 text-sm font-bold mb-2 mr-2';
  const inputClass = 'rounded-sm border-2 border-solid focus:outline-blue-500';

  function handleSubmit(e) {
    const form = e.target;
    const dataArr = [...new FormData(form)];
    const data = Object.fromEntries(dataArr);
    data.id = generateFlowerId(data.name);
    addFlower(data);
  }

  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 px-8 pt-6 pb-8 z-50 bg-white rounded-lg shadow-md`}
    >
      <button
        onClick={showWindow}
        className="absolute top-0.5 right-1 text-3xl cursor-pointer border-none"
      >
        &times;
      </button>
      <form
        className="grid gap-8 items-center"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
          showWindow();
        }}
      >
        <div className="grid gap-3 grid-cols-addWindow">
          <h3 className="col-span-full text-4xl font-bold mb-4 text-gray-700">
            Flower Data
          </h3>
          <label className={labelClass}>Flower Name</label>
          <input className={inputClass} type="text" name="name" />
          <label className={labelClass}>Image url</label>
          <input className={inputClass} type="text" name="imageUrl" />
          <label className={labelClass}>Description</label>
          <input className={inputClass} type="text" name="description" />
          <label className={labelClass}>Dose</label>
          <input className={inputClass} type="number" name="dose" />
          <label className={labelClass}>Frequency</label>
          <input className={inputClass} type="number" name="frequency" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-24 py-2 px-4 rounded-full justify-self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
