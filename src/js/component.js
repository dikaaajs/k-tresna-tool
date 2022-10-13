const root = document.getElementById("root");
const header = document.getElementById("header");

const database = {
  pilihPaket: [
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
};

class Header extends React.Component {
  render() {
    return (
      <div className="overflow-hidden header">
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

class Main extends React.Component {
  render() {
    return (
      <section>
        <div>
          <img
            src="assets/img/logo-badag.jpg"
            alt="gambar jumbotron"
            className="mx-auto w-[10rem] relative top-10 -z-10"
          />
          <h1 className="text-center text-slate-600 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            K-Tresna Box
          </h1>
          <p className="text-center text-slate-900 text-opacity-60 text-[15px] leading-[15px] mt-[5px] mx-[20px]">
            selamat datang di <span className="text-red-600">k-tresna box</span>
            . disini anda bisa dengan mudah memesan nasi box k-tresna
          </p>
        </div>
      </section>
    );
  }
}

class Contructor extends React.Component {
  render() {
    return (
      <div
        className=" pilihan mt-[3rem]  mx-[10px] px-[10px] border-solid  rounded-[5px] bg-[#21f0ff10] py-10"
        id="pilpak"
      >
        <h3 className="text-center pt-[20px]"> Pilih Paket</h3>
        <p className="text-center text-slate-900 text-opacity-60">
          pilihlah paket sesuai dengan keinginan anda
        </p>
        <br />
      </div>
    );
  }
}

// pilih paket
class Pilpak extends React.Component {
  render() {
    const wadah = database.pilihPaket.map((i) => {
      // handle tag
      const tag = i.tags.map((tag) => {
        return <li className="tag">{tag}</li>;
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

      return (
        <div class="card-package relative" id={i.id}>
          <div class="header-card inline-flex content-between h-[5rem] w-full bg-[#0f172a] items-center relative rounded overflow-hidden">
            {/* header */}
            <div id="first" class="w-[80%] text-white text-left pl-2">
              <div class="tags">
                <ul class="inline-flex gap-[10px]">{tag}</ul>
              </div>
              <div class="tittle mt-[5px]">
                <h1>{i.nama}</h1>
              </div>
            </div>
            <div class="image-card" id="second">
              <img
                src="./assets/img/imly-thali-1024x731.jpg"
                alt="paket bocil SD"
                class="h-[7rem] right-[-20px] rounded-full absolute top-[-15px] z-10"
              />
            </div>
          </div>

          {/* price section */}
          <div class="inline-flex content-between w-full py-[10px] price-card">
            <div class="text-left w-1/2 ml-2">
              <h1>harga:</h1>
            </div>
            <div class="text-right w-1/2 mr-2">
              <h1>{i.harga}</h1>
            </div>
          </div>

          {/* benefit section */}
          <div class="benefit-card text-left ml-2 mt-[10px]">
            <h1>apa saja yang di dapatkan ?</h1>
            <ul class="list-benefit">{benefit}</ul>
          </div>

          <div class="button mb-3 text-right mr-3">
            <button class="bg-green-500 text-white rounded-[5px] px-[10px] py-[5px] card-button md:absolute bottom-[20px] right-[20px]">
              Pilih
            </button>
          </div>
        </div>
      );
    });
    return (
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-[25px]">
        {/* perulangan disini */}
        {wadah}
      </div>
    );
  }
}

// pilih ayam
class AyamIkan extends React.Component {
  render() {
    return (
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
        {/* card section */}
        database.pilihan
        <div className=" card-ayam bg-[#0f172a] flex content-between items-center h-[9rem] relative overflow-hidden text-neutral-200">
          <div className="gambar-ayam w-[30%]">
            <img
              src="assets/img/imly-thali-1024x731.jpg"
              alt=""
              className="h-[11rem] absolute top-[-13px] left-[-75px] rounded-full"
            />
          </div>
          <div className="keterangan-ayam w-[60%] ml-[30px] py-[20px]">
            <h1>Ayam Goreng</h1>
            <p className="sm:text-[13px] leading-[17px] opacity-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              suscipit quas harum!
            </p>
            <div className="align-middle mt-[8px]">
              <button className="bg-green-500 text-white rounded-[5px] px-[8px] py-[3px] card-button text-[13px] inline">
                Pilih
              </button>
              <p className="inline text-[#babcbe]"></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <>
    <Pilpak />
  </>,
  root
);
