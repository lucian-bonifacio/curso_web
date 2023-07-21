// const paragraph = document.querySelector('p')

/*
O .classList é utilizado para obter uma listagem das classes que um elemento possui
Novamante, tudo parte da referência do elemento que foi obtida através das const paragraph.
*/

/* Através de um método deste .classList, o .add(), eu consigo adicionar classes a um elemento */

// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('success')

/*
 Observe que através do classList é possível utilizar alguns métodos como, por exemplo, o .remove além do .add já citado anteriormente.

 Eles são meio óbvios: um adiciona uma classe ao elemento e o outro remove.
*/

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
    if(paragraph.textContent.includes('error')) {
        paragraph.classList.add('error')
    }

    if(paragraph.textContent.includes('success')) {
        paragraph.classList.add('success')
    }
})

const title = document.querySelector('h1')

title.classList.toggle('teste')
title.classList.toggle('teste')
title.classList.toggle('teste')
title.classList.toggle('teste')