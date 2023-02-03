{
    let amountElement = document.querySelector(".js-amount");
    let currencyElement = document.querySelector(".js-currency");
    let formElement = document.querySelector(".js-form");
    let resultElement = document.querySelector(".js-result");

    let rateEUR = 4.67;
    let rateUSD = 4.39;
    let rateCHF = 4.72;
    let rateGBP = 5.3;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let amount = +amountElement.value;
        let currency = currencyElement.value;

        let result;

        switch (currency) {
            case "EUR":
                result = amount / rateEUR;
                break;
            case "USD":
                result = amount / rateUSD;
                break;
            case "CHF":
                result = amount / rateCHF;
                break;
            case "GBP":
                result = amount / rateGBP;
                break;
        }



        resultElement.innerText = (`${result.toFixed(2)} ${currency}`);

    });
}












