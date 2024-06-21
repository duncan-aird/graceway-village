var answers = modeloModelArrayPossAns.oData;
if (answers.length > 0) {

    var optionsAnswers = {
        parameters: {
        },
        data: answers
    };
    apisaveTemplatePossAns(optionsAnswers);
}