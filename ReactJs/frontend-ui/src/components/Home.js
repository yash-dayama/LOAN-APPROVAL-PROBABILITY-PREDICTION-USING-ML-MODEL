import { Component } from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h2>Enter Details to get approval chance of your Home Loan application</h2>
      <JsonForm />
    </div>
  );
}


class JsonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Gender: "Female",
      Married: "No",
      Dependents: 0,
      Education: "Graduate",
      Self_Employed: "Yes",
      ApplicantIncome: 6000,
      CoapplicantIncome: 0,
      Loan_Amount: 128,
      Loan_Amount_Term: 360,
      Credit_History: 1,
      Property_Area: "Urban",
      score: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    //console.log(event.target.name + " " + event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    // this.setState({score:10})
    const url = "http://localhost:8000/scoreJson";
    const bodyData = JSON.stringify({
      Gender: this.state.Gender,
      Property_Area: this.state.Property_Area,
      Married: this.state.Married,
      Dependents: this.state.Dependents,
      Education: this.state.Education,
      Self_Employed: this.state.Self_Employed,
      ApplicantIncome: this.state.ApplicantIncome,
      Credit_History: this.state.Credit_History,
      CoapplicantIncome: this.state.CoapplicantIncome,
      Loan_Amount: this.state.Loan_Amount,
      Loan_Amount_Term: this.state.Loan_Amount_Term,
    });
    const reqOpt = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: bodyData,
    }
    fetch(url, reqOpt)
      .then((resp) => resp.json())
      .then((respJ) => this.setState({ score: respJ.score }))
  }
  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>Gender :</td>
                  <td>
                    <select>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    {/* <input
                      type="text"
                      name="Gender"

                      value={this.state.Gender}
                      onChange={this.handleChange}
                    ></input> */}
                  </td>
                </tr>
                <tr>
                  <td> Married: </td>
                  <td>
                    <input type="radio"/>Yes
                    <input type="radio"/>No

                    {/* <input
                      type="text"
                      name="Married"
                      value={this.state.Married}
                      onChange={this.handleChange}
                    ></input> */}
                  </td>
                </tr>
                <tr>
                  <td> Dependents: </td>
                  <td>
                    <input
                      type="text"
                      name="Dependents"
                      value={this.state.Dependents}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td> Education: </td>
                  <td>
                  <select>
                      <option>Graduate</option>
                      <option>Under Graduate</option>
                    </select>
                    {/* <input
                      type="text"
                      name="Education"
                      value={this.state.Education}
                      onChange={this.handleChange}
                    ></input> */}
                  </td>
                </tr>
                <tr>
                  <td> Self Employed: </td>
                  <td>
                    <input
                      type="text"
                      name="Self_Employed"
                      value={this.state.Self_Employed}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td> Applicant Income: </td>
                  <td>
                    <input
                      type="text"
                      name="ApplicantIncome"
                      value={this.state.ApplicantIncome}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td> Coapplicant Income: </td>
                  <td>
                    <input
                      type="text"
                      name="CoapplicantIncome"
                      value={this.state.CoapplicantIncome}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td> Loan Amount: </td>
                  <td>
                    <input
                      type="text"
                      name="Loan_Amount"
                      value={this.state.Loan_Amount}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td> Loan Amount Term: </td>
                  <td>
                    <input
                      type="text"
                      name="Loan_Amount_Term"
                      value={this.state.Loan_Amount_Term}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td> Credit History: </td>
                  <td>
                    <input
                      type="text"
                      name="Credit_History"
                      value={this.state.Credit_History}
                      onChange={this.handleChange}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td> Property Area: </td>
                  <td>
                    {/* <input
                      type="text"
                      name="Property_Area"
                      value={this.state.Property_Area}
                      onChange={this.handleChange}
                    ></input> */}
                    <select>
                      <option>Urban</option>
                      <option>Rular</option>

                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="Submit" value="Submit"></input>
          </form>
        </div>
        <div><h3><br></br><br></br>The probability of getting approval is {this.state.score}</h3></div>
      </>
    );
  }
}

export default Home;
