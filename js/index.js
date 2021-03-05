// импорт по умолчанию (дефолтный экспорт)
import refs from "./modalRefs.js"
console.log(refs);
console.log(refs.backDrop);

//обработаем события нажатия кнопки дабы открыть модальное окно
refs.modalBtn.addEventListener("click", openModal) 
function openModal(){
    console.dir(refs.backDrop);
    console.log(refs.backDrop.style.display);
    refs.backDrop.style.display="block"
    console.log(refs.backDrop.style.display);
}

window.addEventListener("keydown", closeModal)
function closeModal(e){
    console.log(e);
    console.log(e.code);
    if(e.code==="Escape"){
        refs.backDrop.style.display="none"
    }
    
}

// именованый импорт
// import {modalRefs} from "./modalRefs.js"

// переменная обьявлено но не инициализирована
let userName;
console.log(userName); // undefined
console.log(typeof userName);

// присвоение значения переменной
userName="Таня";
console.log(userName);
console.log(typeof userName);

//переприсвоение значения переменной
userName="Vova";
console.log(userName); 
console.log(typeof userName);

// узнаем тип данных значения переменной
console.log("typeof: ",typeof userName);

// const userAge;-нельзя обьявлять без значения!!!!!
const userAge=36;
console.log(userAge);
console.log("typeof: ",typeof userAge);
// userAge=76;- нельзя менять значение

