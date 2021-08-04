const button_id_list=[
    "main_01", // button_id_list[0]
    "main_02", // button_id_list[1]
    "main_03", // button_id_list[2]
    "main_04", // button_id_list[3]
    "main_05", // button_id_list[4]
    "main_06", // button_id_list[5]
    "main_07", // button_id_list[6]
    "main_08", // button_id_list[7]
    "main_09", // button_id_list[8]
    "main_10", // button_id_list[9]
    "main_11", // button_id_list[10]
    "main_12", // button_id_list[11]
]
const button_key=[
    "Introduction", //buton_key[0]
    "What you should already know", //buton_key[1]
    "Javascributtont and Java", //buton_key[2]
    "Variables", //buton_key[3]
    "Declaring variables", //buton_key[4]
    "Global Variables", //buton_key[5]
    "Constants", //buton_key[6]
    "Data tybuttones", //buton_key[7]
    "if...else statement", //buton_key[8]
    "while statement", //buton_key[9]
    "Function declarations", //buton_key[10]
    "Reference", //buton_key[11]
]
const button_01=document.querySelector(`#nav_left > div:nth-child(2)`);
const button_02=document.querySelector(`#nav_left > div:nth-child(3)`);
const button_03=document.querySelector(`#nav_left > div:nth-child(4)`);
const button_04=document.querySelector(`#nav_left > div:nth-child(5)`);
const button_05=document.querySelector(`#nav_left > div:nth-child(6)`);
const button_06=document.querySelector(`#nav_left > div:nth-child(7)`);
const button_07=document.querySelector(`#nav_left > div:nth-child(8)`);
const button_08=document.querySelector(`#nav_left > div:nth-child(9)`);
const button_09=document.querySelector(`#nav_left > div:nth-child(10)`);
const button_10=document.querySelector(`#nav_left > div:nth-child(11)`);
const button_11=document.querySelector(`#nav_left > div:nth-child(12)`);
const button_12=document.querySelector(`#nav_left > div:nth-child(13)`);
button_01.addEventListener("click",scrollScreen);
button_02.addEventListener("click",scrollScreen);
button_03.addEventListener("click",scrollScreen);
button_04.addEventListener("click",scrollScreen);
button_05.addEventListener("click",scrollScreen);
button_06.addEventListener("click",scrollScreen);
button_07.addEventListener("click",scrollScreen);
button_08.addEventListener("click",scrollScreen);
button_09.addEventListener("click",scrollScreen);
button_10.addEventListener("click",scrollScreen);
button_11.addEventListener("click",scrollScreen);
button_12.addEventListener("click",scrollScreen);
function scrollScreen(event){
    const button_id_01=document.querySelector(`#${button_id_list[0]}`);
    const button_id_02=document.querySelector(`#${button_id_list[1]}`);
    const button_id_03=document.querySelector(`#${button_id_list[2]}`);
    const button_id_04=document.querySelector(`#${button_id_list[3]}`);
    const button_id_05=document.querySelector(`#${button_id_list[4]}`);
    const button_id_06=document.querySelector(`#${button_id_list[5]}`);
    const button_id_07=document.querySelector(`#${button_id_list[6]}`);
    const button_id_08=document.querySelector(`#${button_id_list[7]}`);
    const button_id_09=document.querySelector(`#${button_id_list[8]}`);
    const button_id_10=document.querySelector(`#${button_id_list[9]}`);
    const button_id_11=document.querySelector(`#${button_id_list[10]}`);
    const button_id_12=document.querySelector(`#${button_id_list[11]}`);
    switch(event.target.innerText){
        case button_key[0]:
            window.scrollTo({top: button_id_01.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[1]:
            window.scrollTo({top: button_id_02.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[2]:
            window.scrollTo({top: button_id_03.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[3]:
            window.scrollTo({top: button_id_04.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[4]:
            window.scrollTo({top: button_id_05.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[5]:
            window.scrollTo({top: button_id_06.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[6]:
            window.scrollTo({top: button_id_07.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[7]:
            window.scrollTo({top: button_id_08.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[8]:
            window.scrollTo({top: button_id_09.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[9]:
            window.scrollTo({top: button_id_10.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[10]:
            window.scrollTo({top: button_id_11.offsetTop ,behavior: 'smooth'});
            break;
        case button_key[11]:
            window.scrollTo({top: button_id_12.offsetTop ,behavior: 'smooth'});
            break;
    }

}
