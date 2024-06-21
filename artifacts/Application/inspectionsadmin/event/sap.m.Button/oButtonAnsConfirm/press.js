var question = modeloDialogPossibleAnswers.oData;
ModelData.Delete(oModelArrayPossAns, ["HEADER_ID", "QUESTION_ID"], [question.HEADER_ID, question.QUESTION_ID]);

var theseAnswers = JSON.parse(JSON.stringify(modeloTablePossibleAnswers.oData));

ModelData.AddArray(oModelArrayPossAns, theseAnswers);


oDialogPossibleAnswers.close();
