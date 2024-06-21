var question = modeloDialogPossibleAnswers.oData;
//var answerCount = ("00000" + (modeloTablePossibleAnswers.oData.length + 1) * 10).toString().slice(-5);

var newAns = {
    HEADER_ID: question.HEADER_ID,
    QUESTION_ID: question.QUESTION_ID,
    ANSWER_ID: uuidv4(), //answerCount,
    SEQUENCE_NO: ""

}
ModelData.Add(oTablePossibleAnswers, newAns);
resequence(oTablePossibleAnswers);
modeloTablePossibleAnswers.refresh();
