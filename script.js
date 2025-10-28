console.log("Berhasil connect");

const inputNamaResep = document.querySelector("#recipe-name");
const judulPratinjau = document.querySelector("#preview-title");
const inputWaktuPersiapan = document.querySelector("#prep-time");
const waktuPratinjau = document.querySelector("#preview-time");
const inputDeskripsi = document.querySelector("#description");
const deskripsiPratinjau = document.querySelector("#preview-deskrip");
const inputKesulitan = document.querySelector("#difficulty");
const kesulitanMeter = document.querySelector("#preview-difficulty");
const kesulitanText = document.querySelector("#preview-difficulty-text");
const inputBahanBahan = document.querySelector("#ingredients");
const bahanPratinjau = document.querySelector("#preview-ingredients-list");

console.log(inputNamaResep);
console.log(judulPratinjau);

inputNamaResep.addEventListener("input", function () {
  console.log("Pengguna mengetik nama resep");
});

inputNamaResep.addEventListener("input", function () {
  const teksInputan = inputNamaResep.value;
  judulPratinjau.textContent = teksInputan;
});

inputNamaResep.addEventListener("input", function () {
  const teksInputan = inputNamaResep.value;
  if (teksInputan === "") {
    judulPratinjau.textContent = "Judul Resep Akan Muncul Disini";
  } else {
    judulPratinjau.textContent = teksInputan;
  }
});

inputWaktuPersiapan.addEventListener('input', function() {
    const waktuInputan = inputWaktuPersiapan.value;
    
    if (waktuInputan === "" || waktuInputan === "0") {
        waktuPratinjau.textContent = "-- menit";
    } else {
        waktuPratinjau.textContent = waktuInputan + " menit";
    }
});

inputKesulitan.addEventListener('input', function() {
    const nilaiKesulitan = inputKesulitan.value;
    
    // Update atribut 'value' dari <meter>
    kesulitanMeter.setAttribute('value', nilaiKesulitan);
    
    // Update teks deskriptif
    let textKesulitan = "";
    switch(nilaiKesulitan) {
        case "1":
            textKesulitan = "Sangat Mudah";
            break;
        case "2":
            textKesulitan = "Mudah";
            break;
        case "3":
            textKesulitan = "Sedang";
            break;
        case "4":
            textKesulitan = "Sulit";
            break;
        case "5":
            textKesulitan = "Sangat Sulit";
            break;
    }
    
    kesulitanText.textContent = textKesulitan;
});

inputDeskripsi.addEventListener('input', function() {
    const deskripsiInputan = inputDeskripsi.value;
    
    if (deskripsiInputan === "") {
        deskripsiPratinjau.textContent = "Deskripsi resep Anda akan muncul di sini...";
    } else {
        deskripsiPratinjau.textContent = deskripsiInputan;
    }
});

inputBahanBahan.addEventListener('input', function() {
    const bahanInputan = inputBahanBahan.value;
    
    if (bahanInputan === "") {
        bahanPratinjau.innerHTML = '<li>Bahan-bahan akan muncul di sini...</li>';
    } else {
        // Split berdasarkan enter (newline)
        const bahanArray = bahanInputan
            .split('\n')
            .filter(bahan => bahan.trim() !== '');
        
        // Buat HTML list
        let htmlList = '';
        bahanArray.forEach(bahan => {
            const bahanBersih = bahan.trim().replace(/^-\s*/, '');
            htmlList += `<li>${bahanBersih}</li>`;
        });
        
        bahanPratinjau.innerHTML = htmlList;
    }
});
