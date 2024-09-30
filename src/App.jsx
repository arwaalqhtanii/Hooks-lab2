import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  const images = {
    underweight: "https://i.pinimg.com/474x/57/3f/d2/573fd213de4ea9af7945e145c7f90789.jpg", 
    normal: "https://i.pinimg.com/474x/f9/a3/0e/f9a30e4ec85caa8d292fe2b90e556b4d.jpg",   
    overweight: "https://i.pinimg.com/474x/42/ed/17/42ed17799479c06ec2ae9ae7b6d9d41f.jpg", 
    obese: "https://i.pinimg.com/474x/59/00/53/5900533f22b1994791dcce27262bd7b9.jpg"
  };

  const calculateBMI = () => {
    setError(null); 

    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setStatus(' You are underweight 💀 !');
        setImage(images.underweight);
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setStatus(' You are healthy 👍 !' );
        setImage(images.normal);
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setStatus(' You are overweight 😔 !');
        setImage(images.overweight);
      } else {
        setStatus(' You are obese, please consider a healthier diet 😔 !');
        setImage(images.obese);
      }
    } else {
      setError('Please enter a valid weight and height');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200">

      <h1 className="text-4xl font-mono mb-6 text-center text-pink-800">BMI Calculator</h1>

 
      <div className="mb-4 w-72">
        <label className="block text-gray-700 text-lg font-mono mb-2">Weight (in kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
          className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>


      <div className="mb-4 w-72">
        <label className="block text-gray-700 text-lg font-mono mb-2">Height (in cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
          className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>


      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={calculateBMI}
        className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-800 transition duration-200 mb-6 focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        Calculate Now
      </button>


      {bmi && (
        <div className="text-center bg-white p-4 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-mono text-gray-800">BMI: {bmi}</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">{status}</h3>
          <img src={image} alt="BMI result" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-pink-400 shadow-lg" />
        </div>
      )}
    </div>
  );
}

export default App;
