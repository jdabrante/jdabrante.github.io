let input = document.getElementById("input");


input.addEventListener("keypress", function(event){
    const element1 = document.getElementById("table-multiply");
    const element2 = document.getElementById("table-adding");
    const element3= document.getElementById("table-split");

    let value = document.getElementById("input").value;
    if (event.key === "Enter" ) {
        if (element1.childNodes.length === 0) {
            element1.style.height = "500px";
            element2.style.height = "500px";
            element3.style.height = "500px";
            multiply(value);
            adding(value);
            split(value);
        } else {
            element1.style.height = "1px";
            element2.style.height = "1px";
            element3.style.height = "1px";
            element1.innerHTML = "";
            element2.innerHTML = "";
            element3.innerHTML = "";
            element1.addEventListener("transitionend", () => {
                element1.innerHTML = "";
                element2.innerHTML = "";
                element3.innerHTML = "";
                let value = document.getElementById("input").value;
                multiply(value);
                adding(value);
                split(value);
                element1.style.height = "500px";
                element2.style.height = "500px";
                element3.style.height = "500px";

            })
            
        }
    }
});



function multiply(value) {
    let element = document.getElementById("table-multiply");
        for (let i=0; i <= 10; i++) {
            let calculate = value * i;
            element.innerHTML += `<p>${i} x ${value} = ${calculate}</p>`;
        }
    }

function adding(value) {
    let element = document.getElementById("table-adding");
    let i = 0;
    while (i <= 10) {
        let calculate = value + i;
        element.innerHTML += `<p>${i} + ${value} = ${calculate}</p>`;
        i++;
    }
}

function split(value) {
    let element = document.getElementById("table-split");
    let i = 1;
    do {
        let calculate = value / i;
        
        element.innerHTML += `<p>${i} : ${value} = ${calculate.toFixed(2)}</p>`;
        i++
    } while ( i <= 10 ); 
}