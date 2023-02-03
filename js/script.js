{

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.67;
        const rateUSD = 4.39;
        const rateCHF = 4.72;
        const rateGBP = 5.3;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "USD":
                return amount / rateUSD;
            case "CHF":
                return amount / rateCHF;
            case "GBP":
                return amount / rateGBP;
        };
    };

    const resultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = (`${result.toFixed(2)} ${currency}`);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        resultText(result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();


}












