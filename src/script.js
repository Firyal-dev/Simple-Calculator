// Ambil elemen-elemen HTML
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Tambahkan event listener ke setiap tombol
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Jika tombol "C" diklik, kosongkan tampilan
    if (value === "C") {
      display.value = "";

      // Jika tombol "=" diklik, evaluasi ekspresi matematika
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error"; // Tampilkan error jika ekspresi tidak valid
      }

      // Jika tombol angka atau operator, tambahkan ke tampilan
    } else {
      display.value += value;
    }
  });
});
