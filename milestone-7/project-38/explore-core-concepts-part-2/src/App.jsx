
import './App.css'

function App() {

  const handleClick = () => {
    // alert('button click');
    console.log('button click');
  };

  return (
    <>
      <h1 className='font-bold'>Welcome, react part 2</h1>
      <button onClick={handleClick} className='bg-red-500 text-white py-2 mt-5 px-5 rounded-full'>Click Me</button>
    </>
  )
}

export default App
