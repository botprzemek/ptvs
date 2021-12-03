const menu = document.querySelector(".menu");
let support_value = JSON.parse(data);
let value = (support_value[0].value);
let session = 0;

function sticky(){
    menu.classList.toggle ("sticky", window.scrollY > 0)
}

function count(){
    const counters = document.querySelectorAll(".text_amount");
    let speed = 50;

    if(session == 1){
        return;
    }

    setTimeout(() => {
        counters.forEach(counter => {
            const update_counter = () => {
                const count = +counter.innerText;
                const velo = (Math.floor(value / speed));
    
                if (count < value) {
                    speed += 3;
                    counter.innerText = count + velo;
                    setTimeout(update_counter, 1);
                } 
                else {
                    counter.innerText = value;
                }
            };
    
            update_counter();
        });
    }, 500);
    session++;
}

window.addEventListener("scroll", sticky);
window.addEventListener("scroll", count);