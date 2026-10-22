const car = document.querySelector('#carousel');
const btnEsquerda = document.querySelector('#btnEsquerda');
const btnDireita = document.querySelector('#btnDireita');
const cor = [
    'var(--laranja)',
    'var(--amarelo)',
    'var(--azul)'
];

let indiceAtual = 0;

function atualizarCarrossel() {
    car.style.background = cor[indiceAtual];
}
btnDireita.addEventListener("click", () => {
    indiceAtual++;

    if (indiceAtual >= cor.length) {
        indiceAtual = 0;
    }
    atualizarCarrossel();
});

btnEsquerda.addEventListener("click", () => {
    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = cor.length - 1;
    }

    atualizarCarrossel();
});

atualizarCarrossel();