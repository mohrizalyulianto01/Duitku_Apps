import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      SisaUang: 0,
      persentaseUang: 0,
      pemasukanUang: 0,
      pengeluaranUang: 0,
      transaksiMasuk: 0,
      transaksiKeluar: 0,
      summary: [
        {
          deskripsi: "Menerima Gaji",
          tanggal: "1 Juli 2022",
          nominal: 1000000,
          kategori: "Masuk",
        },

        {
          deskripsi: "Belanja Bulanan",
          tanggal: "11 Juli 2022",
          nominal: 100000,
          kategori: "Keluar",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="fw-bold">DuitKu Apps</h1>
              <hr className="w-75 mx-auto" />
              <h2>Rp. {this.state.SisaUang} ,-</h2>
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
                <h4 className="fw-bold">Rp. {this.state.pemasukanUang},-</h4>
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
                <h4 className="fw-bold">Rp. {this.state.pengeluaranUang},-</h4>
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
            {this.state.summary.map((sum) => {
              return (
                <div className=" mb-3 col-12 d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className={sum.kategori === 'Masuk' ? 'icon-wrapper-in' : 'icon-wrapper-out'}>
                      <i class={sum.kategori === 'Masuk' ? 'bi bi-wallet2' : 'bi bi-bag-dash'}></i>
                    </div>
                    <div className="transaksi ms-3 d-flex flex-column">
                      <h6>{sum.deskripsi}</h6>
                      <span className="tittle-sm"> {sum.tanggal}</span>
                    </div>
                  </div>
                  <h5
                    className={
                      sum.kategori === 'Masuk' ? 'money-in' : 'money-out'
                    }
                  >
                    Rp. {sum.nominal},-
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
