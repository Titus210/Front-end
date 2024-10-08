const main = document.querySelector('main');

const voiceSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');


const data = [
    {
        "image": './img/drink.jpg',
        text:"Get me some water Please. Im thirsty"
    },
    {
        "image": './img/food.jpg',
        text:"I am hungry. Get me some food"
    },
    {
        "image": './img/tired.jpg',
        text:"I am tired. I need to sleep"
    },
    {
        "image": './img/hurt.jpg',
        text:"I am hurt. I need a doctor"
    },
    {
        "image": './img/happy.jpg',
        text:"I am happy. I am feeling good"
    },
    {
        "image": './img/angry.jpg',
        text:"I am angry. I am feeling bad"
    },
    {
        "image": './img/sad.jpg',
        text:"I am sad. I am feeling bad"
    },
    {
        "image": './img/scared.jpg',
        text:"I am scared. I am feeling bad"
    },
    {
        "image": './img/outside.jpg',
        text:"I want to go outside. I want to play"
    },
    {
        "image": './img/home.jpg',
        text:"I want to go home. I want to sleep"
    },
    {
        "image": './img/school.jpg',
        text:"I want to go to school. I want to study"
    },
    {
        "image": './img/grandma.jpg',
        text:"I want to go to grandmas house. I want to play"
    },
]

data.forEach(createBox);

// create speech box
function createBox(item){
    const box = document.createElement('div');

    const { image, text } = item;

    box.classList.add('box');
    box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
    `;

    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();

        // add active effect
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    });

    main.appendChild(box);
}

