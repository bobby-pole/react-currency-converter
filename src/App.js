import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: ["USD", "EUR", "CHF"],
      base: "PLN",
      amount: "",
      result: "",
    };
  }

  handleSelect = (e) => {
    this.setState({
      currency: e.target.value,
    });
  };

  handleInput = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  calculate = () => {
    const amount = this.state.amount;
    if (!amount) {
      return alert("Value input cannot be empty");
    } else {
      fetch(
        `https://api.nbp.pl/api/exchangerates/rates/a/${this.state.currency}`
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  handleClick = (e) => {};

  render() {
    const { currencies, base, amount, result } = this.state;
    return (
      <div className="wrapper">
        <h1>Currency Converter</h1>
        <form className="currency-form">
          <input
            type="number"
            name="value"
            placeholder="Value"
            value={amount}
            onChange={this.handleInput}></input>
          <select name="base" value={base} onChange={this.handleSelect}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <button onClick={this.handleClick}>Count it</button>
        </form>
        <form className="result-form">
          <input
            type="number"
            name="result"
            value={result}
            disabled={true}></input>
        </form>
      </div>
    );
  }
}

export default App;
