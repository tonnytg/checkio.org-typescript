// https://js.checkio.org/mission/count-digits/solve/
// https://js.checkio.org/user/tonnytg/badges/solver/

function countDigits(text: any ):number {
        let Total: number = 0;
        for ( let element in text ) {
            Number(text[element]) ? Total = Total + 1: null ;
        };
        return Total
};

let Valor = countDigits("5 plus 6 is")
console.log(Valor + typeof(Valor));
