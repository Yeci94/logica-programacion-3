
        function calcularFactorial(num) {
            if (num < 0) return "El factorial no está definido para números negativos.";
            let factorial = 1;
            for (let i = 1; i <= num; i++) {
                factorial *= i;
            }
            return factorial;
        }

        function solicitarNumero() {
            let input = prompt("Por favor, introduce un número:");

            //
            if (input === null) {
                return; 
            }

            let numero = Number(input);

            if (isNaN(numero) || !Number.isInteger(numero)) {
                alert("Error: Debes introducir un número entero.");
                solicitarNumero(); 
            } else {
                let resultado = calcularFactorial(numero);
                console.log(`El factorial de ${numero} es: ${resultado}`);
                document.getElementById('result').textContent = `El factorial de ${numero} es: ${resultado}`;
            }
        }

        solicitarNumero();