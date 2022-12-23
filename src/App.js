import React from "react"

function AddCalculator() {
  let num1 = 0;
  let num2 = 0;
  console.log("더하기 컴포넌트 함수가 실행되었습니다.")
  return(
    <div>
      <h2>더하기</h2>
      <input type="number" name="num1" onChange={(e)=>{
        num1=Number(e.target.value)
        console.log(num1)
        }}/>
      <input type="number" name="num2" onChange={(e)=>{
        num2=Number(e.target.value)
        console.log(num2)

      }}/>
      결과 : {num1+num2}
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
