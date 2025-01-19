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






return <div className=" text-center mt-28 ">
   <div className="border-4 border-white bg-gray-100 w-[300px] h-[150px]  sm:ml-[500px] ml-[40px]  sm:px-10 py-10">
    <h1 className=" text-4xl text-purple-500 "> {counter}  </h1>
    <div className="bg-gray-500 rounded-2xl ">
    <button onClick={ handleIncrement}  className=" bg-yellow-500 text-white rounded-lg px-4 py-1 my-4 font-serif ">Count </button>
    <button onClick={handleRest} className=" bg-yellow-500 text-white rounded-lg px-4 py-1 ml-4  font-serif">  Rest  </button>
      </div>

      </div>
</div>

}

export default Tasbiix