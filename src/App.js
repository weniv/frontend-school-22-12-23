import React, { useState } from "react"

function AddCalculator() {
  const [num1,setNum1] = useState(0)// useState라는 함수 실행결과로 배열이 나온다.
  const [num2,setNum2] = useState(0)
  console.log(num1)//배열의 0번째는 값이나오고 1번째는 함수(값을 바꿔주는)가나온다.
  
  console.log("더하기 컴포넌트 함수가 실행되었습니다.")
  return(
    <div>
      <h2>더하기</h2>
      <input type="number" name="num1" onChange={(e)=>{
        setNum1(Number(e.target.value))//리액트야! Number(e.target.value)이 값으로 바꿔줘!
        // console.log(num1)
        }}/>
      <input type="number" name="num2" onChange={(e)=>{
        setNum2(Number(e.target.value))
        // console.log(num2)

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
