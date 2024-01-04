function scrollToElement(elementSelector, instance = 0) {
  //Memilih seluruh element yang sesuai dengan selector yang diberikan
  const element = document.querySelectorAll(elementSelector);
  if (element.length > instance) {
    //Scroll ke bagian spesifik pada bagian element
    element[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener("click", () => {
  scrollToElement(".KS");
});

link2.addEventListener("click", () => {
  //Scroll ke bagian element kedua dengan "LS" class
  scrollToElement(".LS");
});

// Awal Input Keliling Segitiga
// Pemilihan kolom input
const inputSisiSatu = document.getElementById("input-sisi-satu");
const inputSisiDua = document.getElementById("input-sisi-dua");
const inputSisiTiga = document.getElementById("input-sisi-tiga");

const outputKeliling = document.getElementById("output-keliling");
const hasilKeliling = document.getElementById("hasil-dari-keliling");

document
  .querySelector(".hitung-keliling")
  .addEventListener("click", function () {
    // Mendapatkan nilai input disetiap sisi
    const sisiSatu = parseFloat(inputSisiSatu.value);
    const sisiDua = parseFloat(inputSisiDua.value);
    const sisiTiga = parseFloat(inputSisiTiga.value);

    if (isNaN(sisiSatu) || isNaN(sisiDua) || isNaN(sisiTiga)) {
      outputKeliling.textContent =
        "*Mohon untuk isi nilai setiap sisi terlebih dahulu";
    } else {
      const keliling = sisiSatu + sisiDua + sisiTiga;

      outputKeliling.innerHTML = `
      <p> Langkah ke 1: Untuk mendapatkan nilai Keliling Segitiga kita harus menghitungnya dengan rumus: K = Sisi + Sisi + Sisi </p>
      <p> Langkah ke 2: Berikut adalah cara perhitungannya. K = (${sisiSatu} + ${sisiDua} + ${sisiTiga}) = ${keliling} </p>
      <p> Langkah ke 3: Hasil dari perhitungan keliling segitiga adalah: ${keliling.toFixed(
        0
      )}</p>
 `;
      hasilKeliling.value = keliling.toFixed(0);
    }
  });

// Menambahkan event listener ke bagian Reset button
document
  .querySelector(".reset-keliling")
  .addEventListener("click", function () {
    if (confirm("Apakah Anda yakin ingin melakukan reset?")) {
      // reset melakukan nilai input
      inputSisiSatu.value = "";
      inputSisiDua.value = "";
      inputSisiTiga.value = "";

      // Membersihkan hasil
      outputKeliling.textContent = "";
      hasilKeliling.value = "";
    }
  });

// Awal Input Luas Segitiga
// Pemilihan kolom input
const inputTinggi = document.getElementById("input-tinggi");
const inputAlas = document.getElementById("input-alas");

// Memilih output element
const outputLuas = document.getElementById("output-luas");
const hasilLuas = document.getElementById("hasil-dari-luas");

// Menambahkan event listener ke bagian Hitung button
document.querySelector(".hitung-luas").addEventListener("click", function () {
  // Mendapatkan input nilai
  const tinggi = parseFloat(inputTinggi.value);
  const alas = parseFloat(inputAlas.value);

  // Melakukan check jika user sudah melakukan input nilai di kedua kolom
  if (isNaN(tinggi) || isNaN(alas)) {
    outputLuas.textContent =
      "*Mohon untuk isi nilai Alas and Tinggi Segitiga terlebih dahulu.";
  } else {
    // Melakukan perhitungan luas
    const luas = (alas * tinggi) / 2;

    // Menampilkan hasil
    outputLuas.innerHTML = `
            <p>Langkah ke 1: Untuk mendapatkan nilai Luas Segitiga kita harus menghitungnya dengan rumus: L = (alas * tinggi) / 2</p>
    <p>Langkah ke 2: Berikut adalah cara perhitungannya. L = (${alas} * ${tinggi}) / 2 = ${
      (alas * tinggi) / 2
    }</p> 
            <p>Langkah ke 3: Hasil dari perhitungan Luas segitiga adalah: ${luas.toFixed(
              1
            )} </p>
            `;
    hasilLuas.value = luas.toFixed(1);
  }
});

// Menambahkan event listener ke bagian Reset button
document.querySelector(".reset-luas").addEventListener("click", function () {
  // Melakukan reset value serta konfirmasi
  if (confirm("Apakah Anda yakin ingin melakukan reset?")) {
    inputTinggi.value = "";
    inputAlas.value = "";

    // Membersihkan hasil
    outputLuas.textContent = "";
    hasilLuas.value = "";
  }
});
