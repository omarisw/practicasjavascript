// codificando con javascript
document.write("Hola crayola")

// Variables
var1 = 10.50; var2 = 20.55;
linebreaker = "<br/>"
document.write( " ", var1+var2, linebreaker) // nos da el resultado de 31.05
// Divisiones y multiplicaciones de var
document.write("Multiplicaciones", var1 * var2 , linebreaker)
document.write("Divisiones ", var1/var2, linebreaker)
function diHola(){
    alert("Hola mundo por 2")
}

// Global var
var global_variable = "Lo que el viento se llevó";
function revisarvarlocal(){
    var local = "local";
    alert(local)
}

// OPERACIONES TERNARIAS
document.write("((a > b) ? 100: 200)")
result = (var1 > var2) ? 100: 200;
document.write(result, "Q");



// TODOS: cual es la diferencia entre document.write y document.inher.html