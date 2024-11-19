import * as core from '@actions/core';

try {
  // Obtendo um valor de entrada
  const inputValue = core.getInput('number', { required: true });
  core.info(`Entrada recebida: ${inputValue}`);

  // Convertendo a entrada para número
  const numberValue = parseFloat(inputValue);

  // Validando se é um número
  if (isNaN(numberValue)) {
    core.setFailed('O valor de entrada não é um número válido.');
  } else {
    core.info('A entrada é um número válido.');
    core.debug(`Número analisado: ${numberValue}`); // Este log é exibido apenas se as ações forem executadas no modo de depuração

    // Definindo um output
    core.setOutput('isValid', true);
    core.notice('Processo concluído com sucesso!');
  }
} catch (error) {
  // Lidando com erros
  core.error('Ocorreu um erro inesperado.');
  core.setFailed((error as Error).message);
}
