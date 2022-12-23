import React, { useEffect, useState } from "react"

function AddCalculator() {
  const [num1,setNum1] = useState(0)// useState라는 함수 실행결과로 배열이 나온다.
  const [num2,setNum2] = useState(0)
  useEffect(()=>console.log("값이바뀜"),[num1,num2])
  console.log(num1,"함수실행 했을때 num1")

  console.log("더하기 컴포넌트 함수가 실행되었습니다.")
  return(
    <div>
      <h2>더하기</h2>
      <input type="number" name="num1" onChange={(e)=>{
        setNum1(Number(e.target.value))
        console.log(num1)//이 시점에서는 아직 값이 안바뀜
        // 그럼 언제바뀜? -> 컴포넌트를 그려주는 함수가 새로 실행됐을때!
        }}/>
      <input type="number" name="num2" onChange={(e)=>{
        setNum2(Number(e.target.value))
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
