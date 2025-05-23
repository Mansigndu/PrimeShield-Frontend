// src/Assistant.js

import React, { useState } from 'react';
import axios from 'axios';
import './assistant.css';

function Assistant() {
  const [userMessage, setUserMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Replace with your actual API key
  const API_KEY = 'AIzaSyCWwywt9O9XAOCzFpEJBPeqKYD214daWsw';
  
  const systemPrompt = `You are an expert insurance assistant on a general insurance website. You help users explore and understand different types of insurance such as car, home, health, and travel insurance. You also assist users in filing claims, checking policy details, and comparing insurance plans. Always respond in a helpful, professional, and easy-to-understand manner. If a user is unsure what they need, ask guiding questions to help them find the best option.`;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const result = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro-001:generateContent?key=${API_KEY}`,
        {
            contents: [
                {
                  role: 'user',
                  parts: [{ text: `${systemPrompt}\nUser: ${userMessage}` }],
                },
              ],
              
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const content =
        result.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from API.';
      setResponse(content);
    } catch (error) {
      console.error('Error calling API:', error.response?.data || error.message);
      setResponse('Error occurred. Please check API key or model name and try again.');
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <h1>PrimeShield Assistant</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Ask me about General insurance or anything else..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <br />
        <button className='policybutton' type="submit" disabled={loading}>
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </form>
      {response && (
        <div className="response">
          <h3>Assistant:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default Assistant;