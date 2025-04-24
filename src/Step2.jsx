import React, { useState } from 'react';

const Step2 = ({ data, onChange }) => {
  const [email, setEmail] = useState(data.email || '');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    onChange('email', e.target.value);
  };

  const validateEmail = () => {
    // Check if email ends with @gmail.com or @yahoo.com
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email (either @gmail.com or @yahoo.com) to proceed.');
    } else {
      setError('');
    }
  };

  return (
    <div className="step2">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">Step 2: Enter your Email</h3>

      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail} // Validate email on blur (when focus leaves the input)
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="example@gmail.com"
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

    </div>
  );
};

export default Step2;
