
let outer=document.querySelector("#outer");
let inner=document.querySelector("#inner");
let click=0;
let move = () => {
    inner.style.backgroundImage = "url('worried.png')";
};

let mouseleave=()=>{
    inner.style.backgroundImage="url('smile.png')";
};

let clicked=()=>{
    inner.style.backgroundImage="url('loose.jpg')";
    click++;
    if(click>4){
        inner.style.backgroundImage="url('beaten.png')";
    }

};


outer.addEventListener("mouseenter",move);
outer.addEventListener("mouseleave",mouseleave);
outer.addEventListener("click",clicked);





