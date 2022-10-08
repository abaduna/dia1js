const texare = document.querySelector("#textarea")
const voicelist = document.querySelector("#void")
const spenchlist = document.querySelector(".submit")

let synth = speechSynthesis
let isSpeaking = true



function hablar(){
    for(let voice of synth.getVoices()){
        let option = document.createElement("option")
        option.text = voice.name
        voicelist.add(option)
        
    }
}
synth.addEventListener("voiceschanged",hablar)

function textoListener(text) {
    let utrede = new SpeechSynthesisUtterance(text)
    for(let of synth.getVoices())
}