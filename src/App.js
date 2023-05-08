import "./App.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
              <span className="tittle-md">
                Sisa uang kamu tersisa {this.state.persentaseUang} % lagi
              </span>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-6">
              <div className="card-wrapper p-4">
                <div className="icon-wrapper mb-1">
                  <i className="bi bi-wallet2"></i>
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
                  <i className="bi bi-cash"></i>
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
                <ModalCreate
                  variant="button btn-ungu px-3 py-2 me-2"
                  text="Pemasukan"
                  icons="bi bi-plus-circle-fill"
                  modalheading="Tambahkan Pemasukan"
                />
                <ModalCreate
                  variant="button btn-pink px-3 py-2"
                  text="Pemasukan"
                  icons="bi bi-dash-circle-fill"
                  modalheading="Tambahkan Pengeluaran"
                />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {this.state.summary.map((sum, index) => {
              return (
                <div
                  key={index}
                  className=" mb-3 col-12 d-flex justify-content-between"
                >
                  <div className="d-flex align-items-center">
                    <div
                      className={
                        sum.kategori === "Masuk"
                          ? "icon-wrapper-in"
                          : "icon-wrapper-out"
                      }
                    >
                      <i
                        className={
                          sum.kategori === "Masuk"
                            ? "bi bi-wallet2"
                            : "bi bi-bag-dash"
                        }
                      ></i>
                    </div>
                    <div className="transaksi ms-3 d-flex flex-column">
                      <h6>{sum.deskripsi}</h6>
                      <span className="tittle-sm"> {sum.tanggal}</span>
                    </div>
                  </div>
                  <h5
                    className={
                      sum.kategori === "Masuk" ? "money-in" : "money-out"
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

// modal ReactBootstrap
class ModalCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      deskripsi: "",
      nominal: 0,
      tanggal: "",
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <button onClick={this.handleShow} className={this.props.variant}>
          {this.props.text}
          <i className={this.props.icons}></i>
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalheading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label className="form-label">Deskripsi</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukan Deskripsi"
                name="deskripsi"
                value={this.state.deskripsi}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Nominal</label>
              <input
                type="number"
                className="form-control"
                placeholder="Masukan Deskripsi"
                name="nominal"
                value={this.state.nominal}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Tanggal</label>
              <input
                type="date"
                className="form-control"
                placeholder="Masukan Deskripsi"
                name="tanggal"
                value={this.state.tanggal}
                onChange={this.handleChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
