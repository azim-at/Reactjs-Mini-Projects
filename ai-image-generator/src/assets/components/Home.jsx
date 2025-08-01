import React, { useState } from 'react';
import image from '/public/default_image.svg';
import axios from 'axios';
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const Home = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');

  const generateImage = async () => {
    if (!prompt.trim()) {
    alert("Please enter a valid prompt.");
    return;
  }
    setLoading(true);
    setImageUrl('');
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: prompt,
          n: 1,
          size: '512x512',
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setImageUrl(response.data.data[0].url);
    } catch (error) {
      console.error(error.response?.data || error.message);
        alert('Check console for detailed error.');;
    } finally {
      setLoading(false);
      setText(`Description ${prompt}`)
      setPrompt('');
    }
  };

  return (
    <div className="home container text-center">
      <h1 className="mb-5">
        Ai image <span>generator</span>
      </h1>

      <div className="img-loading mb-4">
        <img
          src={imageUrl ? imageUrl : image}
          alt="Generated"
          className="img-fluid rounded"
          style={{ maxWidth: '512px' }}
        />
      </div>

      <div><p className='text-capitalize'>{text}</p></div>

      {loading && (
        <div className="loading-bar mt-2">
          <div className="loading-fill"></div>
        </div>
      )}

      <div className="input-wrapper mt-4">
        <input
          type="text"
          className="custom-input"
          placeholder="Describe what you want to see"
          aria-label="User prompt"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />
        <button
          className="custom-btn"
          type="button"
          id="generate-btn"
          onClick={generateImage}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Home;
