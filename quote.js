let quoteBox = document.querySelector(".text")
let authorName = document.querySelector(".author")
let voiceNote = document.querySelector("#voice")
let copyQuote = document.querySelector("#copy")


let quoteAgain = document.getElementById("again")




function randomquote()
{
    quoteAgain.textContent= "Loading Quote"
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        quoteBox.innerHTML = result.content
        authorName.textContent = "--"+result.author
        quoteAgain.textContent = "New Quote"
    })
}
quoteAgain.addEventListener('click',randomquote)
voiceNote.addEventListener('click',()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteBox.innerText}`);
 speechSynthesis.speak(utterance)
})


copyQuote.addEventListener('click',()=>{
    navigator.clipboard.writeText(quoteBox.innerText)
})


