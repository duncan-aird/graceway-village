var template = modeloPageTemplate.oData;
//var questionCount = ("00000" + (modeloTableQuestions.oData.length + 1) * 10).toString().slice(-5);

var newQuest = {
    HEADER_ID: template.HEADER_ID,
    QUESTION_ID: uuidv4(),   //questionCount,
    SEQUENCE_NO: "",
    QUESTION_TEXT: "",
    QUESTION_TYPE: "",
    INACTIVE: false
}
ModelData.Add(oTableQuestions, newQuest);
resequence(oTableQuestions);
modeloTableQuestions.refresh();

var lastItem = oTableQuestions.getItems()[oTableQuestions.getItems().length-1];
setTimeout(function() {
    oPageTemplate.scrollToElement(lastItem);
}, 10);
