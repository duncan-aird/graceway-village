var item = this.getParent();
var context = item.getBindingContext();

var question = context.getObject();
modeloDialogPossibleAnswers.setData(question);
var existingAnswers = ModelData.Find(oModelArrayPossAns, ["HEADER_ID", "QUESTION_ID"], [question.HEADER_ID, question.QUESTION_ID]);
modeloTablePossibleAnswers.setData(existingAnswers);

switch (question.QUESTION_TYPE) {

    case 'Check Box':
        if (existingAnswers.length === 0) {
            var a1 = {
                'HEADER_ID': question.HEADER_ID,
                'QUESTION_ID': question.QUESTION_ID,
                'SEQUENCE_NO': '00001',
                'ANSWER_ID': uuidv4(),
                'ANSWER_TEXT': 'Not Checked'
            };
            ModelData.Add(oTablePossibleAnswers, a1);
            var a2 = {
                'HEADER_ID': question.HEADER_ID,
                'QUESTION_ID': question.QUESTION_ID,
                'SEQUENCE_NO': '00002',
                'ANSWER_ID': uuidv4(),
                'ANSWER_TEXT': 'Checked - OK'
            };
            ModelData.Add(oTablePossibleAnswers, a2);
        }
        oButtonAddAnswer.setEnabled(false);
        oButtonDeleteAnswer.setEnabled(false);
        break;

    case 'Rating':
        if (existingAnswers.length === 0) {
            var a1 = {
                'HEADER_ID': question.HEADER_ID,
                'QUESTION_ID': question.QUESTION_ID,
                'SEQUENCE_NO': '00001',
                'ANSWER_ID': uuidv4(),
                'ANSWER_TEXT': '1',
                'NON_EDITABLE': true
            };
            ModelData.Add(oTablePossibleAnswers, a1);
            var a2 = {
                'HEADER_ID': question.HEADER_ID,
                'QUESTION_ID': question.QUESTION_ID,
                'SEQUENCE_NO': '00002',
                'ANSWER_ID': uuidv4(),
                'ANSWER_TEXT': '5'
            };
            ModelData.Add(oTablePossibleAnswers, a2);
        }
        oButtonAddAnswer.setEnabled(false);
        oButtonDeleteAnswer.setEnabled(false);
        break;
    case 'Slider':
        if (existingAnswers.length === 0) {
            var a1 = {
                'HEADER_ID': question.HEADER_ID,
                'QUESTION_ID': question.QUESTION_ID,
                'SEQUENCE_NO': '00001',
                'ANSWER_ID': uuidv4(),
                'ANSWER_TEXT': '0',
                'NON_EDITABLE': true
            };
            ModelData.Add(oTablePossibleAnswers, a1);
            var a2 = {
                'HEADER_ID': question.HEADER_ID,
                'QUESTION_ID': question.QUESTION_ID,
                'SEQUENCE_NO': '00002',
                'ANSWER_ID': uuidv4(),
                'ANSWER_TEXT': '10'
            };
            ModelData.Add(oTablePossibleAnswers, a2);
        }
        question.NON_SEQUENCABLE = true;
        oButtonAddAnswer.setEnabled(false);
        oButtonDeleteAnswer.setEnabled(false);
        break;
    case 'On/Off Switch':
        if (existingAnswers.length === 0) {
            var a1 = {
                'HEADER_ID': question.HEADER_ID,
                'QUESTION_ID': question.QUESTION_ID,
                'SEQUENCE_NO': '00001',
                'ANSWER_ID': uuidv4(),
                'ANSWER_TEXT': 'No'
            };
            ModelData.Add(oTablePossibleAnswers, a1);
            var a2 = {
                'HEADER_ID': question.HEADER_ID,
                'QUESTION_ID': question.QUESTION_ID,
                'SEQUENCE_NO': '00002',
                'ANSWER_ID': uuidv4(),
                'ANSWER_TEXT': 'Yes'
            };
            ModelData.Add(oTablePossibleAnswers, a2);
        }
        oButtonAddAnswer.setEnabled(false);
        oButtonDeleteAnswer.setEnabled(false);
        break;
    case 'Toggle Button':
        if (existingAnswers.length === 0) {
            var a1 = {
                'HEADER_ID': question.HEADER_ID,
                'QUESTION_ID': question.QUESTION_ID,
                'SEQUENCE_NO': '00001',
                'ANSWER_ID': uuidv4(),
                'ANSWER_TEXT': 'No'
            };
            ModelData.Add(oTablePossibleAnswers, a1);
            var a2 = {
                'HEADER_ID': question.HEADER_ID,
                'QUESTION_ID': question.QUESTION_ID,
                'SEQUENCE_NO': '00002',
                'ANSWER_ID': uuidv4(),
                'ANSWER_TEXT': 'Yes'
            };
            ModelData.Add(oTablePossibleAnswers, a2);
        }
        oButtonAddAnswer.setEnabled(false);
        oButtonDeleteAnswer.setEnabled(false);
        break;

    default:
        oButtonAddAnswer.setEnabled(true);
        oButtonDeleteAnswer.setEnabled(true);
        break;

}
// Single Field Sort
var oSorter = new sap.ui.model.Sorter("SEQUENCE_NO", false, false);
var binding = oTablePossibleAnswers.getBinding("items");
binding.sort(oSorter);
oDialogPossibleAnswers.open();
