function numberToUnits(){
    const num = parseInt(prompt('Enter a positive integer: '));
    switch (num) {
        case (num<=9):
            console.log("Number is unit Digit")
            break;
            case (num>9&&num<=99):
                console.log("Number is ten Digit")
                break;
                case (num>99&&num<=999):
                    console.log("Number is Hundred Digit")
                    break;
                    case (num>999&&num<=9999):
                        console.log("Number is Thousand Digit")
                        break;
                        case (num>9999&&num<=99999):
                            console.log("Number is tenThousand Digit")
                            break;
        default:
            break;
    }
}
numberToUnits()