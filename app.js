$(document).ready(function(){
    var acc = document.getElementsByClassName("accordion");
    var i,j;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            for (j = 0; j < acc.length; j++){
                if(acc[j] != this){
                    acc[j].classList.remove("active");
                    if (acc[j].nextElementSibling.style.maxHeight) {
                        acc[j].nextElementSibling.style.maxHeight = null;
                    }
                }
            }
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.style.border = "8px 8px 0px 0px";
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }

    // for click effect on panel blocks

    $(".paneContentMob").click(function(){
        $(this).children("p").toggleClass("firstScreen");
        $(this).toggleClass("pcmOnClick");
        $(this).children("ul").toggleClass("secondScreen");
    });
});