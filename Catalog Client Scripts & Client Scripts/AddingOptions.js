function onChange(control, oldValue, newValue, isLoading) {
    // Verifica se o formulário está carregando ou se o novo valor está vazio.
    if (isLoading || newValue == '') {
        return; // Sai da função se estiver carregando ou se o novo valor for vazio.
    }

    // Obtém o valor do campo 'u_category' (categoria) do formulário.
    var category = g_form.getValue('u_category');
  
    // Verifica se a categoria selecionada é 'phone'.
    if (category == 'phone') {
        // Adiciona a opção 'branch' com o valor '100' à lista suspensa 'u_subcategory'.
        getMessage('branch', function(msg) {
            g_form.addOption('u_subcategory', '100', msg, 1);
        });
        // Adiciona a opção 'others' com o valor '101' à lista suspensa 'u_subcategory'.
        getMessage('others', function(msg) {
            g_form.addOption('u_subcategory', '101', msg, 2);
        });

    // Verifica se a categoria selecionada é 'infrastructure'.
    } else if (category == 'infrastructure') {
        // Adiciona a opção 'server' à lista suspensa 'u_subcategory'.
        getMessage('server', function(msg) {
            g_form.addOption('u_subcategory', 'server', msg, 1);
        });
        // Adiciona a opção 'networks' à lista suspensa 'u_subcategory'.
        getMessage('networks', function(msg) {
            g_form.addOption('u_subcategory', 'networks', msg, 2);
        });
        // Adiciona a opção 'database' à lista suspensa 'u_subcategory'.
        getMessage('database', function(msg) {
            g_form.addOption('u_subcategory', 'database', msg, 3);
        });

    // Caso a categoria seja diferente de 'phone' ou 'infrastructure'.
    } else {
        // Limpa todas as opções da lista suspensa 'u_subcategory'.
        g_form.clearOptions('u_subcategory');
        // Adiciona a opção '-- None --' como padrão, sem valor.
        getMessage('-- None --', function(msg) {
            g_form.addOption('u_subcategory', '', msg, 0);
        });
    }
}
