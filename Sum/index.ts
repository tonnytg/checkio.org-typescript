// https://js.checkio.org/mission/sum-numbers/solve/
// https://js.checkio.org/user/tonnytg/badges/solver/

function sumNumbers(text: any ):Number {
    let Total: Number = 0;
    text.split(" ").forEach(element => {
        Number(element) ? Total = Number(Total) + Number(element) : null ;
         ;
    });
    return Total
};

let Valor = sumNumbers("Teste")
console.log(Valor);
