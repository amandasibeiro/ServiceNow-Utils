(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var state = current.state;
    var end_date = current.end_date;
    var data_negociada = current.u_data_entrega;

    if (state == 2 || state == -2 || state == -3 || state == 3 || state == 4) {

        if (end_date > data_negociada) {

            current.u_data_entrega = '';
            current.u_justificativa = '';
        }
    }

})(current, previous);