function onChange(control, oldValue, newValue, isLoading) {
    // Verifica se o formulário está carregando ou se o novo valor está vazio
    if (isLoading || newValue == '') {
        return; // Sai da função para evitar processamento desnecessário
    }

    // Recupera o valor de um campo no formulário chamado 'example_field'
    var exampleField = g_form.getValue('example_field');

    // Define links fictícios com base nos valores possíveis do campo
    var tutorialLinks = {
        'option1': 'https://example.com/tutorial1',
        'option2': 'https://example.com/tutorial2',
        'option3': 'https://example.com/tutorial3',
        'option4': 'https://example.com/tutorial4'
    };

    // Verifica se o valor do campo corresponde a uma das opções do tutorialLinks
    if (tutorialLinks[exampleField]) {
        // Pega uma mensagem base localizada de forma assíncrona
        getMessage('base_message', function(baseMessage) {
            // Pega o texto do link de forma assíncrona
            getMessage('access_tutorial', function(linkMessage) {
                // Cria um link HTML usando o texto do link e o URL correspondente
                var link = '<b><a href="' + tutorialLinks[exampleField] + '" style="color: blue; text-decoration: underline; font-weight: bold;" target="_blank">' + linkMessage + '</a></b>';

                // Combina a mensagem base com o link para formar o texto completo
                var message = baseMessage + ' ' + link;

                // Exibe a mensagem na interface em uma janela modal
                spModal.alert(message);
            });
        });
    }

// Mensagens de exemplo para salvar na tabela Messages [sys_ui_message]
// Chave: base_message	
// Mensagem: Olá! Confira as informações no tutorial relacionado ao assunto selecionado.
// Chave: access_tutorial	
// Mensagem: Clique aqui para acessar o tutorial.

// Saída de exemplo: Olá! Confira as informações no tutorial relacionado ao assunto selecionado. Clique aqui para acessar o tutorial

}
