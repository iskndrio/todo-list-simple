// Ambil Elemen Yang Di Perlukan
const inputUserName = document.querySelector(".namaTodo");
const deadline = document.querySelector(".deadLineTodo");
const btn = document.querySelector(".btn");
const ul = document.querySelector(".list");

// Menambahkan Event Dan Mengambil Data Value Lalu Di Tambahkan Ke Card
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let namaTodo = inputUserName.value;
  let deadlineF = deadline.value;
  displayContentValidasi(namaTodo, deadlineF);
});

function displayContentValidasi(a, b) {
  let status = true;
  function validasi(a, b) {
    for (let e in a) {
      if (!isNaN(a)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tidak Boleh Angka Atau Tidak Boleh Spasi",
        });
        status = false;
        return;
      }
    }

    if (!a) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama Todo Tidak Boleh Kosong",
      });
      status = false;
      return;
    }

    if (!b) {
      b = "Tidak Ada Deadline";
    }

    return b;
  }

  b = validasi(a, b);
  if (!status) {
    return;
  }

  const liNew = document.createElement("li");
  liNew.innerHTML = `Nama Todo: ${a} <br /> Deadline: ${b}`;
  Swal.fire({
    icon: "success",
    title: "Success...",
    text: "Berhasil Menambahkan Data.",
  });
  ul.append(liNew);
}