const Step3 = ({ data }) => {
    const { name, email } = data;
    return (
      <div className="space-y-3">
        <p className="text-gray-600">Please confirm your details:</p>
        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          <p><strong className="text-gray-700">Name:</strong> {name || 'N/A'}</p>
          <p><strong className="text-gray-700">Email:</strong> {email || 'N/A'}</p>
        </div>
      </div>
    );
  };
  
  export default Step3;
  