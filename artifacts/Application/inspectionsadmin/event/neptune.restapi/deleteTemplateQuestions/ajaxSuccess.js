var questions = modeloTableQuestions.oData;
if (questions.length > 0) {
    var optionsQuestions = {
        parameters: {
        },
        data: questions
    };

    apisaveTemplateQuestions(optionsQuestions);
}
