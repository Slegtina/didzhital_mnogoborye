// const isMobile = {
//     Android: function(){
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function(){
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function(){
//         return navigator.userAgent.match(/iOS|iPad|iPod/i);
//     },
//     Opera: function(){
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function(){
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function(){
//         return(
//             isMobile.Android()||
//             isMobile.BlackBerry()||
//             isMobile.iOS()||
//             isMobile.Opera()||
//             isMobile.Windows()
//         );
//     }
// };
// if (isMobile.any()) {
//    document.body.classList.add('_touch'); 
// }
// else{
//     document.body.classList.add('_pc'); 
// }


function toggle_menu_list() {
    document.getElementById("menu_list").classList.toggle("show");
}
// window.onclick = function(event) {
//     if (!event.target.matches('.header_burger')) {
//         document.getElementById("menu_list").classList.remove("show");
//     }
// }


function toggle_menu_link() {
    document.getElementById("menu_sub_list").classList.toggle("show");
    document.getElementById("create-line").classList.toggle("show");
    document.getElementById("menu_sub_list_inline").classList.toggle("expand");
}
function toggle_menu_link_two() {
    document.getElementById("menu_sub_list").classList.toggle("show");
    document.getElementById("create-line").classList.toggle("show");
    document.getElementById("menu_sub_list_inline_two").classList.toggle("expand");
}

function toggle_header_search() {
    document.getElementById("search").classList.toggle("show");
    document.getElementById("header_list").classList.toggle("no_show");
}

// window.onclick = function(event) {
//     if (!event.target.matches('.header_burger')) {
//         document.getElementById("menu_sub_list").classList.remove("show");
//     }
// }