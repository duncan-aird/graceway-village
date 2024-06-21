var itemsSelected = oTableQuestions.getSelectedItems();


var confirmDeleteMessage = "Delete these " + itemsSelected.length + " questions?";
jQuery.sap.require("sap.m.MessageBox");
sap.m.MessageBox.confirm(confirmDeleteMessage, {
    actions: ["Yes", "No"],
    onClose: function (oEvent) {
        if (oEvent === "Yes") {
            for (i = 0; i < itemsSelected.length; i++) {
                var item = itemsSelected[i];
                var context = item.getBindingContext();
                var headerId = context.getProperty("HEADER_ID");
                var questId = context.getProperty("QUESTION_ID");
                ModelData.UpdateField(oTableQuestions, ["HEADER_ID", "QUESTION_ID"], [headerId, questId], "QUESTION_ID", "DELETE");
                ModelData.Delete(oModelArrayPossAns, ["HEADER_ID", "QUESTION_ID"], [headerId, questId])

            }
            ModelData.Delete(oTableQuestions, "QUESTION_ID", "DELETE");
            resequence(oTableQuestions);
            oTableQuestions.removeSelections();
            modeloTableQuestions.refresh();
        }
    }
});
