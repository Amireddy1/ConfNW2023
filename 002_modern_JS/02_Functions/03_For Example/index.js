const button=document.querySelector("button");
const buttonClick = () => {
    console.log(this);
}
button.addEventListener("click",buttonClick);

const email=[
    "someone_01@gmail.com",
    "someone_02@naver.com",
    "someone_03@gmail.com",
    "someone_04@daum.com",
];

const foundMail=email.find(item => item.includes("@gmail.com"));

console.log(foundMail);

const fitlerMail=email.filter(item => item.includes("@gmail.com"));
const filterNotMail=email.filter(item => !item.includes("@gmail.com"));
const emailCopy=[];
const spiltMail=email.forEach(item => 
    emailCopy.push(item.split("@")[0])
);
const splitMapMail=email.map(item =>
    item.split(item.split("@")[0])
);
console.log(`const filterMail = ${fitlerMail}`);
console.log(`const filterNotMail = ${filterNotMail}`);
console.log(`const emialCopy = ${emailCopy}`);
console.log(`const spiltMapMail = ${splitMapMail}`);