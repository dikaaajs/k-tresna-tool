const root = document.getElementById("root");
const paketSd = ["pilpak", "opsi1a", "opsi2a", "opsi3"];
const paketRemaja = ["pilpak", "opsi1a", "opsi2a", "opsi3", "opsi4"];
const paketDewasa = ["pilpak", "opsi1b", "opsi2b", "opsi3", "opsi4"];
const database = {
  pilpak: [
    {
      id: "sd",
      nama: "Paket Bocil",
      tags: ["murah", "banyak disukai"],
      harga: "15.000",
      benefit: [
        "Nasi",
        ["ayam", "ikan"],
        ["tahu", "tempe", "perkedel"],
        "oseng",
        "lalapan & sambel",
      ],
    },
    {
      id: "remaja",
      nama: "Paket Remaja",
      tags: ["murah", "banyak disukai"],
      harga: "20.000",
      benefit: [
        "Nasi",
        ["ayam", "ikan"],
        ["tahu", "tempe", "perkedel"],
        "oseng",
        "lalapan & sambel",
        "kerupuk",
        ["buah", "puding"],
      ],
    },
    {
      id: "dewasa",
      nama: "Paket Dewasa",
      tags: ["murah", "banyak disukai"],
      harga: "25.000",
      benefit: [
        "Nasi",
        ["ayam", "ikan (size A)", "sapi"],
        ["tahu", "tempe", "perkedel"],
        "oseng",
        "lalapan & sambel",
        "kerupuk",
        ["buah", "puding"],
      ],
    },
  ],
  opsi1a: [
    {
      nama: "opsi1a",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 0,
    },
    {
      nama: "penyet",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
    {
      nama: "mujaer",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
  ],
  opsi1b: [
    {
      nama: "opsi1b",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 0,
    },
    {
      nama: "penyet",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
    {
      nama: "mujaer",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
  ],
  opsi2a: [
    {
      nama: "opsi2a",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 0,
    },
    {
      nama: "penyet",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
    {
      nama: "mujaer",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
  ],
  opsi2b: [
    {
      nama: "opsi2b",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 0,
    },
    {
      nama: "penyet",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
    {
      nama: "mujaer",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
  ],
  opsi3: [
    {
      nama: "opsi3",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 0,
    },
    {
      nama: "penyet",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
    {
      nama: "mujaer",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
  ],
  opsi4: [
    {
      nama: "opsi4",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 0,
    },
    {
      nama: "penyet",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
    {
      nama: "mujaer",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quas harum!",
      hargaTambahan: 1000,
    },
  ],
};

class Header extends React.Component {
  render() {
    return (
      <div className="header overflow-hidden">
        <h1 id="logo" className="text-black">
          k-tresna
        </h1>
        <nav>
          <div id="nav-list">
            <ul>
              <li>
                <a href="#jumbotron">Home</a>
              </li>
              <li>
                <a href="#tentang-kami">About</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div id="nav-button">
            <button type="button">
              <span id="simbol" className="material-symbols-outlined">
                menu
              </span>
            </button>
          </div>
          <div className="ballon-nav">
            <a href="#jumbotron">Home</a>
            <a href="#tentang-kami">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </div>
    );
  }
}

class Judul extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src="./src/img/logo-badag.jpg"
            alt="gambar jumbotron"
            className="img-judul"
          />
          <h1 className="h1-judul">K-Tresna Box</h1>
          <p className="p-judul">
            selamat datang di <span className="text-red-600">k-tresna box</span>
            . disini anda bisa dengan mudah memesan nasi box k-tresna
          </p>
        </div>
      </div>
    );
  }
}

// constructor card
class Contructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      data: [],
      fullPage: 0,
      page: 0,
      status: "card1",
      section: "",
    };

    this.handleClickCard1 = this.handleClickCard1.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.prevButton = this.prevButton.bind(this);
  }

  handleClickCard1(e) {
    const parent = e.target.parentElement.parentElement;
    this.state.data = [];

    // for toogle
    if (parent.classList.contains("active")) {
      return parent.classList.remove("active");
    }
    removeAllClassCard();
    parent.classList.add("active");
    this.state.id = parent.getAttribute("id");

    // proses data
    if (this.state.id == "sd") {
      this.state.data = paketSd;
      this.state.fullPage = this.state.data.length;
    } else if (this.state.id == "remaja") {
      this.state.data = paketRemaja;
      this.state.fullPage = this.state.data.length;
    } else if (this.state.id == "dewasa") {
      this.state.data = paketDewasa;
      this.state.fullPage = this.state.data.length;
    }
  }

  handleClickCard2() {}

  // handle next and prev button
  nextButton() {
    if (this.state.data == 0) {
      return alert("pilih dulu paketnya gan");
    } else {
      this.state.page++;
    }

    // section akan menghasilkan pilpak / opsi1 / opsi2 / opsi3 / opsi4

    const tmp = this.state.data[this.state.page];
    this.setState({
      status: "card2",
      section: tmp,
    });
    console.log(this.state);
  }

  prevButton() {
    this.state.page--;

    const tmp = this.state.data[this.state.page];
    if (tmp == "pilpak") {
      this.setState({
        status: "card1",
      });
    }
    this.setState({
      section: tmp,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="div-constructor" id="pilpak">
        <h3 className="pt-[20px]"> Pilih Paket</h3>
        <p className="p-constructor">
          pilihlah paket sesuai dengan keinginan anda
        </p>
        <br />
        {/* card1 / card2 */}
        <Card
          status={this.state.status}
          section={this.state.section}
          handleClick1={this.handleClickCard1}
          handleClick2={this.handleClickCard2}
        />
        <br />
        {this.state.page !== 0 && (
          <button className="btn" onClick={this.prevButton}>
            prev
          </button>
        )}
        {this.state.page !== this.state.fullPage - 1 && (
          <button className="btn" onClick={this.nextButton}>
            next
          </button>
        )}
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.status == "card1") {
      return <Card1 handleClick={this.props.handleClick1} />;
    } else {
      return (
        <Card2
          section={this.props.section}
          handleClick={this.props.handleClick2}
        />
      );
    }
  }
}

// card1
class Card1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const wadah = database.pilpak.map((i) => {
      // handle tag
      const tag = i.tags.map((tag) => {
        return <li className="tag-header-card-pilpak">{tag}</li>;
      });

      // handle benefit
      const benefit = i.benefit.map((i) => {
        let show = "";
        if (typeof i == "string") {
          show = i;
        } else {
          const kalimat = i.join(", ");
          show = `pilih ${kalimat}`;
        }
        return <li>• {show}</li>;
      });

      // return wadah
      return (
        // <div className={this.props.status}>
        <div className="card-pilpak" id={i.id}>
          {/* header section */}
          <div className="header-card-pilpak">
            <div className="w-[80%] pl-2 text-left text-white">
              <div>
                <ul className="inline-flex gap-[10px]">{tag}</ul>
              </div>
              <div className="tittle mt-[5px]">
                <h1>{i.nama}</h1>
              </div>
            </div>
            <div className="image-card" id="second">
              <img
                src="./assets/img/imly-thali-1024x731.jpg"
                alt="paket bocil SD"
                className="img-header-card-pilpak"
              />
            </div>
          </div>

          {/* price section */}
          <div className="price-section-pilpak">
            <div className="ml-2 w-1/2 text-left">
              <h1>harga:</h1>
            </div>
            <div className="mr-2 w-1/2 text-right">
              <h1>{i.harga}</h1>
            </div>
          </div>

          {/* benefit section */}
          <div className="benefit-section-pilpak">
            <h1>apa saja yang di dapatkan ?</h1>
            <ul className="list-benefit">{benefit}</ul>
          </div>

          {/* button section */}
          <div className="button mb-3 mr-3 text-right">
            <button className="nice-button" onClick={this.props.handleClick}>
              Pilih
            </button>
          </div>
        </div>
        // </div>
      );
    });

    return (
      <div className="wadah-pilpak">
        {/* perulangan disini */}
        {wadah}
      </div>
    );
  }
}

// card2
class Card2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const section = this.props.section;
    let data = [];
    switch (section) {
      case "opsi1a":
        data = database.opsi1a;
        break;
      case "opsi1b":
        data = database.opsi1b;
        break;
      case "opsi2a":
        data = database.opsi2a;
        break;
      case "opsi2b":
        data = database.opsi2b;
        break;
      case "opsi3":
        data = database.opsi3;
        break;
      case "opsi4":
        data = database.opsi4;
        break;
    }

    const wadah = data.map((i) => {
      // return wadah
      return (
        <div class="card2">
          {/* image */}
          <div class="w-[30%]">
            <img src="./src/img/mellowcup-3.jpg" alt="" class="img-card2" />
          </div>

          {/* keterangan */}
          <div class="info-card2">
            <h1>{i.nama}</h1>
            <p class="leading-[17px] opacity-[80%] sm:text-[13px]">
              {i.deskripsi}
            </p>
            <div class="mt-[8px] align-middle">
              <button
                class="button-card2"
                onClick={this.props.handleClickCard2}
              >
                Pilih
              </button>
              <p class="inline text-[#babcbe]"></p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="wadah-card2">
        {/* perulangan disini */}
        {wadah}
      </div>
    );
  }
}

ReactDOM.render(
  <>
    <Header />
    <Judul />
    <Contructor />
  </>,
  root
);
