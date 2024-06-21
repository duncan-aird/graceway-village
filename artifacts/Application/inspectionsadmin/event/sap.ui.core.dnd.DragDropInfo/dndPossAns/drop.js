var oDraggedControl = oEvent.getParameter("draggedControl");
var oDroppedControl = oEvent.getParameter("droppedControl");

var oDraggedContext = oDraggedControl.getBindingContext();
var oDroppedContext = oDroppedControl.getBindingContext();

if (!oDraggedContext && !oDroppedContext) return;

var oDraggedData = oDraggedContext.getObject();
var oDroppedData = oDroppedContext.getObject();
var indexDrag = 0;
var indexDrop = 0;

$.each(modeloTablePossibleAnswers.oData, function(i, data) {
    if (data.ANSWER_ID === oDraggedData.ANSWER_ID) indexDrag = i;
    if (data.ANSWER_ID === oDroppedData.ANSWER_ID) indexDrop = i;
});

arrayMove(modeloTablePossibleAnswers.oData, indexDrag, indexDrop);

resequence(oTablePossibleAnswers);

modeloTablePossibleAnswers.refresh();
