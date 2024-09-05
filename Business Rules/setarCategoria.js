(function executeRule(current, previous /*null when async*/ ) {

    var gr = new GlideRecord('sc_cat_item_category');
    gr.addEncodedQuery('sc_cat_item=' + current.u_record_producer.sys_id);
    gr.query();
	
    if (gr.next()) {
        var category = gr.getValue('sc_category');
        current.u_category = category;
    }
})(current, previous);
