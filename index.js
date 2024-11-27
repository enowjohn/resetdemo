const decreasebtn = document.getElementById("decreasebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const lable = document.getElementById("lable");

let count = 0;

// decreasebtn.onclick = function () {
//     count--;
//     lable.textContent = count;
// }

// increasebtn.onclick = function () {
//     count++;
//     lable.textContent = count;
// }

// resetbtn.onclick = function () {
//     count = 0;
//     lable.textContent = count;
// }

decreasebtn.addEventListener("click", function () {
    count--;
    lable.textContent = count;
})

increasebtn.addEventListener("click", function () {
    count++;
    lable.textContent = count;
})

resetbtn.addEventListener("click", function () {
    count = 0;
    lable.textContent = count;
})