const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";// upper case variable only uses as saving variable with only string
const USERNAME_KEY="username";

//greetings section이 지나고 다른 요소들이 등장하기 위해 정의된 변수들
const weatherContainer=document.querySelector("#weather-container")
//const quoteContainer=document.querySelector("#quote-container");

function onLoginSubmit(event){
    event.preventDefault(); //preventDefault stops default behavior of browser and javascript gives event value to first argument of fuction for free when addEventListener activates.
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username); //browser에 값을 저장해 새로고침해도 값을 기억하도록 함. (key,value)형식으로 작성
    paintGreetings(username);
    loginForm.classList.add(REMOVED);
}

function greetingMessage(username){
    if(hours>=06&&hours<10){
        return `Good Morning, ${username}`;
    } else if(hours>=10&&hours<17){
        return `Have a nice day, ${username}`;
    } else if(hours>=17&&hours<24){
        return `Good evening, ${username}`;
    } else if(hours>=0&&hours<06){
        return `Keep it up! ${username}`;
    } else {
        return `Greeting, ${username}`;
    }
    //Good Morning, Have a nice day, Good Evening, Keep it up!
    //0600~1000, 1000~1700, 1700~2400, 2400~0600
}

//다른 요소들을 등장하게 하는 함수
function paintGreetings(username){
    removeElement(loginForm);
    greeting.innerText=greetingMessage(username);
    showElement(greeting);
    showElement(weatherContainer);
    showElement(toDoContainer);
    showElement(toDoList);
    //showElement(quoteContainer);
    showElement(mainTitle);
    showElement(toDoContainer);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername==null){
    loginForm.classList.remove(REMOVED);//show the form
    loginForm.addEventListener("submit", onLoginSubmit);    
} else {
    paintGreetings(savedUsername);
}

function removeGreetings(){
    location.reload();
    localStorage.removeItem(USERNAME_KEY);
}

greeting.addEventListener("click", removeGreetings);//greeting을 클릭하면 이름을 지우고 처음 화면으로 돌아가도록 함.