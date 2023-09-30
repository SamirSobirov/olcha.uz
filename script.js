const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minut');
const secondElement = document.querySelector('.secund');

let hours = parseInt(hourElement.textContent);
let minutes = parseInt(minuteElement.textContent);
let seconds = parseInt(secondElement.textContent);

const interval = setInterval(() => {
    if (seconds === 0) {
        if (minutes === 0) {
            if (hours === 0) {
                clearInterval(interval);
                return;
            }
            hours--;
            minutes = 59;
        } else {
            minutes--;
        }
        seconds = 59;
    } else {
        seconds--;
    }

    hourElement.textContent = hours.toString().padStart(2, '0');
    minuteElement.textContent = minutes.toString().padStart(2, '0');
    secondElement.textContent = seconds.toString().padStart(2, '0');
}, 1000);






const block = document.createElement("div");
block.classList.add("block");
document.body.appendChild(block);


const sale = document.createElement("div");
sale.classList.add("sale_block");
sale.textContent = `${Math.ceil(Math.random() * 100)}%`;
block.appendChild(sale);


const img1 = document.createElement("img");
img1.src = "./img/like.png";
img1.classList.add("img1");
img1.style.width = "50px"
block.appendChild(img1);


const img2 = document.createElement("img");
img2.src = "./img/rise.png";
img2.classList.add("img2");
img2.style.width = "50px"
block.appendChild(img2);


const img_main = document.createElement("img");
img_main.src = "./img/nootbook.jpeg";
img_main.classList.add("img_main");
img_main.style.width = "200px";
block.appendChild(img_main);


const h = document.createElement("h3");
h.classList.add("text");
h.textContent = "Apple iphone 14 Pro";
block.appendChild(h);

const p = document.createElement("p");
p.classList.add("text2");
p.textContent = "15 000 000 сум";
block.appendChild(p);

const pp = document.createElement("p");
pp.classList.add("text3");
pp.textContent = "14 000 000 сум";
block.appendChild(pp);


const btn = document.createElement("button");
btn.classList.add("btnbtn");
btn.textContent = "В расстрочку";
block.appendChild(btn);