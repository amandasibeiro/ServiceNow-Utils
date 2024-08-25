function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    // Armazena o valor do campo 'u_campo'
    var campo = g_form.getValue('u_campo');

    // Verifica se o valor do campo é 'Yes'
    if (campo == 'Yes') {
        // Limpa o valor do campo
        g_form.clearValue('u_campo', true);

        // Pega a primeira mensagem de forma assíncrona
        getMessage('Orientamos que seu chamado seja registrado através', function(part1) {
            // Pega a mensagem do link de forma assíncrona
            getMessage('deste link', function(linkMessage) {
                // Cria o link HTML com a mensagem recuperada
                var link = '<a href="https://developer.servicenow.com/dev.do#!/home" target="_blank">' + linkMessage + '</a>';

                // Pega a última parte da mensagem de forma assíncrona
                getMessage('para o time designado', function(part3) {
                    // Exibe a mensagem completa com o link
                    g_form.addErrorMessage(part1 + ' ' + link + ' ' + part3);
                });
            });
        });
    }
}
