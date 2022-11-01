let temp = {
  id: "",
  data: [],
  fullPage: 1,
  page: 0,
};

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

// remove all class
function removeAllClassCard() {
  let card = document.querySelectorAll(".card-pilpak");
  card.forEach((i) => {
    console;
    i.classList.remove("active");
  });
}

// event ketika content sudah di load
// opsi1a: ayam / ikan
// opsi1b: ayam / ikan (size b) / sapi
// opsi2a: tahu / tempe / perkedel
// opsi2b: tahu / tempe / perkedel (pilih 2)
// opsi3: oseng
// opsi4: buah / puding
