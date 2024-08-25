(function executeRule(current, previous /*null when async*/) {

    // Cria um novo objeto GlideRecord para interagir com a tabela 'sc_task' (tasks de requisição de serviço)
    var gr = new GlideRecord('sc_task');
  
    // Adiciona uma query encoded com múltiplas condições
    // 'state!=9' -> Exclui tasks com estado 9 (por exemplo, "Cancelled")
    // 'state!=10' -> Exclui tasks com estado 10 (por exemplo, "Closed")
    // 'stateISNOTEMPTY' -> Inclui tasks onde o estado não está vazio
    // 'parent.request_item' -> Inclui tasks que estão relacionadas a um item de requisição
    // 'parent=' + current.getUniqueValue() -> Filtra tasks que têm como pai o registro atual (task principal)
    gr.addEncodedQuery('state!=9^state!=10^stateISNOTEMPTY^parent.request_item^parent=' + new String(current.getUniqueValue()));

    // Executa a consulta para obter os registros que atendem à query
    gr.query();
    
    // Verifica se há pelo menos um registro retornado pela query
    if(gr.next()) {
        // Atualiza o campo 'assignment_group' da task filha para o mesmo grupo de atribuição da task principal
        gr.assignment_group = current.assignment_group;
        
        // Grava a atualização no banco de dados
        gr.update();
    }
    
})(current, previous);
