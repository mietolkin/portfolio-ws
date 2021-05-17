///DATA

const portfolio = [
    {
        name: 'Flex Box layout',
        adress: 'https://mietolkin.github.io/flex-box-ws/',
        adressCode: 'https://github.com/mietolkin/flex-box-ws',
        img: '/img/flex.jpg',
        categorie: 'Layouts',

    },

    {
        name: 'Flex Box layout',
        adress: 'https://mietolkin.github.io/flex-box-ws-2/',
        adressCode: 'https://github.com/mietolkin/flex-box-ws-2',
        img: '/img/flex2.jpg',
        categorie: 'Layouts',

    },

    {
        name: 'Float layout',
        adress: '#',
        adressCode: '#',
        img: '/img/float.jpg',
        categorie: 'JavaScript',

    },

    {
        name: 'Bank JS app',
        adress: 'https://mietolkin.github.io/bank-app/',
        adressCode: '#',
        img: '/img/bank.jpg',
        categorie: 'JavaScript',

    },

    {
        name: 'Pig-game',
        adress: 'https://mietolkin.github.io/pig-game/',
        adressCode: 'https://github.com/mietolkin/pig-game',
        img: '/img/pig-game.jpg',
        categorie: 'JavaScript',

    },
    {
        name: 'Todo list',
        adress: 'https://mietolkin.github.io/todo-list/',
        adressCode: 'https://github.com/mietolkin/todo-list',
        img: '/img/todo.jpg',
        categorie: 'JavaScript',

    },
];

const someTextData = ["I'm Junior Front End Developer", "I'm Filmmaker"];


// slide show

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 4000);



