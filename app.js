let test1 = document.getElementById('test1');
let test2 = document.getElementById('test2');

function paraVariable(...numbers) {
    test1.innerHTML = "Bonjour : ";
    for (let numb of numbers) {
        test1.innerHTML += numb + ", ";
    }
    test1.innerHTML = test1.innerHTML.trim().slice(0, -1);
}

paraVariable(1, 2, 3);
paraVariable(4, 5, 6);

function addParaVariable(...numbers) {
    let somme = 0;
    for (let numb of numbers) {
        somme += numb;
    }
    return parseInt(somme.toString());
}

let result = document.createElement('div')
document.body.appendChild(result);
result.innerHTML = "Résultat : " + addParaVariable(10, 20, 30, 40, 50) + "<br/>";
result.innerHTML += "Résultat : " +  addParaVariable(5, 10, 15, 20, 25) + "<br/>";
result.innerHTML += "Résultat : " +  addParaVariable(2.5, 5, 7.5, 10, 12.5);

function paraVariableMultiplication(...numbers) {
    let result = 0;
    for (let numb of numbers) {
        result += numb;
    }
    return parseInt(result * 11.76);
}

test2.innerHTML += paraVariableMultiplication(10, 20, 30, 40);
