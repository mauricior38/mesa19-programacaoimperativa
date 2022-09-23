let Pessoas = require('./modulo/Pessoas')

let lista = {

        maiorMenorAltura : function(array){
               
            let menor = array[0].altura;
            let maior = array[0].altura;
          
            for (i = 0; i < array.length; i++) {
              let altAux = array[i];
          
              if (altAux.altura < menor) {
                menor = altAux.altura;
              } else if (altAux.altura > maior) {
                maior = altAux.altura;
              }
            }
            // console.log(`O altura menor é ${menor}. A altura maior é ${maior}.`);
            return `A altura menor é ${menor}. A altura maior é ${maior}`
          },

          mediaAltura : function(array) {
                let media = 0;
                let qtdF = 0;
                let altSoma = 0;
              
                for (i = 0; i < array.length; i++) {
                  let sexAux = array[i];
              
                  if (sexAux.sexo === "F") {
                    qtdF++;
                    altSoma = sexAux.altura + altSoma;
                  }
              
                  media = altSoma / qtdF;
                }
              
                return `A media de altura das mulheres é ${media.toFixed(2)} m.`
              },
              
              qtdHomens : function (array){
                    let qtdM = 0;
                  
                    for (i = 0; i < array.length; i++) {
                      let homAux = array[i];
                  
                      if (homAux.sexo === "M") {
                        qtdM++;
                      }
                    }
                    return `A quantidade de homens é ${qtdM}.`
                  }        
    }

console.log(lista.maiorMenorAltura(Pessoas))
console.log(lista.mediaAltura(Pessoas))
console.log(lista.qtdHomens(Pessoas))


