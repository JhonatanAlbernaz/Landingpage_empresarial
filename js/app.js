function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((Letra, i) => {
        setTimeout(() => elemento.innerHTML += Letra, 75 * i);
    });
}

const titulo = document.querySelector('.titulo-primeira-section');
typeWriter(titulo);

typeWriter(document.querySelector('.descricao-primeira-section')); 