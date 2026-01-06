function forFirstNamedWebsite(){
    const numOne= parseInt(document.getElementById("firstNumber").value)
    const numTwo= parseInt(document.getElementById("secondNumber").value)
    const sum= numOne+numTwo
    document.getElementById("result").textContent= sum;
}