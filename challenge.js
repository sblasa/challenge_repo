var textStuff = document.getElementById("text-field"),
    prButton = document.getElementById("p-button"),
    printStuff = document.getElementById("show-in-here");

    prButton.addEventListener("click", function(){
        printStuff.innerHTML = textStuff.value;

    });

    