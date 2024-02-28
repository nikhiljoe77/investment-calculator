import { calculateInvestmentResults,formatter } from "../util/investment"; //earlier when we tried to pass arguments as single it won't fit the single structure as function has an object also we can use function direct itself we dont need jsx
export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input); //formatter is used for beautification of results
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
    console.log(resultsData)
    console.log(initialInvestment)
    
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
            const totalAmountInvested=yearData.valueEndOfYear-totalInterest
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
