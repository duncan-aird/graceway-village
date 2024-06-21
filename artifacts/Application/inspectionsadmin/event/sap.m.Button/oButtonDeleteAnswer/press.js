var itemsSelected = oTablePossibleAnswers.getSelectedItems();


var confirmDeleteMessage = "Delete these " + itemsSelected.length + " answers?";
jQuery.sap.require("sap.m.MessageBox");
sap.m.MessageBox.confirm(confirmDeleteMessage, {
    actions: ["Yes", "No"],
    onClose: function(oEvent) {
        if (oEvent === "Yes") {
            for (i = 0; i < itemsSelected.length; i++) {
                var item = itemsSelected[i];
                var context = item.getBindingContext();
                var id = context.getProperty("ANSWER_ID");
                ModelData.Delete(oTablePossibleAnswers, "ANSWER_ID", id)

            }
            resequence(oTablePossibleAnswers);
            oTablePossibleAnswers.removeSelections();
            modeloTablePossibleAnswers.refresh();
        }
    }
});
