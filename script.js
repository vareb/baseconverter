const decInput = document.getElementById("dec");
const hexInput = document.getElementById("hex");
const binInput = document.getElementById("bin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.addEventListener("input", function (e) {
        let value = e.target.value;
        console.log(e.target.name + ":" + value);
        switch (e.target.name) {
            case "dec":
              if (!isNaN(parseInt(decInput.value,10))) {
                hexInput.value = parseInt(decInput.value, 10).toString(16).toUpperCase();
                binInput.value = parseInt(decInput.value, 10).toString(2);
              } else {
                hexInput.value = "";
                binInput.value = "";
              }
              break;
          
            case "hex":
              if (!isNaN(parseInt(hexInput.value, 16))) {
                decInput.value = parseInt(hexInput.value, 16).toString(10);
                binInput.value = parseInt(hexInput.value, 16).toString(2);
              } else {
                decInput.value = "";
                binInput.value = "";
              }
              break;
          
            case "bin":
              if (!isNaN(parseInt(binInput.value, 2))) {
                decInput.value = parseInt(binInput.value, 2).toString(10);
                hexInput.value = parseInt(binInput.value, 2).toString(16).toUpperCase();
              } else {
                decInput.value = "";
                hexInput.value = "";
              }
              break;
          }
    });
}

function Clear() {
    hexInput.value = "";
    binInput.value = "";
    decInput.value = "";
}
 