import { useState } from "react"

function Tasbiix (){

const [counter, setCouter] = useState (0)

 const handleIncrement  =() => {
    setCouter (counter + 1 )
 }
 
 const handleRest = () => {
    setCouter ( 0)
 }

 //function update garey






return <div className=" text-center mt-28 border-4 border-white bg-gray-100 w-[300px] sm:ml-[500px]  ">
    <h1 className=" text-9xl"> {counter} </h1>
    <div>
    <button onClick={ handleIncrement}  className=" bg-yellow-500 text-white rounded-lg px-4 py-1 my-4 ">increates </button>
    <button onClick={handleRest} className=" bg-yellow-500 text-white rounded-lg px-4 py-1 ml-4 ">rest  </button>
      </div>

    
</div>

}

export default Tasbiix