function myFunction() {
    var element = document.getElementById("toggle");
    element.classList.toggle("menu-active");
}


var underMenu = ["HOME", "ABOUT", "SERVICES"];

function transitionHome() {
    document.getElementById("transitionText").innerHTML = underMenu[0];  
}
function transitionAbout() {
    document.getElementById("transitionText").innerHTML = underMenu[1];  
}
function transitionServices() {
    document.getElementById("transitionText").innerHTML = underMenu[2];  
}

window.onload = () => {
    const  transition_el = document.querySelector(".transition")
    const anchors = document.querySelectorAll("a");

    setTimeout(() => {
        transition_el.classList.remove("is-active");

   
    }, 700);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        
    anchor.addEventListener("click", e => {
        e.preventDefault();
        let target = e.target.href;

        transition_el.classList.add("is-active");

        setTimeout(() => {
            window.location.href = target;
        }, 700)
    });
    }


    

}




