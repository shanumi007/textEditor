let txtAra = document.querySelector("#textEnter");
let p = document.querySelector("p");

let frmPara = document.querySelector("#lower");
frmPara.addEventListener("submit", function(event) {
    event.preventDefault();
    let backendPara = txtAra.value;
    p.innerText = backendPara;
    console.log(backendPara);
    txtAra.value ="";
});

txtAra.addEventListener("input", function() {
    p.innerText = this.value;
});
txtAra.addEventListener("click", function() {
    this.value = p.innerText;
});
