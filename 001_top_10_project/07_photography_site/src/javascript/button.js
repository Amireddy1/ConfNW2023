const button_back=document.querySelector("#nav_back");
const button_overview=document.querySelector("#nav_overview");
const button_music=document.querySelector("#nav_music");
const button_advertise=document.querySelector("#nav_advertise");
const button_gift=document.querySelector("#nav_gift");
const button_=document.querySelector("#nav_footer");
const index_grid_1=document.querySelector("#index_div-1");
const index_grid_2=document.querySelector("#index_div-2");
const index_grid_3=document.querySelector("#index_div-3");
const index_grid_4=document.querySelector("#index_div-4");
const button_id = [
    "nav_back",
    "nav_overview",
    "nav_music",
    "nav_advertise",
    "nav_gift",
    "nav_footer",
];
// 이벤트 리스너

button_overview.addEventListener("click",button_click);
button_music.addEventListener("click",button_click);
button_advertise.addEventListener("click",button_click);
button_gift.addEventListener("click",button_click);

function button_click(event){
    console.log(event.target.id);
    switch(event.target.id){
        case button_id[0]:
            console.log(event.target.id); 
            break;
        case button_id[1]:
            console.log(event.target.id); 
            window.scrollTo(0,index_grid_1.offsetTop);
            break;
        case button_id[2]:
            console.log(event.target.id); 
            window.scrollTo(0,index_grid_2.offsetTop);
            break;
        case button_id[3]:
            console.log(event.target.id); 
            window.scrollTo(0,index_grid_3.offsetTop);
            break;
        case button_id[4]:
            console.log(event.target.id); 
            window.scrollTo(0,index_grid_4.offsetTop);
            break;
        case button_id[5]:
            console.log(event.target.id); 
            break;
    }
}