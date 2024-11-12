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
/*function convert(number) {
    const numbers = number.split("").map(el=> parseInt(el));
    const finalOutput = [];
    
    switch (numbers[numbers.length - 1]) {
        case 1:
            finalOutput.unshift("I");
            break;
        case 2:
            finalOutput.unshift("II");
            break;
        case 3: 
            finalOutput.unshift("III")
            break;
        case 4:
            finalOutput.unshift("IV");
            break;
        case 5:
            finalOutput.unshift("V");
            break;
        case 6:
            finalOutput.unshift("VI");
            break;
        case 7:
            finalOutput.unshift("VII");
            break;
        case 8:
            finalOutput.unshift("VIII");
            break;
        case 9:
            finalOutput.unshift("IX");
            break
        
        default:
            break;
        }

        switch (numbers[numbers.length - 2]) {
            case 1:
                finalOutput.unshift("X");
                break;
            case 2:
                finalOutput.unshift("XX");
                break;
            case 3: 
                finalOutput.unshift("XXX");
                break;
            case 4:
                finalOutput.unshift("XL");
                break;
            case 5:
                finalOutput.unshift("L");
                break;
            case 6:
                finalOutput.unshift("LX");
                break;
            case 7:
                finalOutput.unshift("LXX");
                break;
            case 8:
                finalOutput.unshift("LXXX");
                break;
            case 9:
                finalOutput.unshift("XC");
                break
            
            default:
                break;
            }

            switch (numbers[numbers.length - 3]) {
                case 1:
                    finalOutput.unshift("C");
                    break;
                case 2:
                    finalOutput.unshift("CC");
                    break;
                case 3: 
                    finalOutput.unshift("CCC");
                    break;
                case 4:
                    finalOutput.unshift("CD");
                    break;
                case 5:
                    finalOutput.unshift("D");
                    break;
                case 6:
                    finalOutput.unshift("DC");
                    break;
                case 7:
                    finalOutput.unshift("DCC");
                    break;
                case 8:
                    finalOutput.unshift("DCCC");
                    break;
                case 9:
                    finalOutput.unshift("CM");
                    break
                
                default:
                    break;
                }
                switch (numbers[numbers.length - 4]) {
                    case 1:
                        finalOutput.unshift("M");
                        break;
                    case 2:
                        finalOutput.unshift("MM");
                        break;
                    case 3: 
                        finalOutput.unshift("MMM");
                        break;
                    
                    default:
                        break;
                    }

    return finalOutput.join("");
}*/