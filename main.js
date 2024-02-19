const CalcTrianguloArea = () => {
    const a = parseFloat(prompt("Introduzca la medida de la altura"));
    const b = parseFloat(prompt("Introduzca la medida de la base"));
    const p = document.getElementById(Triangulo);

    p.innerText = "Su área es "${b * a / 2}"cm^2";
    
}

const CalcTrianguloPerimetro = () => {
    const a = parseFloat(prompt("Introduzca la medida del lado 1"));
    const b = parseFloat(prompt("Introduzca la medida del lado 2"));
    const c = parseFloat(prompt("Introduzca la medida del lado 3"));
    const p = document.getElementById(Triangulo);

    p.innerText = "Su perímetro es "${a + b + c}"cm";
    
}

const CalcCuadradoArea = () => {
    const a = parseFloat(prompt("Introduzca la medida del lado"));
    const p = document.getElementById(Cuadrado)

    p.innerText = "Su área es "${a * a}"cm^2";

}

const CalcCuadradoPerimetro = () => {
    const a = parseFloat(prompt("Introduzca la medida del lado"));
    const p = document.getElementById(Cuadrado)

    p.innerText = "Su perímetro es "${4 * a}"cm";
    
}

const CalcRectanguloArea = () => {
    const a = parseFloat(prompt("Introduzca la medida de la altura"));
    const b = parseFloat(prompt("Introduzca la medida de la base"));
    const p = document.getElementById(Rectangulo)

    p.innerText = "Su área es "${b * a}"cm^2";

}

const CalcRectanguloPerimetro = () => {
    const a = parseFloat(prompt("Introduzca la medida de la altura"))
    const b = parseFloat(prompt("Introduzca la medida de la base"))
    const p = document.getElementById(Rectangulo)

    p.innerText = "Su perímetro es "${2 * a + 2 * b}"cm";

}

const CalcCirculoArea = () =>{
    const a = parseFloat(prompt("Introduzca la medida del diámetro"))
    const p = document.getElementById(Circulo)

    p.innerText = "Su área es "${π * r^2}"cm^2";
    
}

const CalcCirculoPerimetro = () => {
    const a = parseFloat(prompt("Introduzca la medida del radio"))
    const p = document.getElementById(Circulo)

    p.innerText = "Su perímetro es "${a * π}"cm";

}