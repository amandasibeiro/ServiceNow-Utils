function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    var valorCampo = g_form.getValue("work_code");
    var regex = /^12[0-9]{6}$/;

    if (regex.test(valorCampo)) {
        // O campo contém somente números com no máximo 8 dígitos e deve começar com o número "12"

    } else {
        g_form.clearValue("work_code");
        getMessage("Only numbers, maximum 8. It should start with 12") 
        g_form.showFieldMsg('work_code', 'Only numbers!');
        ;
    }
}

// Catalog Client Script 
