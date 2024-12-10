const toggleInfo = (id, event) => {
    const info = document.getElementById(id);
    info.classList.toggle("info-active");

    if(event.target.innerText == "Подробнее"){
        event.target.innerText = "Скрыть";
    }else{
        event.target.innerText = "Подробнее";
    }
    
}

const onSubmit = (event) => {
    event.preventDefault();
    alert("Ваша заявка отправлена!");
}