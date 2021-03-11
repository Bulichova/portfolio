import refs from "./modalRefs.js"
console.log(refs);
refs.form.addEventListener("input", (e)=>{
    console.log(e)
    console.log(e.target.value)

})
