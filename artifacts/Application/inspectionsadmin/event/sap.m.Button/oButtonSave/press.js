// Should replace this with a Server Script API
// Using straight up Table APIs for now
oBusyDialogSaving.open();
var header = modeloPageTemplate.oData;
var whereHeader = { 'HEADER_ID': header.HEADER_ID };

var optionsHeader = {
    parameters: {
        //   "where": JSON.stringify(whereHeader) // Optional 
    },
    data: header
};
var optionsDelete = {
    parameters: {
        "where": JSON.stringify(whereHeader) // Optional 
    }
};
apisaveTemplateHeader(optionsHeader);

// Questions
// The Add New Questions happens in the Ajax Success of the Delete
apideleteTemplateQuestions(optionsDelete);

// PossibleAnswers
// Also the add new takes place in Ajax Success of Delete
apideleteTemplateAnswers(optionsDelete);
