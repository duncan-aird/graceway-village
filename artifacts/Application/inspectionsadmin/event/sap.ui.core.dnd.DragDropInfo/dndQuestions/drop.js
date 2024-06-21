var oDraggedControl = oEvent.getParameter("draggedControl");
var oDroppedControl = oEvent.getParameter("droppedControl");
var oDraggedContext = oDraggedControl.getBindingContext();
var oDroppedContext = oDroppedControl.getBindingContext();

if (!oDraggedContext && !oDroppedContext) return;

var oDraggedData = oDraggedContext.getObject();
var oDroppedData = oDroppedContext.getObject();

var indexDrag = 0;
var indexDrop = 0;

$.each(modeloTableQuestions.oData, function(i, data) {
    if (data.QUESTION_ID === oDraggedData.QUESTION_ID) indexDrag = i;
    if (data.QUESTION_ID === oDroppedData.QUESTION_ID) indexDrop = i;
});

arrayMove(modeloTableQuestions.oData, indexDrag, indexDrop);

resequence(oTableQuestions);

modeloTableQuestions.refresh();
