import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import React from "react"
import { Provider, useDispatch, useSelector } from "react-redux"

const initialState ={num1:0, num2:0, mallData:{}}//이게 초기상태

const asyncGetMallData = createAsyncThunk('calculator',async (id)=>{
  const res = await fetch("https://test.api.weniv.co.kr/mall/"+id);
  const json = await res.json();
  return json
})

const calculatorSlice = createSlice({
  name:"calculator",
  initialState:initialState,
  reducers:{
    setNum1:(state,action)=>{
      state.num1 = action.payload//리덕스 툴킷에서 불변성 알아서 잘 지켜줌~!
    },
    setNum2:(state,action)=>{
      state.num2 = action.payload
    },
    setMall:(state,action)=>{
      state.mallData = action.payload
    }
  },
  extraReducers:(builder)=>{
    // builder.addCase(asyncGetMallData.pending,(state,action)=>{
    // 나중에 빈칸채워서 이것저것 해보기
    // } )

    builder.addCase(asyncGetMallData.fulfilled, (state, action)=>{
      state.mallData = action.payload
    })
  }
})
const store = configureStore({
  reducer:{
    calculator:calculatorSlice.reducer,
  }
})

function App(){
  return(
    <Provider store={store}>
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
  const {num1, num2} = useSelector(state=>state.calculator)
  const dispatch = useDispatch()
  // const num1 = useSelector(상태=>상태.calculator.num1)
  // const num2 = useSelector(상태=>상태.calculator.num2)
  const handleNum1 = (e)=>{
    const newNum1 = parseInt(e.target.value)
    dispatch({type:"calculator/setNum1",payload:newNum1})
  }
  const handleNum2 = (e)=>{
    const newNum2 = parseInt(e.target.value)
    dispatch({type:"calculator/setNum2",payload:newNum2})

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
  const {num1, num2, mallData} = useSelector(state=>state.calculator)
  const {setNum1,setNum2} = calculatorSlice.actions
  const dispatch = useDispatch()
  const handleNum1 = (e)=>{
    const newNum1 = parseInt(e.target.value)
    dispatch({type:setNum1,payload:newNum1})
  }
  const handleNum2 = (e)=>{
    const newNum2 = parseInt(e.target.value)
    dispatch({type:setNum2,payload:newNum2})
  }
  const getMallData = async (id)=>{
      const res = await fetch("https://test.api.weniv.co.kr/mall/"+id);
      const json = await res.json();
      dispatch({type:"calculator/setMall",payload:json})
  }
  //아래있는건 createAsyncThunk사용하는 예시
  // const getMallData = ()=>dispatch(asyncGetMallData(1))
  return(
    <div>
      <h2>빼기</h2>
      <input type="number" name="num1" value={num1} onChange={handleNum1}/>
      <input type="number" name="num2" value={num2} onChange={handleNum2}/>
      결과 : {num1-num2}
      <div>
        여기는 상품 데이터가 표시되는 곳입니다.
        {/*  createAsyncThunk사용하는 예시 */}
        {/* <button onClick={getMallData}>데이터 가져오기</button> */}
        <button onClick={()=>getMallData(1)}>데이터 가져오기</button>
        {JSON.stringify(mallData)}
      </div>
    </div>
  )
}

export default App;
