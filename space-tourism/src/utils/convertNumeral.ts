const convertNumeral = (input: number): string => {
    let numeralNumber = 0;
    let numeralWord = "";
    let stringifiedNumeraledNumber = "";

    if (input >= 1000000000) {
        // billion
        numeralNumber = input / 1000000000;
        numeralWord = " bil.";
        stringifiedNumeraledNumber = numeralNumber.toLocaleString("en", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
        });

        return `${stringifiedNumeraledNumber}${numeralWord}`;
    }
    if (input >= 1000000) {
        // million
        numeralNumber = input / 1000000;
        numeralWord = " mil.";
        stringifiedNumeraledNumber = numeralNumber.toLocaleString("en", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
        });

        return `${stringifiedNumeraledNumber}${numeralWord}`;
    }
    stringifiedNumeraledNumber = input.toLocaleString("en", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
    });

    return `${stringifiedNumeraledNumber}${numeralWord}`;
};

export default convertNumeral;
