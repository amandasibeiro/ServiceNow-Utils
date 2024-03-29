function onLoad() {
    // Client Script
    var state = g_form.getValue("state");
    var data_negociada = g_form.getValue("u_data_entrega");

    if ((state == 2 || state == -2 || state == -3 || state == 3 || state == 4) && (data_negociada == '')) {

        if (g_user.userID == g_form.getValue('assigned_to')) {
            g_form.setMandatory('u_data_entrega_negociada', true);
            g_form.setReadOnly('u_data_entrega_negociada', false);
            g_form.addInfoMessage('Preencher a Data de entrega.');
        } else {
            g_form.setMandatory('u_data_entrega_negociada', false);
            g_form.setReadOnly('u_data_entrega_negociada', false);
            g_form.addInfoMessage('Solicitar ao coordenador para preencher a data de entrega!');
        }
    }

}