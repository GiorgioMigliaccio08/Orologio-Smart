const strips = [...document.querySelectorAll(".strip")];
const numberSize = 8; // in vmin
const centerOffset = 0; // Modificato per centrare esattamente

// Funzione per evidenziare il numero attuale
function highlight(strip, d) {
  const numbers = strips[strip].querySelectorAll(".number");
  numbers.forEach((num) => num.classList.remove("pop"));
  numbers[d].classList.add("pop");
}

// Funzione per far scorrere la strip
function stripSlider(strip, number) {
  let d1 = Math.floor(number / 10);
  let d2 = number % 10;

  // Anima il passaggio dei numeri verso l'alto
  strips[strip].style.transition = "transform 0.5s ease-in-out";
  strips[strip].style.transform = "translateY(${d1 * -numberSize}vmin)";
  highlight(strip, d1);

  strips[strip + 1].style.transition = "transform 0.5s ease-in-out";
  strips[strip + 1].style.transform = "translateY(${d2 * -numberSize}vmin)";
  highlight(strip + 1, d2);
}

// Esegui l'aggiornamento ogni secondo
setInterval(() => {
  const time = new Date();
  const hours = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();

  stripSlider(0, hours);
  stripSlider(2, mins);
  stripSlider(4, secs);
}, 1000);
