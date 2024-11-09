const btnShowMeme = document.getElementById('btn-show-meme');
const btnGather = document.getElementById('btn-gather');
const memeContainer = document.getElementById('meme-container');
const memeImg = document.getElementById('meme');
const birthdayMessage = document.getElementById('birthday-message');

const messages =[
    'Lembre-se: a idade é apenas um número... um número que está ficando realmente alto! 😂Feliz aniversário! 🎂',
    'Que o seu dia especial comece com uma bela xícara de café pela manhã e termine com merecidos copos de cerveja pela noite! Parabéns e muitas felicidades!',
    'Não esquenta, assim como um bom vinho, a cada ano você só fica mais gostoso. Parabéns, seu lindo! ',
    'Esta mensagem automática de aniversário é para te lembrar de guardar um pedacinho de bolo para mim. Parabéns e muitas felicidades! ',
    'Para o seu aniversário, preparei o presente mais especial desse mundo: um abraço-fantasma. Você pode não vê-lo, mas ele definitivamente está aí. ',
    'Você não completou apenas uma volta ao redor do sol, você desfilou e arrasou por este mundão este ano. Parabéns e muitas felicidades, sua linda! '
]


const memes = [
    "https://i.pinimg.com/736x/2f/29/c3/2f29c3b275d6c81766fc5f23c4109252.jpg", 
    "https://i.pinimg.com/474x/16/3f/59/163f59d9159e0b2ac222644fc2f337d6.jpg", 
    "https://i.pinimg.com/564x/4e/1e/64/4e1e640633af8ee57472fdaff069f105.jpg", 
    "https://i.pinimg.com/736x/17/cf/47/17cf47c7491d61d641c7de6244369e56.jpg", 
    "https://i.pinimg.com/236x/b3/e8/cf/b3e8cfbd330d5823f16ddd86760c8b31.jpg", 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqhOB4it7YCmuoV1AJ9568FiCgXoX8D2Hlg&s'
];

let lastIndex = -1; // Variável para armazenar o índice anterior
let lastIndexMessage = -1
btnShowMeme.addEventListener('click', () => {
    let randomIndex;
    let randomIndexMessage;
    // Gera um índice aleatório diferente do anterior
    do {
        randomIndex = Math.floor(Math.random() * memes.length);
    } while (randomIndex === lastIndex);

    do {
        randomIndexMessage = Math.floor(Math.random() * messages.length);
    } while (randomIndexMessage === lastIndexMessage);

    // Atualiza o último índice usado
    lastIndex = randomIndex;
    lastIndexMessage = randomIndexMessage;

    // Exibe o meme selecionado
    memeImg.src = memes[randomIndex];
    memeImg.style.display = 'block';
    birthdayMessage.style.display = 'block';
    birthdayMessage.innerText = messages[randomIndexMessage]
    btnShowMeme.textContent = "Clique para ver mais";
});

function gerarCoordenadasAleatorias(botaoLargura = 381, botaoAltura = 50) {
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    // Gera valores aleatórios para x e y garantindo que o botão não saia da tela
    const x = Math.floor(Math.random() * (larguraTela - botaoLargura));
    const y = Math.floor(Math.random() * (alturaTela - botaoAltura));

    return { x, y };
}

btnGather.addEventListener('mouseenter',(e)=>{
    e.currentTarget.style.position="absolute"
    const coordenadas = gerarCoordenadasAleatorias();
    console.log(coordenadas)

    e.currentTarget.style.left = `${coordenadas.x}px`
    e.currentTarget.style.top = `${coordenadas.y}px`

})


btnGather.addEventListener('click',(e)=>{
    e.currentTarget.style.position="absolute"
    const coordenadas = gerarCoordenadasAleatorias();
    console.log(coordenadas)

    e.currentTarget.style.left = `${coordenadas.x}px`
    e.currentTarget.style.top = `${coordenadas.y}px`

})



