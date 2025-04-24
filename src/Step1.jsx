const Step1 = ({ data, onChange }) => {
    const { name } = data;
    return (
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChange('name', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>
    );
  };
  
  export default Step1;
  