
import './App.css'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = (data) => {
    console.log(data);
  };

  const handleProfileUpdateSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className='mb-5 font-medium'>Form Master</h1>
      {/* <SimpleForm /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit} /> */}
      <ReuseableForm formTitle={'Online Service'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} submitBtnText={'Update'} handleSubmit={handleProfileUpdateSubmit} />
    </>
  )
}

export default App
