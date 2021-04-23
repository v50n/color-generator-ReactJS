import ColorGenerated from "./components/ColorGenerated";
import Values from 'values.js';
import React, {useState} from 'react'


function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [generatedColor, setGeneratedColor] = useState([]);

  const handleOnChange = (e) =>{
    setColor(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("hey");
    try {
      let colors = new Values(color);
      console.log(colors.all(10));
      setGeneratedColor(colors.all(10));
    } catch (error) {
      setError(true);
      console.log(error)
    }
  }

  return (
    <div className="App">
      <div className="form-section">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} placeholder="#ffffff" onChange={handleOnChange}/>
          <button>Submit</button>
        </form>
      </div>
      <div className="color-generated">
      {
        error ? (<p className="color-val">The color is not exist</p>) : (
          generatedColor.map((color,index) => <ColorGenerated key={index} {...color} hexColor={color.hex} />)
        )
      }
      </div>

    </div>
  );
}

export default App;
