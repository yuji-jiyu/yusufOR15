const containers = document.querySelectorAll(".container");

// Container pertama (isi hati)
const inputHati = containers[0].querySelector("input");
const btnHati = containers[0].querySelector("button");
const isiHati = document.getElementById("isiHati");

// Container kedua (lagu)
const inputLagu = containers[1].querySelector("input");
const btnLagu = containers[1].querySelector("button");
const listLagu = document.getElementById("listLagu");

// Menampilkan isi hati
btnHati.addEventListener("click", function () {
    const text = inputHati.value.trim();

    if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;
        isiHati.appendChild(li);
        inputHati.value = "";
    }
});

// Menampilkan lagu
btnLagu.addEventListener("click", function () {
    const text = inputLagu.value.trim();

    if (text !== "") {
        const li = document.createElement("li");
        li.textContent = "🎵 " + text;
        listLagu.appendChild(li);
        inputLagu.value = "";
    }
});