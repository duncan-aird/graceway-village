gv_input = this;
var binding = oSelectDialogTypes.getBinding("items");
var value = "";
var filter = new sap.ui.model.Filter("DESCRIPTION", "Contains", value);

binding.filter([filter]);
oSelectDialogTypes.open();