//play buttons
const booBtn=document.getElementById("booBtn");

//sound
const sound=document.getElementById("sound")

//image
const image=document.getElementById("image")

booBtn.onclick = function()
{
    sound.src = "./sounds/boo.mp3"
    image.src = "./images/booing.gif"
    document.body.style.backgroundColor="Coral"
    sound.play();
}
applauseBtn.onclick = function()
{
    sound.src = "./sounds/applause.mp3"
    image.src = "./images/applause.gif"
    document.body.style.backgroundColor="Greenyellow"
    sound.play();
}
gaspBtn.onclick = function()
{
    sound.src = "./sounds/gasp.mp3"
    image.src = "./images/gasping.gif"
    document.body.style.backgroundColor="Red"
    sound.play();
}
tadaBtn.onclick = function()
{
    sound.src = "./sounds/tada.mp3"
    image.src = "./images/tada.gif"
    document.body.style.backgroundColor="Black"
    sound.play();
}
victoryBtn.onclick = function()
{
    sound.src = "./sounds/victory.mp3"
    image.src = "./images/victory.gif"
    document.body.style.backgroundColor="Blue"
    sound.play();
}
wrongBtn.onclick = function()
{
    sound.src = "./sounds/wrong.mp3"
    image.src = "./images/wrong.gif"
    document.body.style.backgroundColor="Yellow"
    sound.play();
}
sound.onended = function()
{
    image.src = "./images/sound.png";
    document.body.style.backgroundColor = "blueviolet"
}