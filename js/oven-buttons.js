let temperature = document.getElementById('temperature');

    let temp = 0;
    function tempUp() {
        temp += 10;
        document.getElementById("temperature").innerHTML = temp;
    };

    function tempDown() {
        if (temp > 1) {
        temp -= 10;
        }
        document.getElementById("temperature").innerHTML = temp;
    };


var element = document.querySelector(".ovenDoor");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}