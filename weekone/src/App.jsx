import { useEffect ,useState} from 'react'
// import React from "react"
import './App.css'

function App() {
  const [render,setRender] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setRender(r=>!r);
    },5000)
  },[])
  return (
    <>
      {render ?<MyComponent/>:<div></div>} 
    </>
  )
}
function MyComponent(){
  useEffect(()=>{
    console.error("computed mount");

    return()=>{
      console.log("component unmount");
    };
  },[])

  return <div>
    from inside my component.
  </div>
}

export default App
