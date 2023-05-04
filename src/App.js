import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>DuitKu Apps</h1>
              <hr />
              <h4>Rp. 1.500.000,-</h4>
              <span>Sisa uang kamu tersisa 75% lagi</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="icon-wrapper">
                <i class="bi bi-wallet2"></i>
              </div>
              <span className="title">Pemasukan</span>
              <h4>Rp. 2.000.000,-</h4>
              <span className="angka">50</span>{" "}
              <span className="title">Transaksi</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
