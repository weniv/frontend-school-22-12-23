import React from "react"

function AddCalculator() {
  return(
    <div>
      <h2>더하기</h2>
      <input type="number" name="num1" />
      <input type="number" name="num2" />
      결과 : 
    </div>

  )
}

function App() {
  return (
    <div>
      <h1>계산기</h1>
      <AddCalculator/>
    </div>
  );
}

export default App;
