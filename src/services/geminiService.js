// src/services/aiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_YOUR_GEMINI_API_KEY;

// Initialize the Gemini client
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const generateDietPlan = async (promptDetails) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
    
    // We combine the instructions and user details into a single prompt
    const prompt = `
      You are an expert nutritionist and diet planner. 
      Create a practical and easy-to-follow 3-day sample diet plan.
      Structure the response clearly with headings for each day (e.g., Day 1, Day 2, Day 3) 
      and subheadings for meals (e.g., Breakfast, Lunch, Dinner, Snacks).

      Please generate the plan based on these user details: "${promptDetails}"
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    return text;

  } catch (error) {
    console.error("Error in Gemini service:", error);
    return "Failed to generate a diet plan. Please try again.";
  }
};