import React, { useState, useRef } from 'react';
import './App.css';  // You can add your custom styles here

function App() {
  const [ends, setEnds] = useState();
  const [warpYards, setWarpYards] = useState();
  const [warpGrossWeight, setWarpGrossWeight] = useState();
  const [warpNetWeight, setWarpNetWeight] = useState();
  const [beamMetres, setBeamMetres] = useState();
  const [sizingNetWeight, setSizingNetWeight] = useState();
  const [tapeLength, setTapeLength] = useState(41);  // Default is 41

  // Refs for navigating through fields
  const warpYardsRef = useRef();
  const warpGrossWeightRef = useRef();
  const warpNetWeightRef = useRef();
  const beamMetresRef = useRef();
  const sizingNetWeightRef = useRef();
  const tapeLengthRef = useRef();

  // Handler for key press navigation
  const handleKeyDown = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();  // Prevent form submission on "Enter"
      nextRef.current.focus();  // Move to the next field
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pickup formula
    const pickup = (sizingNetWeight - warpGrossWeight) / warpGrossWeight * 100;

    // Elongation formula
    const elongation = ((beamMetres * tapeLength / 36) - warpYards) / warpYards * 100;

    // Beam count formula
    const beamCount = (ends * 8 * warpYards) / (1848 * warpNetWeight);

    // Display result
    alert(`Pickup Formula: ${pickup.toFixed(2)}%\nElongation: ${elongation.toFixed(2)}\nBeam Count: ${beamCount.toFixed(2)}`);

    // Clear the input fields after submission
    setEnds(0);
    setWarpYards(0);
    setWarpGrossWeight(0);
    setWarpNetWeight(0);
    setBeamMetres(0);
    setSizingNetWeight(0);
    setTapeLength(41);  // Reset tape length back to its default value
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <label>
          Ends:
        </label>
        <input
          type="number"
          value={ends}
          onChange={(e) => setEnds(Number(e.target.value))}
          onKeyDown={(e) => handleKeyDown(e, warpYardsRef)}  // Move to the next field
        />

        <label>
          Warp Yards:
        </label>
        <input
          type="number"
          value={warpYards}
          ref={warpYardsRef}
          onChange={(e) => setWarpYards(Number(e.target.value))}
          onKeyDown={(e) => handleKeyDown(e, warpGrossWeightRef)}
        />

        <label>
          Warp Gross Weight:
        </label>
        <input
          type="number"
          value={warpGrossWeight}
          ref={warpGrossWeightRef}
          onChange={(e) => setWarpGrossWeight(Number(e.target.value))}
          onKeyDown={(e) => handleKeyDown(e, warpNetWeightRef)}
        />

        <label>
          Warp Net Weight:
        </label>
        <input
          type="number"
          value={warpNetWeight}
          ref={warpNetWeightRef}
          onChange={(e) => setWarpNetWeight(Number(e.target.value))}
          onKeyDown={(e) => handleKeyDown(e, beamMetresRef)}
        />

        <label>
          Beam Metres:
        </label>
        <input
          type="number"
          value={beamMetres}
          ref={beamMetresRef}
          onChange={(e) => setBeamMetres(Number(e.target.value))}
          onKeyDown={(e) => handleKeyDown(e, sizingNetWeightRef)}
        />

        <label>
          Sizing Net Weight:
        </label>
        <input
          type="number"
          value={sizingNetWeight}
          ref={sizingNetWeightRef}
          onChange={(e) => setSizingNetWeight(Number(e.target.value))}
          onKeyDown={(e) => handleKeyDown(e, tapeLengthRef)}
        />

        <label>
          Tape Length:
        </label>
        <input
          type="number"
          value={tapeLength}
          ref={tapeLengthRef}
          onChange={(e) => setTapeLength(Number(e.target.value))}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
