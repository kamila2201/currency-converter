{
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const formElement = document.querySelector(".js-form");
    const resultElement = document.querySelector(".js-result");

    const rateEUR = 4.67;
    const rateUSD = 4.39;
    const rateCHF = 4.72;
    const rateGBP = 5.3;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = +amountElement.value;
        const currency = currencyElement.value;

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












