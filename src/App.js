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
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="fw-bold">DuitKu Apps</h1>
              <hr className="w-75 mx-auto" />
              <h2>Rp. 1.500.000,-</h2>
              <span className="tittle-md">Sisa uang kamu tersisa 75% lagi</span>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-6">
              <div className="card-wrapper p-4">
                <div className="icon-wrapper mb-1">
                  <i class="bi bi-wallet2"></i>
                </div>
                <span className="tittle-sm">Pemasukan</span>
                <h4 className="fw-bold">Rp. 2.000.000,-</h4>
                <div>
                  <span className=" tittle-sm text-ungu">50</span>
                  <span className="tittle-sm"> Transaksi</span>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="card-wrapper p-4">
                <div className="icon-wrapper mb-1">
                  <i class="bi bi-cash"></i>
                </div>
                <span className="tittle-sm">Pengeluaran</span>
                <h4 className="fw-bold">Rp. 1.000.000,-</h4>
                <div>
                  <span className=" tittle-sm text-ungu">50</span>
                  <span className="tittle-sm"> Transaksi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <h4>Ringkasan Transaksi</h4>
              <div className="wrapper-button d-flex">
                <button className="button btn-ungu px-3 py-2 me-2">
                  Pemasukan <i class="bi bi-plus-circle-fill"></i>
                </button>
                <button className="button btn-pink px-3 py-2">
                  Pengeluaran <i class="bi bi-dash-circle-fill"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="icon-wrapper">
                  <i className="bi bi-wallet2"></i>
                </div>
                <div className="transaksi ms-3 d-flex flex-column">
                  <h6>Menerima gaji</h6>
                  <span className="tittle-sm"> 1 July 2023</span>
                </div>
              </div>
              <h5 className="money-in me-0">Rp. 1.000.000,-</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
