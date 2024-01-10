
const darkMode = document.getElementById('dark-change')
const home = document.getElementsByTagName('section')[0]
const box = document.getElementsByTagName('button')[4]
const box1 = document.getElementsByTagName('button')[5]
const input1 = document.getElementsByTagName('input')[0]
const input2 = document.getElementsByTagName('input')[1]
const input3 = document.getElementsByTagName('input')[2]
const input4 = document.getElementsByTagName('textarea')[0]
const value = document.getElementsByTagName('div')[13]
const options = document.getElementsByTagName('ul')[0]

function anotherone(){
    value.innerText = 'Code audit'
}
function another(){
    value.innerText = 'Personal code investigation'
}
function something(){
    value.innerText = 'Code debug'
}




darkMode.addEventListener('click', function(){
darkMode.classList.toggle('active');
options.classList.toggle('night')
value.classList.toggle('night')
home.classList.toggle('night')
input1.classList.toggle('night')
input2.classList.toggle('night')
input3.classList.toggle('night')
input4.classList.toggle('night')
box.classList.toggle('none')
box1.classList.toggle('none')
})
function toggleCheckbox() {
    box.classList.toggle('checked');
}
function toggleCheckbox1() {
    box1.classList.toggle('checked');
}