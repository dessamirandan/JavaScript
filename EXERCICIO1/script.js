
        // ==================== CALCULADORA JAVASCRIPT SIMPLES ====================
        // Exercício JSIA-A01 - InfinitySchool

        function executarCalculadora() {
            console.log("CALCULADORA JAVASCRIPT SIMPLES");
            console.log("Exercício - InfinitySchool");
            console.log("=".repeat(50));

            // ==================== ENTRADA DE DADOS ====================
            // Solicita o primeiro número ao usuário
            let numero1 = prompt("Digite o primeiro número:");

            // Solicita o segundo número ao usuário
            let numero2 = prompt("Digite o segundo número:");

            // Converte as strings para números
            numero1 = parseFloat(numero1);
            numero2 = parseFloat(numero2);

            console.log(`\n ENTRADA DE DADOS:`);
            console.log(`Primeiro número: ${numero1}`);
            console.log(`Segundo número: ${numero2}`);

            // ==================== OPERAÇÕES ARITMÉTICAS BÁSICAS ====================
            console.log(`\n OPERAÇÕES ARITMÉTICAS BÁSICAS:`);

            // Adição
            let adicao = numero1 + numero2;
            console.log(`${numero1} + ${numero2} = ${adicao}`);

            // Subtração
            let subtracao = numero1 - numero2;
            console.log(`${numero1} - ${numero2} = ${subtracao}`);

            // Multiplicação
            let multiplicacao = numero1 * numero2;
            console.log(`${numero1} × ${numero2} = ${multiplicacao}`);

            // Divisão
                let divisao = numero1 / numero2;
          console.log(`${numero1} ÷ ${numero2} = ${divisao}`);

            // Resto da divisão (módulo)
                let resto = numero1 % numero2;

            // Exibe uma mensagem de sucesso para o usuário
            alert("Calculadora executada! Verifique o console ( F12 ou ) para ver todos os resultados.");
        }


        // Mensagem inicial no console
        console.log("🚀 Calculadora JavaScript carregada!");
        console.log("Clique no botão 'Executar Calculadora' para começar.");
