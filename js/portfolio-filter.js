
// Selectors
const portfolioBlock = document.querySelector('.portfolio-page');
const btnBlock = document.querySelector('.category')

//---------------------------- Showing portfolio----------------------------
portfolio.forEach(function (portfolios) {
    // console.log(portfolios);


    const createDiv = document.createElement('div');
    createDiv.classList.add('portfolio-block', portfolios.categorie);

    const createPicture = document.createElement('img');
    createPicture.src = portfolios.img;
    createPicture.classList.add('videoId')
    // console.log(createPicture);
    createDiv.appendChild(createPicture);

    const createHeading = document.createElement('h3');
    createHeading.innerText = portfolios.name;
    createDiv.appendChild(createHeading);

    portfolioBlock.appendChild(createDiv);
})


// -------------------------Creating categories----------------------------------

let categoriesSet = new Set();
let categoriesUnic = ['All'];

portfolio.forEach(element => {
    categoriesSet.add(element.categorie);
});

categoriesSet.forEach(e => {
    categoriesUnic.push(e);
});

function createCategories(elem) {


    console.log(categoriesUnic);

    categoriesUnic.forEach(elem => {



        const createBtn = document.createElement('button');
        createBtn.classList.add(elem.toLowerCase());
        createBtn.innerText = elem;

        btnBlock.append(createBtn);

    });
}

createCategories();

function filterCategories(event) {


    categoriesUnic.forEach(function (categorie) {
        if (categorie === event.target.innerText) {


            let allSelectors = document.querySelectorAll(`.${event.target.innerText}`); // getiing categorie class
            let allPortfolio = document.querySelectorAll(`.portfolio-block`);
            let selectorName = event.target.innerText;



            if (selectorName === 'All') {
                console.log('all');

                for (let selector of allPortfolio) {
                    selector.style.display = 'block';
                }
            } else {
                for (let pb of allPortfolio) {
                    pb.style.display = 'none';
                }
                for (let selector of allSelectors) {
                    selector.style.display = 'block';
                }
            }
        }
    })
}


btnBlock.addEventListener('click', filterCategories)

//-------------------------------------------------Show video on top------------------------------------------

let headerDiv = document.querySelector('.header');
// let headerCover = document.querySelector('.header-cover');
let btnPlay = document.querySelector('.far');
// headerCover.style.backgroundImage = `url('${portfolio[0].img}')`;
// let imge = document.getElementsByTagName('img');
let videoAdress = portfolio[0].adress;

let btnsDiv = document.querySelector('.btns');

const createLink = document.createElement('a');
createLink.classList.add = "projectLink";
createLink.innerText = 'View website';
createLink.href = portfolio[0].adress;
createLink.target = '_blank';

const createCodeLink = document.createElement('a');
createCodeLink.classList.add = "projectLink";
createCodeLink.innerText = 'View code';
createCodeLink.href = portfolio[0].adressCode;
createCodeLink.target = '_blank';

btnsDiv.appendChild(createLink);
btnsDiv.appendChild(createCodeLink);


function showProjectDiscription(e) {

    const imgs = e.target;

    if (imgs.classList.value.toString() === "videoId") {
        const imgsPath = e.target.src.toString().split('img/')[1];
        const imgFullPath = 'img/' + imgsPath;
        // const imagePathSplit = imgsPath;

        portfolio.forEach(obj => {
            if (obj.img === imgFullPath) {

                btnsDiv.innerHTML = '';

                const createLink = document.createElement('a');
                createLink.classList.add = "projectLink";
                createLink.innerText = 'View website';
                createLink.href = obj.adress;
                createLink.target = '_blank';

                const createCodeLink = document.createElement('a');
                createCodeLink.classList.add = "projectLink";
                createCodeLink.innerText = 'View code';
                createCodeLink.href = obj.adressCode;
                createCodeLink.target = '_blank';





                console.log('www');
                headerDiv.style.backgroundImage = `url('${obj.img}')`;
                btnsDiv.appendChild(createLink);
                btnsDiv.appendChild(createCodeLink);

            } else {
                console.log('not match');
                // console.log(obj.img);

            }
        })
    } else {
        console.log('!=== img');
    }
}




portfolioBlock.addEventListener('click', showProjectDiscription);