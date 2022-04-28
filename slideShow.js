'use strict'

//carregamento dinamico das imagens

//uma estrutura de array com objetos com id e a url da img
const images = [
    {
        'id': '1',
        'url': './Img/Dc.jpg',
    },
    {
        'id': '2',
        'url': './Img/Rick and Morty.jpg',
    },
    {
        'id': '3',
        'url': './Img/Simpsons.jpg',
    },
    {
        'id':'4',
        'url':'./Img/billy and mandy.png'
    },
    {
        'id':'5',
        'url':'./Img/ang.jpg'
    },
    {
        'id':'6',
        'url':'./Img/spider.jpg'
    }
]

const containerItens = document.querySelector('#container-itens')


//carregamento das img
const loadImages = (images, container)=>{
    //vai pegar as imagens que receber e varrer todas elas
        images.forEach(image => {
            container.innerHTML += `
            <div class = 'item'>
            <img src= '${image.url}'
            </div>  
            `
        }
    )
}

loadImages(images, containerItens)

let items = document.querySelectorAll('.item');

const previous = () => {
    //vou pegar a primeira imagem, e jogar pra ultimo
    containerItens.appendChild(items[0])
    items = document.querySelectorAll('.item');
}

const next = () =>{
    //pegar a ultima imagem, e jogar pra primeiro
    const lastItem = items[items.length -1]
    containerItens.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item');
}

//chamando a função <<previous(anterior)
document.querySelector('#previous').addEventListener('click', previous)
//chamando a função >>next(proximo)
document.querySelector('#next').addEventListener('click', next)