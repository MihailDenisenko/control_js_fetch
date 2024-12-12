// Переменные на странице
const body = document.body;
const divMain = document.createElement('div');
const divInput = document.createElement('div');
const divResult = document.createElement("div");
const input = document.createElement('input');
const br = document.createElement('br')
const divMenu = document.createElement('div')
let onElemented;
const f = debounce(fetching)
let inputValues; 
let elementLabel;
let classColored;
let divElements = document.createElement('div');
let countDiv = 190;
let onClosed;


// Загрузка элементов на страницу
function started() {
    body.style.margin = "0";
    body.style.padding = "0";

    divMain.style.height = "405px";
    divMain.style.position = 'absolute'
    divMain.style.width = "350px";
    divMain.style.backgroundColor = "lightgrey";
    divMain.style.margin = "15px 0 0 25px";
    divInput.style.padding = "45px auto";
    divMain.style.borderRadius = '15px'
    divInput.style.margin = "auto";

    divElements.classList.add("divElements");
    divElements.style.padding = '0'
    input.placeholder = 'Введите искомое'
    input.setAttribute('name', 'name')
    input.setAttribute("type", "text");
    input.style.width = '200px'
    input.style.margin = "45px auto 0 40px";
    // inputButton.style.margin = "0 0 0 15px";
    // inputButton.setAttribute("type", "button");
    // inputButton.value = "Поиск";
    input.dataset.input = "";
    input.dataset.colored = "";
    // // inputButton.dataset.inputButton = "";
    // inputButton.dataset.colored = "";

    divElements.style.background = 'white'
    divElements.style.height = '150px'
    divElements.style.marginTop = `${countDiv}px`
    // divElements.style.position = 'fixed';
    divElements.style.top = '190px'
    divElements.style.left = "0";
    divElements.style.borderRadius = '15px'
    divInput.append(input);
    // divInput.append(inputButton);
    divInput.classList.add("divInput");
    divMain.classList.add("divMain");
    divMain.prepend(divInput);
    body.prepend(divMain)
    divMain.append(divElements);

}
started();

// Слушатель наыедения на кнопку
document.addEventListener('mouseover', (event) => {
    if (event.target.classList == 'img') {
        // console.log('hohoho')
        onClosedy(event.target)
    } else return   
})


// Действия при вводе кнопок
input.addEventListener("keydown", function (ev) {
  inputValues = input.value;
    if (inputValues == '') {
        divMenu.innerHTML = ''
        countDiv = 190
        divElements.style.marginTop = `${countDiv}px`;
 
  }
    //   console.dir(ev)
  if (ev.code == "Space") {
    return;
  }
  f(inputValues);
});

// Слушатель при наведении мыши на элeмент
document.addEventListener('mouseover', (event) => {
    if (event.target.dataset.colored==='') {
        colored(event.target)
    } else if (event.target.dataset.coloreed === '') {
        coloreed(event.target)
    }

})
// Слушатель когда убираем мышь
document.addEventListener('mouseout', (event) => {
    if (event.target.dataset.colored==='') {
        noColored(event.target)
    }
})

// Слушатель выбора репозитория
document.addEventListener("click", function (event) {
  onElement = event.target;
  if (onElement.dataset.onCards !== "") {
    return;
  }

  cardCreater(onElement);
});
   
// Слушатель для Удаления Элемента
document.addEventListener('mouseout',(event)=> {
    const elementImg = event.target
    if (elementImg.classList =='img'){
        onClosedi(elementImg)
    }
})

// Слушатель для Удаления Элемента
// document.addEventListener('mouseout',(event)=> {
//     const element = event.target
//     if (element.classList =='img'){
//         onClosed(element)
//     }
// })




// Функция Уменьшения значка 
function onClosedi(elementImg) {
    elementImg.style.transform = 'scale(1)'
    elementImg.style.transition = 'all 1s'
}






// Функция Увеличения значка 
function onClosedy(elementImg) {
    elementImg.style.transition = 'all 1s';
    elementImg.style.transform = "scale(1.3)";
}


