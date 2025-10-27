

function somar() {
  // pega os valores digitados
    const num1 = Number(document.getElementById('num1').value);
      const num2 = Number(document.getElementById('num2').value);

        // validação básica
          if (isNaN(num1) || isNaN(num2)) {
              document.getElementById('resultado').innerText = "Por favor, digite dois números válidos.";
                  return;
                    }

                      // faz a soma
                        const soma = num1 + num2;

                          // mostra o resultado na tela
                            document.getElementById('resultado').innerText = `A soma entre ${num1} e ${num2} é igual a ${soma}.`;
                            }