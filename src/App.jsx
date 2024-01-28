import React,{useState,useEffect} from 'react'

const App = () => {
  const url= "https://api.adviceslip.com/advice"
  const [advice,setAdvice]= useState("");
  const [count,setCount]=useState(0);
  const [loading, setLoading] = useState(true);

  
  const getAdvice= async function(){
    try{
      setLoading(true)
    const repsonse = await fetch(url)
    const data= await repsonse.json();
    setAdvice(data.slip.advice)
    setCount((prev)=>prev + 1);}
    catch(error){
      <p>`Error fetching advice:', {error}`</p>;
    }finally{
      setLoading(false);
    }
  }
  useEffect(function(){
    getAdvice();
  },[])
  return (
    <div className='h-screen w-screen flex-col flex justify-center items-center '>
       <div className='h-auto max-w-xs md:max-w-md lg:max-w-lg rounded p-6 shadow-lg mb-8 bg-white'>
        {loading ? <h1>Loading....</h1> : <h1>{advice}</h1>} 
       </div>
       <button onClick={getAdvice} disabled={loading} className='bg-blue-600 text-white p-2 mb-2 rounded cursor-pointer'>Get More Advice</button>
       <Message count ={count}/>
    </div>
  )
}
function Message({count}){
  return <p> You have recieved <strong> {count} </strong>advices from us</p>
}
export default App