// Функция создания корточек
function cardCreater(onElement){
    setTimeout(() => {
        input.value = '';
        divMenu.innerHTML = "";
        countDiv = 190;
        divElements.style.marginTop = `${countDiv}px`;
    }, 750) 

    
    let card = document.createElement("div");
    let cardLeft = document.createElement('div');
    let cardRight = document.createElement("div");
    card.dataset.coloreed = ''
    card.classList.add(onElement.dataset.id);
    card.style.display = "flex";
    card.style.justifyContent = 'space-between'

    card.style.padding = '15px';

    // cardLeft.style.paddingLeft = "15px";
    // card.style.height = '90px';
    card.style.margin = '0'
    card.style.border = '1px solid black'
    cardLeft.classList.add(onElement.dataset.id)
    let cardName = document.createElement('p');
    cardName.style.margin = '0'
    cardName.textContent = `Name: ${onElement.dataset.name}`
    let cardStars = document.createElement('p');
    cardStars.style.margin = "0";

    cardStars.textContent = `Start: ${onElement.dataset.stars}`
    let cardOwner = document.createElement('p');
    cardOwner.style.margin = "0";
    
    cardOwner.textContent = `Owner: ${onElement.dataset.owner}`
    let img = document.createElement('img');
    img.src = 'closed.png'
    img.style.height = '30px'
    // img.style.backgroundColor = 'red'
    img.style.borderRadius = '50%'
    img.classList.add('img')
    cardLeft.append(cardName);
    cardLeft.append(cardOwner);
    cardLeft.append(cardStars);
    cardRight.append(img);
    card.append(cardLeft)
    card.append(cardRight);

    divElements.appendChild(card)
    divElements.appendChild(card);



}


// Функция перекрашивания элемента при удалении мыши
function noColored(trg) {
    onElemented = trg.style.backgroundColor = 'white'
    trg.style.transition= 'all 0.5s'
    // setTimeout(() => {
    //     onElemented = trg.style.backgroundColor = "white";
    // }, 500);
}

// Функция перекрашивания элемента при наведении мыши
function colored(trg) {
    onElemented = trg.style.backgroundColor = 'aqua'
    trg.style.transition= 'all 0.5s'
    // setTimeout(() => {
    //     onElemented = trg.style.backgroundColor = "white";
    // }, 500);
}
function coloreed(trg) {
  onElemented = trg.style.backgroundColor = "aqua";
  trg.style.transition = "all 0.5s";
  setTimeout(() => {
      onElemented = trg.style.backgroundColor = "";
  }, 1500);
}

// Функция fetching
function fetching(value) {
    if (divMenu.innerHTML !== "" || divMenu.innerHTML === " ") {
        divMenu.innerHTML = "";
        countDiv = 190;
    }
    if (value!=''){
    const url = `https://api.github.com/search/repositories?q=${value}`;
    fetch(url)
      .then((response) => {
        if (response.status < 400) {
          return response.json();
        }
      })
        .then((json) => {
            console.log(json)
            arrays(json, value)
        });
    } else { }
        
}
// Функция создающаяя вспылающие элементы
    function arrays(json, val) {
        let js = json['items']       
        console.log(js)
        // Поиск первых 5 элементов
        for (let i = 0; i < 5; i++){
            const item = js[i]
            console.log(js[i]['name'])
            elementLabel = document.createElement('div')
            elementLabel.style.backgroundColor = 'white';
            elementLabel.style.width = "200px";
            elementLabel.dataset.colored = ''
            elementLabel.dataset.onCards = '';
            elementLabel.dataset.id = item['id']
            elementLabel.dataset.name = item['name']
            elementLabel.dataset.owner = item['owner']['login']
            elementLabel.dataset.stars = item["stargazers_count"];
            divElements.style.marginTop = `${countDiv-140}px`;

            elementLabel.style.margin = '5px 0 5px 40px'
            elementLabel.textContent = item['name'];
            divMenu.appendChild(elementLabel)
            divInput.appendChild(divMenu)
            divInput.appendChild(br)
        }
}
    
// Функция Debounce
function debounce(fn) {
  let timer;
  return function (...args) {
    // console.log(args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, 500);
  };
}