// Definir una función llamada iniciarCalculadora
function iniciarCalculadora() {
    // Inicializar una variable para controlar el bucle
    let continuar = true

    // Iniciar un bucle que continuará mientras la variable 'continuar' sea true
    while (continuar) {
        // Obtener la operación del usuario mediante un cuadro de diálogo
        let operacion = prompt("Ingrese la operación (+, -, *, /):")

        // Obtener los operandos del usuario mediante cuadros de diálogo y convertirlos a números de punto flotante
        let num1 = parseFloat(prompt("Ingrese el primer número:"))
        let num2 = parseFloat(prompt("Ingrese el segundo número:"))

        // Realizar la operación seleccionada por el usuario y mostrar el resultado
        switch (operacion) {
            case '+':
                alert(`Resultado: ${num1 + num2}`)
                break
            case '-':
                alert(`Resultado: ${num1 - num2}`)
                break
            case '*':
                alert(`Resultado: ${num1 * num2}`)
                break
            case '/':
                // Verificar si el divisor (num2) no es cero antes de realizar la división
                if (num2 !== 0) {
                    alert(`Resultado: ${num1 / num2}`)
                } else {
                    alert("Error: No se puede dividir por cero.")
                }
                break
            default:
                // Mostrar un mensaje de error si la operación no es válida
                alert("Operación no válida.")
        }

        // Preguntar al usuario si desea realizar otra operación y convertir la respuesta a minúsculas
        let respuesta = prompt("¿Quieres realizar otra operación? (si/no)").toLowerCase()

        // Actualizar la variable 'continuar' según la respuesta del usuario
        continuar = respuesta === 'si'
    }
}
