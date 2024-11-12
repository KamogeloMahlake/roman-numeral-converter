const input = document.querySelector("#number");
const convertButton = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

output.textContent = "";
convertButton.addEventListener("click", ()=>{
    if (Number(input.value) === NaN || input.value === "")  {
        output.textContent = "Please enter a valid number";
    } else if (Number(input.value) < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (Number(input.value) > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        output.textContent = convert(input.value);
    }
   
})

const convert = number => {
    const numbers = number.split("").map(el => parseInt(el));
    const finalOutput = [];
    const digits = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const thousands = ["M", "MM", "MMM"];

    if (numbers[numbers.length - 1] && numbers[numbers.length - 1] !== 0) {
        finalOutput.unshift(digits[numbers[numbers.length - 1] - 1]);
    } 
    if (numbers[numbers.length - 2] && numbers[numbers.length - 2] !== 0) {
        finalOutput.unshift(tens[numbers[numbers.length - 2] - 1]);
    } 
    if (numbers[numbers.length - 3] && numbers[numbers.length - 3] !== 0) {
        finalOutput.unshift(hundreds[numbers[numbers.length - 3] - 1]);
    }
    if (numbers[numbers.length - 4] && numbers[numbers.length - 4] !== 0) {
        finalOutput.unshift(thousands[numbers[numbers.length - 4] - 1]);
    }

    return finalOutput.join("");

}
