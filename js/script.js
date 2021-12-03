const menu = document.querySelector(".menu");
let support_value = JSON.parse(data);
let value = support_value[0].value;
let section = document.querySelector("#section_1");
let section2 = document.querySelector("#section_2");
let h = section.clientHeight;
let h2 = section2.clientHeight;
let session = 0;

function sticky() {
  menu.classList.add("sticky", window.scrollY >= 1);
  console.log(window.scrollY);
  if (scrollY > h + h2) {
    menu.classList.remove("sticky");
  }
  if (window.scrollY == 0) {
    menu.classList.remove("sticky");
  }
}

function count() {
  const counters = document.querySelectorAll(".text_amount");
  let speed = 25;

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
          counter.innerText = value;
        }
      };

      update_counter();
    });
  }, 500);
  session++;
}

window.addEventListener("scroll", count);
window.addEventListener("scroll", sticky);
