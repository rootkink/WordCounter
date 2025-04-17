const textBox = document.getElementById("text-box")
const wordCount = document.getElementById("word-count")
const charCount = document.getElementById("char-count")
textBox.addEventListener("input",(e)=>{
    charCount.innerText = e.target.value.trim().slice(/\s+/).length
    wordCount.innerText = e.target.value.split(" ").filter(word => word.length > 0).length
})
