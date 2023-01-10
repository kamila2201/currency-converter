let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let rate;
    

    switch (currency) {
        case "EUR":
            rate = 4.67;
            break;
        case "USD":
            rate = 4.39;
            break;
        case "CHF":
            rate = 4.72;
            break;
        case "GBP":
            rate = 5.3;
            break;
    }

    let amount = amountElement.value;
    let result = amount / rate;

 resultElement.innerText = (`${result.toFixed(2)} ${currency}`);
   
});












