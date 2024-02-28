import { useState } from "react";
import {calculateInvestmentResults} from "../util/investment"
export default function Input({onchange,userInput}) {
 
  
  return (
    <section id="user-input">
      <div className="input-group">
        <label>INITIAL INVESTMENT</label>
        
        <input value={userInput.initialInvestment} type="number"  onChange={(event)=>onChange('initialInvestment',event.target.value)}></input>
        <label>ANNUAL INVESTMENT</label>
        
        <input type="number" value={userInput.annualInvestment}  onChange={(event)=>onChange('annualInvestment',event.target.value)}></input>
      </div>
      <br></br>

      <div className="input-group">
        <label>EXPECTED RETURN</label>
        
        <input type="number" value={userInput.expectedReturn}  onChange={(event)=>onChange('expectedReturn',event.target.value)}></input>
        <label>DURATION</label>
        
        <input type="number" value={userInput.duration} onChange={(event)=>onChange('duration',event.target.value)}></input>
      </div>
     

    </section>
  );
}
