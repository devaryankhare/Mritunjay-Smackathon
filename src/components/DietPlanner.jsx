import React, { useState } from 'react';
// Make sure to import your actual AI service function
import { generateDietPlan } from '../services/geminiService.js'; 

export const DietPlanner = () => {
  // State for the user's input
  const [prompt, setPrompt] = useState('');
  // State for the generated plan
  const [plan, setPlan] = useState('');
  // State to handle errors
  const [error, setError] = useState('');

  // This is now an async function to handle the API call
  const handleGeneratePlan = async () => {
    // Clear previous results
    setPlan('');
    setError('');

    if (!prompt.trim()) {
      setError('Please describe your health goals first.');
      return;
    }

    try {
      // Await the response from your AI service
      const generatedPlan = await generateDietPlan(prompt);
      
      // Check if the service returned an error message
      if (generatedPlan.startsWith('Failed to generate')) {
          setError(generatedPlan);
      } else {
          setPlan(generatedPlan);
      }

    } catch (apiError) {
      // Catch any unexpected errors during the fetch
      console.error("API call failed:", apiError);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">AI Personalized Diet Planner</h1>
          <p className="text-gray-600 mt-2">
            Describe your health goals, preferences, or any conditions.
          </p>
        </div>

        {/* Input Textarea */}
        <div>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows="4" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="e.g., I want to lower my sugar and build lean muscle."
          />
        </div>

        {/* Generate Button */}
        <div>
          <button 
            onClick={handleGeneratePlan}
            className="w-full sm-w-auto bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
          >
            Generate My Diet Plan
          </button>
        </div>

        {/* Output Section */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-700">Your Personalized Plan:</h2>
          <div className="w-full p-4 bg-gray-100 rounded-md min-h-[100px] text-gray-700 whitespace-pre-wrap">
            {error && <p className="text-red-500">{error}</p>}
            {plan && <p>{plan}</p>}
            {!error && !plan && <p className="text-gray-500">Your generated plan will appear here...</p>}
          </div>
        </div>

      </div>
    </div>
  );
};

// FIX: Add a default export to match the import statement in App.jsx
export default DietPlanner;
