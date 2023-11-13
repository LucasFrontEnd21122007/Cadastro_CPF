function validarCPF() {
    var cpf = document.getElementById('cpf').value;
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) {
        document.getElementById('resultado').innerText = 'CPF inválido. O CPF deve conter 11 dígitos.';
        return;
    }

    var soma = 0;
    var resto;

    for (var i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        document.getElementById('resultado').innerText = 'CPF inválido.';
        return;
    }

    soma = 0;

    for (var i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        document.getElementById('resultado').innerText = 'CPF inválido.';
        return;
    }

    document.getElementById('resultado').innerText = 'CPF válido.';
}
