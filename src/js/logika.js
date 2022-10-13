const render = new Event("render");
document.addEventListener("render", () => {
  const conteinerPilihan = document.querySelectorAll(".pilihan");
  conteinerPilihan.forEach((i) => {
    i.classList.add("hidden");
  });

  const id = temp.data[temp.page];
  const show = document.getElementById(id);
  show.classList.remove("hidden");

  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  if (temp.page == temp.fullPage - 1) {
    next.classList.add("hidden");
  } else if (temp.page == 0) {
    prev.classList.add("hidden");
  } else if (temp.page !== 0) {
    prev.classList.remove("hidden");
  }
});

let temp = {
  id: "",
  data: [],
  fullPage: 1,
  page: 0,
};

function removeAllClassCard() {
  card.forEach((i) => {
    i.classList.remove("active");
  });
}

const cardButton = document.querySelectorAll(".card-button");
const card = document.querySelectorAll(".card-package");

// handle tombol pilih
cardButton.forEach((i) => {
  i.addEventListener("click", (e) => {
    const parent = e.target.parentElement.parentElement;
    temp.data = [];

    if (parent.classList.contains("active")) {
      return parent.classList.remove("active");
    }
    removeAllClassCard();

    parent.classList.add("active");

    temp.id = parent.getAttribute("id");
    prosesData();
  });
});

// opsi1a: ayam / ikan
// opsi1b: ayam / ikan (size b) / sapi
// opsi2a: tahu / tempe / perkedel
// opsi2b: tahu / tempe / perkedel (pilih 2)
// opsi3: oseng
// opsi4: buah / puding

const paketSd = ["pilpak", "opsi1a", "opsi2a", "opsi3"];
const paketRemaja = ["pilpak", "opsi1a", "opsi2a", "opsi3", "opsi4"];
const paketDewasa = ["pilpak", "opsi1a", "opsi2a", "opsi3", "opsi4"];

function prosesData() {
  if (temp.id == "sd") {
    temp.data = paketSd;
    temp.fullPage = temp.data.length;
  } else if (temp.id == "remaja") {
    temp.data = paketRemaja;
    temp.fullPage = temp.data.length;
  } else if (temp.id == "dewasa") {
    temp.data = paketDewasa;
    temp.fullPage = temp.data.length;
  }
}

// logika button next & prev
function nextButton() {
  if (temp.data == 0) {
    return alert("pilih dulu paketnya gan");
  } else {
    temp.page++;
    document.dispatchEvent(render);
  }
}

function prevButton() {
  temp.page--;
  document.dispatchEvent(render);
}
