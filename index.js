const textBox = document.getElementById("text-box")
const wordCount = document.getElementById("word-count")
const charCount = document.getElementById("char-count")
window.onload = ()=>{
   textBox.value = ""
}

textBox.addEventListener("input",(e)=>{
    charCount.innerText = e.target.value.trim().slice(/\s+/).length
    wordCount.innerText = e.target.value.split(" ").filter(word => word.length > 0).length
})

const downloadBtn = document.getElementById("download-btn")

downloadBtn.addEventListener("click",()=>{
    if(textBox.value.trim().length == 0){
        console.log("Empty File cant be created")
    }
    else{
        const blob = new Blob([textBox.value],{type : "text/plain"})
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url;
        a.download = "file.txt"
        document.body.appendChild(a);
        a.click()
        URL.revokeObjectURL(url);
        document.body.removeChild(a)
    }
})