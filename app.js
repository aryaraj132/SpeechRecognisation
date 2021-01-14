const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const closePop = document.querySelector('.close-popup');
const popup = document.querySelector('.popup');
closePop.addEventListener('click',()=>{
    popup.setAttribute("style","opacity:0;transform: translateX(350px);");
})
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    document.body.insertAdjacentHTML("afterbegin", `<style>.bars{animation-duration: 0.3s;}</style>`)
};

recognition.onspeechend = function () {
    style = document.body.getElementsByTagName('style');
    style[0].remove();
};

recognition.onresult = async function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    await new Promise(wait => setTimeout(wait, 500));
    window.open(`http://www.google.com/search?hl=en-GB&source=hp&q=${transcript}`)
};


btn.addEventListener('click', ()=> {
    recognition.start();
});
window.onload = function(){
    recognition.start();
    document.querySelector('.popup').setAttribute("style","transform: translateX(0px);opacity:1;");
}
