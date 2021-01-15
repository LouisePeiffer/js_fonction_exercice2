// Exo 1
// let chiffre = prompt('Un chiffre?')

// let reverseNumber = (num) => {
//     num = num.toString().split("").reverse().join("")
//     return num
// }

// let nbr = reverseNumber(chiffre)
// alert(nbr)

// Exo 2

// let chiffre = parseInt(prompt('Un nombre?'))

// let divPar2 = (a) => {
//     switch (a % 2) {
//         case 0:
//             return "Le num x est divisible par 2"
//         case 1:
//             return "Le num x n'est divisible pas par 2"
//         default: 
//             return "Ceci n'est pas un chiffre"
//     }
// }

// let result = divPar2(chiffre)
// console.log(divPar2(chiffre))

// Exo 3
let mdp = "badb1030"
let quest = prompt('Mot de passe?')

let logIn = (a) => {
        if (a == mdp) {
            alert("Vous êtes connecté")
        } else {
            let count = 0
            do {
                a = prompt("Essayez un autre mot de passe")
                count++
                if (a == mdp) {
                    alert('Bien joué')
                }
            } while (a != mdp && count<3);
            
    }
}
logIn(quest)

// Exo 4

