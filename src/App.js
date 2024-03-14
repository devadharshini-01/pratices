import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [pencil, setPencil] = useState(0);
  const [scale, setScale] = useState(0);
  const [ink, setInk] = useState(0);

  //  const handleChange =()=>{
  //  if(count<=0){

  //    setCount(0)
  //  }else {
  // setCount(count-1)
  // console.log("log")
  //  }

  //  }

  return (
    <>
      {/* 
<button onClick={()=>setCount(count+1)}>+</button>

<button onClick={()=>0>=count?setCount(0):setCount(count-1)}>-</button>
<p>{count}</p> */}
      <label>pen = 20</label>
      <br></br>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => (0 >= count ? setCount(0) : setCount(count - 1))}>
        -
      </button>
      <br></br>

      <p>{count}</p>
      <label>quantity</label>
      <p>{count}</p>
      <label>total</label>
      <p>{count * 20}</p>

      <label>pencil = 5</label>
      <br></br>
      <button onClick={() => setPencil(pencil + 1)}>+</button>
      <button
        onClick={() => (0 >= pencil ? setPencil(0) : setPencil(pencil - 1))}
      >
        -
      </button>
      <br></br>
      <p>{pencil}</p>
      <label>total</label>
      <p>{pencil * 5}</p>
      <label>scale = 10</label>
      <br></br>
      <button onClick={() => setScale(scale + 1)}>+</button>
      <button onClick={() => (0 >= scale ? setScale(0) : setScale(scale - 1))}>
        -
      </button>
      <br></br>
      <p>{scale}</p>
      <label>total</label>
      <p>{scale * 10}</p>
      <label>ink = 30</label>
      <br></br>
      <button onClick={() => setInk(ink + 1)}>+</button>
      <button onClick={() => (0 >= setInk ? setInk(0) : setInk(ink - 1))}>
        -
      </button>
      <br></br>
      <p>{ink}</p>
      <label>total</label>
      <p>{ink * 30}</p>
      <label>total</label>
      <p>{(count*20)+(pencil*5)+(scale*10)+(ink*30)}</p>
    </>
  );
}

export default App;
