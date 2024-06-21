var context = oEvent.oSource.getBindingContext();  

    var template = context.getObject();
    modeloPageTemplate.setData(template);
    var where = { "HEADER_ID": template.HEADER_ID};

    var options = {
        parameters: {
            "where": JSON.stringify(where)
        }
    };

    apigetTemplateQuestions(options);
    apigetTemplatePossAns(options);
    oApp.to(oPageTemplate);