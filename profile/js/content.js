$(function(){

    const bar = document.querySelector("#minwon-bar .progress")

let totalMinwon = 80, resolveMinwon = 20
let t = 0

const barAnimation = setInterval(() => {
bar.style.width =  t + '%'
t++ >= totalMinwon && clearInterval(barAnimation)
}, 18);

const baar = document.querySelector("#minwon-bar .progress1")

let totalMinwon1 = 80, resolveMinwon1 = 12
let tt = 0

const barAnimation1 = setInterval(() => {
baar.style.width =  tt + '%'
tt++ >= totalMinwon1 && clearInterval(barAnimation1)
}, 18);


const ar = document.querySelector("#minwon-bar .progress2")

let totalMinwon2 = 85, resolveMinwon2 = 12
let ttt = 0

const barAnimation2 = setInterval(() => {
ar.style.width =  ttt + '%'
ttt++ >= totalMinwon2 && clearInterval(barAnimation2)
}, 18);

const css = document.querySelector("#minwon-bar .progress3")

let totalMinwon3 = 80, resolveMinwon3 = 12
let at = 0

const barAnimation3 = setInterval(() => {
css.style.width =  at + '%'
at++ >= totalMinwon3 && clearInterval(barAnimation3)
}, 18);

const arr = document.querySelector("#minwon-bar .progress4")

let totalMinwon4 = 85, resolveMinwon4 = 12
let a = 0

const barAnimation4 = setInterval(() => {
arr.style.width =  a + '%'
a++ >= totalMinwon4 && clearInterval(barAnimation4)
}, 18);

const aar = document.querySelector("#minwon-bar .progress5")

let totalMinwon5 = 70, resolveMinwon5 = 12
let aa = 0

const barAnimation5 = setInterval(() => {
aar.style.width =  tt + '%'
tt++ >= totalMinwon5 && clearInterval(barAnimation5)
}, 18);


})