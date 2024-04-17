// import React, { useState } from 'react';
// import { pickle } from 'pickle';

// interface PredictionComponentProps {}

// const PredictionComponent: React.FC<PredictionComponentProps> = () => {
//   const [input, setInput] = useState<string>('');
//   const [prediction, setPrediction] = useState<string>('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };

//   const makePrediction = async () => {
//     const model = await pickle.load('my_model.pickle');
//     const prediction = await model.predict([input]);
//     setPrediction(prediction);
//   };

//   return (
//     <div>
//       <input type="text" value={input} onChange={handleInputChange} />
//       <button onClick={makePrediction}>Make Prediction</button>
//       <p>Prediction: {prediction}</p>
//     </div>
//   );
// };

// export default PredictionComponent;

// PredictionComponent.tsx



import React, { useState } from 'react';
import axios from 'axios';

const PredictionComponent: React.FC = () => {
  const [inputData, setInputData] = useState<string>('');
  const [prediction, setPrediction] = useState<any>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const makePrediction = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/model/inputHour=${inputData}`);
      console.log(response)
      setPrediction(response.data);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      {/* Add more input fields as needed */}
      <button onClick={makePrediction}>Make Prediction</button>
      <p>Prediction: {prediction}</p>
    </div>
  );
};

export default PredictionComponent;
