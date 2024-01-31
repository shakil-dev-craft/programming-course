import PropTypes from 'prop-types';
import './App.css'

function App() {

  
  return (
    
    <div>
      <h1>Welcome, React world</h1>
      <Person />
      <Developer />
      <Device name="Laptop" price="35000" />
      <Device name="Mobile" price="14000" />
    </div>
  )
}

function Device(device) {
  console.log(device);
  return <h2>This is Device: {device?.name}, Price: {device?.price}</h2>
}

function Person() {
  const age = 35;
  const person = {name: 'Shakil'};
  return (
    <div className='student'>
      <h3>I am a {person?.name}, My age is {age}</h3>
      <p>Name: {person?.name}</p>
      <p>age: {age}</p>
    </div>
  )
}

function Developer() {

  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px',
  };

  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}

Device.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App
