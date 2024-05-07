window.onload = function() {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(response => response.json())
        .then(data => {
            var exchangeRate = data.find(item => item.cc === 'USD').rate;
            document.getElementById("exchange-rate").value = exchangeRate;
        })
        .catch(error => console.error('Помилка:', error));
}

var calculateButton = document.getElementById("calculate-button");
var clearButton = document.getElementById("clear-button");

calculateButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clearAll);

function calculate() {
    var exchangeRate = parseFloat(document.getElementById("exchange-rate").value);
    var amount = parseFloat(document.getElementById("amount").value);
    var result =  amount / exchangeRate ;
    document.getElementById("result").textContent = "Результат: " + result.toFixed(2) + " USD";
}

function clearAll() {
    document.getElementById("exchange-rate").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("result").textContent = "Результат: ";
}



document.getElementById("swap-button").addEventListener("click", function() {
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;

    document.getElementById("text1").value = text2;
    document.getElementById("text2").value = text1;

    document.getElementById("text1-info").textContent = countInfo(text1);
    document.getElementById("text2-info").textContent = countInfo(text2);
});

function countInfo(text) {
    var sentences = text.split('.').length - 1;
    var words = text.split(' ').length;
    var characters = text.length;

    return "Речень: " + sentences + ", Слів: " + words + ", Символів: " + characters;
}

document.getElementById("swap-z-index-button").addEventListener("click", function() {
    var container = document.querySelector(".container");
    var overlay = document.querySelector(".overlay");

    var containerZIndex = getComputedStyle(container).zIndex;
    var overlayZIndex = getComputedStyle(overlay).zIndex;

    container.style.zIndex = overlayZIndex;
    overlay.style.zIndex = containerZIndex;
});

document.getElementById("swap-z-index-button").addEventListener("click", function() {
    var img = document.querySelector(".imgs");
    img.classList.add("rotate");

    img.addEventListener("animationend", function() {
        img.classList.remove("rotate");
    }, {once: true});
});

