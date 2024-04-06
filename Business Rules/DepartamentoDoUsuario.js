<<<<<<< HEAD
// Business Rule que roda antes (before), feita para pegar um campo referência da tabela sys_user (caller_id), da tabela de incidentes (incident) e mudar o valor do assigned_to (referência a tabela sys_user) de acordo com cada Caller pré-definido.

(function executeRule(current, previous /*null when async*/ ) { 

    var grUser = new GlideRecord('sys_user'); // Pega a tabela de sys_user utilizando o GlideRecord

    if (grUser.get(current.caller_id)) { // O método get() do GlideRecord é usado para obter um registro da tabela com a chave especificada.

        // current.caller_id: Presumivelmente, current é um objeto que representa o registro atual sendo processado pelo script. O campo requested_for é uma referência a um usuário específico associado a este registro.

        // A expressão grUser.get(current.caller_id) tenta obter um registro da tabela 'sys_user' onde a chave corresponde ao valor do campo 'caller_id' no registro atual (tabela de incidentes (incident)). Se o registro for encontrado, o if será verdadeiro e o código dentro do bloco if será executado.

        var department = grUser.getValue('department'); // Obtem o valor específicado 'department' da tabela sys_user (com a variável grUser)

        // Variáveis com as propriedades dos departamentos. É uma boa prática criar propriedades na tabela 'sys_properties' com o value sendo o sys_id do registro do usuário ou nome do departamento, quando utiliza-se sys_id.

        // Rob Woodbyrne (todos os nomes e dados são fictícios)
        var Customer_Support = gs.getProperty('sn_cim.departmentCustomer_Support'); // Utilize o método gs.getProperty('name_da_propriedade')
        var Development = gs.getProperty('sn_cim.departmentDevelopment');

        // David Loo
        var IT = gs.getProperty('sn_cim.departmentIT');
        var Sales = gs.getProperty('sn_cim.departmentSales');

        // Natasha Ingram
        var Finance = gs.getProperty('sn_cim.departmentFinance');
        var HR = gs.getProperty('sn_cim.departmentHR');

        // Rob Phillips
        var Product_Management = gs.getProperty('sn_cim.departmentProduct_Management');
		
        // Variáveis com as propriedades dos usuários:
        var Rob_Woodbyrne = gs.getProperty('sn_cim.sys_userRob_Woodbyrne');
        var David_Loo = gs.getProperty('sn_cim.sys_userDavid_Loo');
        var Natasha_Ingram = gs.getProperty('sn_cim.sys_user_Natasha_Ingram');
        var Rob_Phillips = gs.getProperty('sn_cim.sys_userRob_Phillips');


        // Departamentos designados ao Rob Woodbyrne
        if (department == Customer_Support || department == Development) {

            current.setValue('assigned_to', Rob_Woodbyrne); //Muda o valor do campo 'assigned_to' para o valor armazenado na propriedade da variável 'Rob_Woodbyrne' caso o departamento seja algum dos mencionados na condição.
        }

        // Departamentos designados ao David Loo
        else if (department == IT || department == Sales) {
            current.setValue('assigned_to', David_Loo);
        }

        // Departamentos designados a Natasha Ingram
        else if (department == Finance || department == HR) {
            current.setValue('assigned_to', Natasha_Ingram);
        }

        // Departamentos designados ao Rob Phillips
        else if (department == Product_Management) {
            current.setValue('assigned_to', Rob_Phillips);
        }

    }

})(current, previous);

// Business Rule que roda antes (before), feita para pegar um campo referência da tabela sys_user (caller_id), da tabela de incidentes (incident) e mudar o valor do assigned_to (referência a tabela sys_user) de acordo com cada Caller pré-definido.

(function executeRule(current, previous /*null when async*/ ) { 

    var grUser = new GlideRecord('sys_user'); // Pega a tabela de sys_user utilizando o GlideRecord

    if (grUser.get(current.caller_id)) { // O método get() do GlideRecord é usado para obter um registro da tabela com a chave especificada.

        // current.caller_id: Presumivelmente, current é um objeto que representa o registro atual sendo processado pelo script. O campo requested_for é uma referência a um usuário específico associado a este registro.

        // A expressão grUser.get(current.caller_id) tenta obter um registro da tabela 'sys_user' onde a chave corresponde ao valor do campo 'caller_id' no registro atual (tabela de incidentes (incident)). Se o registro for encontrado, o if será verdadeiro e o código dentro do bloco if será executado.

        var department = grUser.getValue('department'); // Obtem o valor específicado 'department' da tabela sys_user (com a variável grUser)

        // Variáveis com as propriedades dos departamentos. É uma boa prática criar propriedades na tabela 'sys_properties' com o value sendo o sys_id do registro do usuário ou nome do departamento, quando utiliza-se sys_id.

        // Rob Woodbyrne (todos os nomes e dados são fictícios)
        var Customer_Support = gs.getProperty('sn_cim.departmentCustomer_Support'); // Utilize o método gs.getProperty('name_da_propriedade')
        var Development = gs.getProperty('sn_cim.departmentDevelopment');

        // David Loo
        var IT = gs.getProperty('sn_cim.departmentIT');
        var Sales = gs.getProperty('sn_cim.departmentSales');

        // Natasha Ingram
        var Finance = gs.getProperty('sn_cim.departmentFinance');
        var HR = gs.getProperty('sn_cim.departmentHR');

        // Rob Phillips
        var Product_Management = gs.getProperty('sn_cim.departmentProduct_Management');
		
        // Variáveis com as propriedades dos usuários:
        var Rob_Woodbyrne = gs.getProperty('sn_cim.sys_userRob_Woodbyrne');
        var David_Loo = gs.getProperty('sn_cim.sys_userDavid_Loo');
        var Natasha_Ingram = gs.getProperty('sn_cim.sys_user_Natasha_Ingram');
        var Rob_Phillips = gs.getProperty('sn_cim.sys_userRob_Phillips');


        // Departamentos designados ao Rob Woodbyrne
        if (department == Customer_Support || department == Development) {

            current.setValue('assigned_to', Rob_Woodbyrne); //Muda o valor do campo 'assigned_to' para o valor armazenado na propriedade da variável 'Rob_Woodbyrne' caso o departamento seja algum dos mencionados na condição.
        }

        // Departamentos designados ao David Loo
        else if (department == IT || department == Sales) {
            current.setValue('assigned_to', David_Loo);
        }

        // Departamentos designados a Natasha Ingram
        else if (department == Finance || department == HR) {
            current.setValue('assigned_to', Natasha_Ingram);
        }

        // Departamentos designados ao Rob Phillips
        else if (department == Product_Management) {
            current.setValue('assigned_to', Rob_Phillips);
        }

    }

})(current, previous);
