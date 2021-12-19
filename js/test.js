const menu = document.querySelector(".menu");
//let support_value = JSON.parse(data);
//let value = support_value[0].value;
let value = Math.floor(Math.random() * 2300 + 800000);
let section = document.querySelector("#section_1");
let section2 = document.querySelector("#section_2");
let button_select = document.getElementById("change");
let main = document.getElementById("main");
let h = section.clientHeight;
//let h2 = section2.clientHeight;
let session = 0;

if (session == 0) {
  let loading = document.createElement("div");
  let circle = document.createElement("div");
  document.body.appendChild(loading);
  loading.appendChild(circle);
  loading.className = "landing_animation";
  loading.style.position = "absolute";
  circle.innerHTML = "<h1>PTVS</h1>";
  circle.style.fontFamily = "var(--font)";
  circle.id = "circle";
  circle.style.backgroundColor = "var(--color_pink)";
  circle.style.borderRadius = "100vw";
  circle.style.color = "var(--color_white)";
  loading.style.zIndex = "999";
  loading.style.top = "0";
  loading.style.bottom = "0";
  loading.style.left = "0";
  loading.style.right = "0";
  loading.style.display = "flex";
  loading.style.backgroundColor = "var(--color_white)";
  loading.style.justifyContent = "center";
  loading.style.alignItems = "center";
  setTimeout(() => {
    loading.style.animation = "puff 1s ease-in-out";
  }, 1000);
  setTimeout(() => {
    loading.style.display = "none";
    document.body.style.animation = "fade 1s ease";
  }, 1000);
  document.body.style.animation = "none";
}

function sticky() {
  menu.classList.add("sticky", window.scrollY >= 1);
  if (scrollY > h + h2) {
    menu.classList.remove("sticky");
  }
  if (scrollY > 2 * h - 100) {
    menu.classList.remove("sticky");
  }
  if (scrollY < 2 * (h + h2) - 100) {
    menu.classList.add("sticky");
  }
  if (scrollY > h + h2 - 100 && scroll < 3 * h2) {
    menu.classList.remove("sticky");
  }
  if (scrollY > 2 * h - 100 && scrollY < 3 * h - 100) {
    menu.classList.remove("sticky");
  }
  if (scroll < 3 * h2) {
    menu.classList.remove("sticky");
  }
  if (window.scrollY == 0) {
    menu.classList.remove("sticky");
  }
}

function count() {
  const counters = document.querySelectorAll(".text_amount");
  let speed = 50;

  if (session == 1) {
    return;
  }

  setTimeout(() => {
    counters.forEach((counter) => {
      const update_counter = () => {
        const count = +counter.innerText;
        const velo = Math.floor(value / speed);

        if (count < value) {
          speed += 3;
          counter.innerText = count + velo;
          setTimeout(update_counter, 1);
        } else {
          counter.innerText = value + " PLN";
        }
      };

      update_counter();
    });
  }, 1500);
  session++;
}

function change() {
  console.log("chuj");
  main.style.animation = "fadeinout 2s ease-in-out reverse";
  setTimeout(() => {
    section.style.display = "none";
    section2.style.display = "flex";
  }, 1000);
}

count();
button_select.addEventListener("click", change);
window.addEventListener("scroll", sticky);
