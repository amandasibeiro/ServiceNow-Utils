var nbTranslations = {
    "02cf1e19c349e2501e0816edd4013104": "CV",
    "0acfda19c3e9e2531e0816edd40131e4": "Ansattforhold",
    "cecfda19c3e9e250130816edd40131e7": "Org.kart",
    "0acfda19c3e9e2501e0816edd40131f7": "Rapporter",
    "8acfda19c3e9e2501e0316edd40131fa": "Tid og fravær",
    "0ecfda19c3e9e2501e0836edd40131fd": "Nyansettelse",
    "8ecf1e19c3e9e2501e0816edd4033100": "Medarbeidersamtale og Mål",
    "0acf1e19c3e9e2501e0816edd4013129": "HMS-opplæring"
};

for (var docId in nbTranslations) {
    var existing = new GlideRecord('sys_translated_text');
    existing.addQuery('documentkey', docId);
    existing.addQuery('language', 'nb');
    existing.addQuery('fieldname', 'u_name');
    existing.addQuery('tablename', 'u_subcategory');
    existing.query();

    if (existing.next()) {
        existing.value = nbTranslations[docId];
        existing.update();
        gs.info('Tradução NB atualizada: ' + docId + ' -> ' + nbTranslations[docId]);
    } else {
        var trans = new GlideRecord('sys_translated_text');
        trans.initialize();
        trans.documentkey = docId;
        trans.language = 'nb';
        trans.fieldname = 'u_name';
        trans.tablename = 'u_subcategory';
        trans.value = nbTranslations[docId];
        trans.insert();
        gs.info('Tradução NB inserida: ' + docId + ' -> ' + nbTranslations[docId]);
    }
}
