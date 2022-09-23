let pessoas = [
  {
    altura: 1.8,
    sexo: "M",
  },
  {
    altura: 1.7,
    sexo: "M",
  },
  {
    altura: 1.68,
    sexo: "F",
  },
  {
    altura: 1.54,
    sexo: "F",
  },
  {
    altura: 1.3,
    sexo: "F",
  },
  {
    altura: 1.74,
    sexo: "M",
  },
  {
    altura: 1.84,
    sexo: "F",
  },
  {
    altura: 1.74,
    sexo: "M",
  },
  {
    altura: 1.44,
    sexo: "M",
  },
  {
    altura: 1.9,
    sexo: "F",
  },
];


const maiorMenorAltura = (array) => {
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

  console.log(`O altura menor é ${menor}. A altura maior é ${maior}.`);
};

maiorMenorAltura(pessoas);

const mediaAltura = (array) => {
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

  console.log(`A media de altura das mulheres é ${media}.`);
};

mediaAltura(pessoas);

const qtdHomens = (array) => {
  let qtdM = 0;

  for (i = 0; i < array.length; i++) {
    let homAux = array[i];

    if (homAux.sexo === "M") {
      qtdM++;
    }
  }
  console.log(`A quantidade de homens é ${qtdM}.`);
};

qtdHomens(pessoas);
