// replace input
const login_form_name=document.querySelector(".input_1");
const login_form_email=document.querySelector(".input_2");
const login_form_age=document.querySelector(".input_3");
// replace message
const login_form_name_replace=document.querySelector(".index-div:nth-child(2) .index-div__clmn:nth-child(1) .index-idv__clmn__text");
const login_form_email_replace=document.querySelector(".index-div:nth-child(2) .index-div__clmn:nth-child(2) .index-idv__clmn__text");
const login_form_age_replace=document.querySelector(".index-div:nth-child(2) .index-div__clmn:nth-child(3) .index-idv__clmn__text");
// const login_form_name=document.querySelector(".index-div:nth-child(2) .index-div__clmn:nth-child(4) .index-div__clmn__input");
const form_submit=document.querySelector(".index-div__clmn-submit .submit_1");
const form_resubmit=document.querySelector(".index-div__clmn-resubmit .submit_2");
// local page Key
const KEY_NAME="user_name";
const KEY_EMAIL="user_email";
const KEY_AGE="user_age";
// local page Key
const saving_name=localStorage.getItem(`KEY_NAME`);
const saving_email=localStorage.getItem(`KEY_EMAIL`);
const saving_age=localStorage.getItem(`KEY_AGE`);
// add & remove class
const DISPLAY_HIDDEN="display-hidden";
const DISPLAY_INHERIT="display-inherit";

function onSubmitClick(prevent){
    prevent.preventDefault();
    // 버튼에 있는 값을 임시변수에 저장
    const instance_name=login_form_name.value;
    const instance_email=login_form_email.value;
    const instnace_age=login_form_age.value;
    console.log(instance_email);
    // 그리고 버튼 안보이게
    login_form_name.classList.add(DISPLAY_HIDDEN);
    login_form_email.classList.add(DISPLAY_HIDDEN);
    login_form_age.classList.add(DISPLAY_HIDDEN);
    // 임시변수에 저장한 값을 localStorage로 저장
    localStorage.setItem(`KEY_NAME`,instance_name);
    localStorage.setItem(KEY_AGE,instnace_age);
    // 해당 자리에 대체 메세지 프린트 by function
    replace_from_input_to_name(instance_name);
    replace_from_input_to_email(instance_email);
    replace_from_input_to_age(instnace_age);
}

if(saving_name===null){
    login_form_name.classList.remove(DISPLAY_HIDDEN);
    login_form_email.classList.remove(DISPLAY_HIDDEN);
    login_form_age.classList.remove(DISPLAY_HIDDEN);
    form_submit.classList.remove(DISPLAY_HIDDEN);
    form_submit.addEventListener("submit", onSubmitClick);
} else {
    // 해당 자리에 대체 메세지 프린트 by function
    replace_from_input_to_name(saving_name);
    replace_from_input_to_email(saving_name);
    replace_from_input_to_age(saving_name);
}

function replace_from_input_to_name(){
    login_form_name_replace.innerHTML="Hi";
    login_form_name_replace.classList.remove(DISPLAY_HIDDEN);
}
function replace_from_input_to_email(){
    login_form_email_replace.innerHTML="hello";
    login_form_email_replace.classList.remove(DISPLAY_HIDDEN);
}
function replace_from_input_to_age(){
    login_form_age_replace.innerHTML="nice";
    login_form_age_replace.classList.remove(DISPLAY_HIDDEN);
}





