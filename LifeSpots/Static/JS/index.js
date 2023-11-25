let session = new Map();
function handleSession() {
    session.set("userAgent", window.navigator.userAgent);
    session.set("startDate", new Date().toLocaleString());
}
function checkAge() {
    session.set("age", prompt("Введите свой возвраст"))

    if (session.get("age") >= 18) {
        alert('Приветствуем тебя на LifeSpot ' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции предназначены для лиц старше 18 лет. Вы будете перенаправлены.")
        window.location.href = "http://www.google.com"
    }
}
let sessionLog = function logSession () {
    for (let result of session) {
        console.log(result);
    }
}
function filterOutput() {
    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i < elements.length; i++) {
        let videoText = elements[i].querySelector('.video-title').innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        }
        else {
            elements[i].style.display = 'inline-block';
        }
    }
}