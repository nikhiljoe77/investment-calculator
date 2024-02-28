import { useState } from "react";
import Header from "./components/header";
import Input from "./components/input";
import Results from "./components/results";
function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  }); 
  const inputIsValid=userInput.duration>=1
  //All the 4 statehandlers and handlefunctions were "lifted" from input to here but was again changed to one function coz we could not
  // const [annualInvestment, setannualInvestment] = useState(0);
  // const [expectedReturn, setexpectedReturn] = useState(0);
  // const [duration, setduration] = useState(0);
  // function handleinitialinvestmentchange(newinitialInvestment) {
  //   setinitialInvestment((prev) => newinitialInvestment);
  // }
  // function handleannualinvestmentchange(newannualInvestment) {
  //   setannualInvestment((prev) => newannualInvestment);
  // }
  // function handleexpectedReturnchange(newexpectedeturnchange) {
  //   setexpectedReturn((prev) => newexpectedeturnchange);
  // }
  // function handledurationchange(newdurationchange) {
  //   setduration((prev) => newdurationchange);
  // }
  function handlechange(inputIdentifier, newValue) {
    //here [prevUserInput is the existing state which we are copying using ...,also we are changing value which we are identifying using newValue]
    setUserInput((prevUserInput) => {
      return {
        ...prevUserinput,
        [inputidentifier]: newValue,
      };
    });
  }

  return (
    <main>
      <Header />
      <div>
        <Input
          userInput={userInput} onChange={handlechange}
          
          // onchangeannualInvestment={(event) =>
          //   handleannualinvestmentchange(event.target.value)
          // }
          // onchangeexpectedReturnchange={(event) =>
          //   handleexpectedReturnchange(event.target.value)
          // }
          // onchangedurationchange={(event) =>
          //   handledurationchange(event.target.value)
          // }
        />
        {!inputIsValid&&<p className="center">Please enter a duration greater than zero</p>}
       {inputIsValid&& <Results input={userInput}></Results>}
      </div>
    </main>
  );
}

export default App;
