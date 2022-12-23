import React, { useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import { createStore } from "redux"

const initialState ={num1:0, num2:0}
const 은행원 = (상태, 행동)=>{
  switch (행동.type) {
    case "setNum1":
      //어려운 로직들 막 작성하기~
      const 결과값 = 행동.값
      return {...상태, num1:결과값}//새로 업데이트될 상태를 return해준다!
    case "setNum2":
      return {...상태, num2:행동.값}
    default:
      return 상태
      break;
  }
} 
const 은행 = createStore(은행원, initialState)

const 행동들 = {
  setNum1(값){
    return {type:"setNum1",값:값}
  },
  setNum2(값){
    return {type:"setNum2",값:값}
  }
}

function App(){
  return(
    <Provider store={은행}>
      <Container />
    </Provider>
  )
}

function Container() {
  return (
    <div>
      <h1>계산기</h1>
      <AddCalculator />
      <SubCalculator />
    </div>
  );
}


function AddCalculator() {
  const {num1, num2} = useSelector(상태=>상태)
  const dispatch = useDispatch()
  const {setNum1,setNum2} = 행동들
  // const num1 = useSelector(상태=>상태.num1)
  // const num2 = useSelector(상태=>상태.num2)
  const handleNum1 = (e)=>{
    const newNum1 = parseInt(e.target.value)
    dispatch(setNum1(newNum1))
  }
  const handleNum2 = (e)=>{
    const newNum2 = parseInt(e.target.value)
    dispatch(setNum2(newNum2))
  }
  return(
    <div>
      <h2>더하기</h2>
      <input type="number" name="num1" value={num1} onChange={handleNum1}/>
      <input type="number" name="num2" value={num2} onChange={handleNum2}/>
      결과 : {num1+num2}
    </div>
  )
}

function SubCalculator() {
  const {num1, num2} = useSelector(상태=>상태)
  const dispatch = useDispatch()
  // const num1 = useSelector(상태=>상태.num1)
  // const num2 = useSelector(상태=>상태.num2)
  const handleNum1 = (e)=>{
    const newNum1 = parseInt(e.target.value)
    dispatch({type:"setNum1",값:newNum1})
  }
  const handleNum2 = (e)=>{
    const newNum2 = parseInt(e.target.value)
    dispatch()
  }
  return(
    <div>
      <h2>빼기</h2>
      <input type="number" name="num1" value={num1} onChange={handleNum1}/>
      <input type="number" name="num2" value={num2} onChange={handleNum2}/>
      결과 : {num1-num2}
    </div>
  )
}

export default App;
