'use strict'

// Query Selector Transformaciones 2D
const translate = document.querySelector(".js_translate");
const btn1 = document.querySelector(".js_btn1")
const rotate = document.querySelector(".js_rotate");
const btn2 = document.querySelector(".js_btn2")
const scale = document.querySelector(".js_scale");
const btn3 = document.querySelector(".js_btn3");
const skew = document.querySelector(".js_skew");
const btn4 = document.querySelector(".js_btn4");
const matrix = document.querySelector(".js_matrix");
const btn5 = document.querySelector(".js_btn5");
const origin = document.querySelector(".js_origin");
const btn6 = document.querySelector(".js_btn6");

// Query Selector Transformaciones 3D
const style = document.querySelector(".js_style");
const btn7 = document.querySelector(".js_btn7");
const backface = document.querySelector(".js_backface");
const btn8 = document.querySelector(".js_btn8")

// Query Selector Transiciones

const linear = document.querySelector(".js_linear");
const btn9 = document.querySelector(".js_btn9");
const ease = document.querySelector(".js_ease");
const btn10 = document.querySelector(".js_btn10");
const easeIn = document.querySelector(".js_easeIn");
const btn11 = document.querySelector(".js_btn11");
const easeOut = document.querySelector(".js_easeOut");
const btn12 = document.querySelector(".js_btn12");
const easeInOut = document.querySelector(".js_easeInOut");
const btn13 = document.querySelector(".js_btn13");
const cubicBezier = document.querySelector(".js_cubicBezier");
const btn14 = document.querySelector(".js_btn14");

// translate.addEventListener("click", () => {
//     translate.classList.toggle("box1");
// })

//Transformaciones 2D

function handleTranslate() {
    translate.classList.toggle("box1");
}

btn1.addEventListener("click", handleTranslate);

function handleRotate() {
    rotate.classList.toggle("box2");
}

btn2.addEventListener("click", handleRotate);

function handleScale() {
    scale.classList.toggle("box3");
}

btn3.addEventListener("click", handleScale);

function handleSkew() {
    skew.classList.toggle("box4");
}

btn4.addEventListener("click", handleSkew);

function handleMatrix() {
    matrix.classList.toggle("box5");
}

btn5.addEventListener("click", handleMatrix);

function handleOrigin() {
    origin.classList.toggle("box6");
}

btn6.addEventListener("click", handleOrigin);

//Transformaciones 3D

function handleStyle() {
    style.classList.toggle("box7");
}

btn7.addEventListener("click", handleStyle);

function handleBackface() {
    backface.classList.toggle("flipBox");
}

btn8.addEventListener("click", handleBackface);

//Transiciones Timing-Function
function handleLinear() {
    linear.classList.toggle("ball1");
}

btn9.addEventListener("click", handleLinear);

function handleEase() {
    ease.classList.toggle("ball2");
}

btn10.addEventListener("click", handleEase);

function handleEaseIn() {
    easeIn.classList.toggle("ball3");
}

btn11.addEventListener("click", handleEaseIn);

function handleEaseOut() {
    easeOut.classList.toggle("ball4");
}

btn12.addEventListener("click", handleEaseOut);

function handleEaseInOut() {
    easeInOut.classList.toggle("ball5");
}

btn13.addEventListener("click", handleEaseInOut);

function handleCubicBezier() {
    cubicBezier.classList.toggle("ball6");
}

btn14.addEventListener("click", handleCubicBezier);