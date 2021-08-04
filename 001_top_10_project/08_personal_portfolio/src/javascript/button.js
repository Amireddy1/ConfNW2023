const button_top=document.querySelector("#button_top");
const button_work=document.querySelector( "#button_work");
const button_contact=document.querySelector("#button_contact");
const button_id_list=[
    "button_top",
    "button_work",
    "button_contact",
]
button_top.addEventListener("click",scrollToScrenn);
button_work.addEventListener("click",scrollToScrenn);
button_contact.addEventListener("click",scrollToScrenn);
const button_work_Top=document.querySelector("#index_clmn_second").offsetTop;
const button_contact_Top=document.querySelector("#index_clmn_third").offsetTop;

function scrollToScrenn(event){
    const clicked_id=event.target.id;
    console.log(clicked_id);
    switch(clicked_id){
        case button_id_list[0]:
            window.scrollTo({top:0 , behavior:'smooth'});
            break;
        case button_id_list[1]:
            window.scrollTo({top: button_work_Top, behavior:'smooth'});
            break;
        case button_id_list[2]:
            window.scrollTo({top: button_contact_Top, behavior:'smooth'});
            break;
    }
}