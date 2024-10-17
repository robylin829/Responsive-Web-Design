//開啟選單
document.getElementById('menu-icon').addEventListener('click', function(){
    const menu=document.getElementById("menu") //find html menu id
    menu.classList.toggle("translate-x-full")
}
);

//開啟選單
document.getElementById('close').addEventListener('click', function(){
    const menu=document.getElementById("menu") //find html menu id
    menu.classList.toggle("transalte-x-full")
}
);