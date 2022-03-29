// Copy
let result = document.getElementById('result');
let textArea = document.getElementById("textArea");

function copy(){
    textArea.select()
    textArea.setSelectionRange(0, 99999)
    document.execCommand("copy");
    result.innerHTML = ` Copiado: ${ textArea.value}`
};