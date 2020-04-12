const cipher = {

    encode: function cipher(offset, message) {
        let displacement = Number(offset);
        let textArr = [];

        if ((message !== 0 && message !== null) && (offset !== 0 && offset !== null)) {
            for (let count = 0; count < message.length; count++) {
                let ascii = message.toUpperCase().charCodeAt(count);

                if (ascii !== 32) {
                    let formulaNewLetter = String.fromCharCode(((ascii - 65 + displacement) % 26) + 65);
                    textArr.push(formulaNewLetter);
                } else {
                    textArr.push(" ");
                }
            }
        } else {
            throw new TypeError;
        }

        return textArr.join("");
    },


    decode: function decipher(offset, message) {
        let displacement = Number(offset);
        let textArr = [];
        if ((message !== 0 && message !== null) && (offset !== 0 && offset !== null)) {
            for (let count = 0; count < message.length; count++) {
                let ascii = message.toUpperCase().charCodeAt(count);

                if (ascii !== 32) {
                    let formulaNewLetter = String.fromCharCode(((ascii + 65 - displacement) % 26) + 65);
                    textArr.push(formulaNewLetter);
                } else {
                    textArr.push(" ");
                }
            }
        } else {
            throw new TypeError;
        }

        return textArr.join("");
    }

}

export default cipher;
