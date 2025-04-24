import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const steps = {
    1: <Step1 data={formData} onChange={handleChange} />,
    2: <Step2 data={formData} onChange={handleChange} />,
    3: <Step3 data={formData} />
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 transition-all duration-500">

        {/* Logo + Heading */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-4xl">🧙‍♂️</span>
          <h1 className="text-3xl font-extrabold text-blue-900 tracking-wide">Wizard UI</h1>
        </div>

        <h2 className="text-xl font-semibold text-blue-800 mb-6 text-center">
          Step {currentStep} of 3
        </h2>

        <div className="animate-fade">{steps[currentStep]}</div>

        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium disabled:opacity-40"
          >
            Previous
          </button>

          {currentStep < 3 ? (
            <button
              onClick={nextStep}
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
            >
              Next
            </button>
          ) : (
            <span className="text-green-600 font-bold text-lg">
              🎉 All Steps Completed!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WizardForm;
