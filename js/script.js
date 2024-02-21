agregar.addEventListener('click', function() {
    let elementoLista = prompt('Añade un elemento a la lista');
    let nuevoLi = document.createElement('li');
    document.getElementById('lista').appendChild(nuevoLi);
    nuevoLi.appendChild(elementoLista);
    nuevoLi.insertAdjacentHTML('afterbegin', elementoLista);
});

