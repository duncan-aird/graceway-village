function arrayMove(arr, fromPos, toPos) {
    while (fromPos < 0) {
        fromPos += arr.length;
    }
    while (toPos < 0) {
        toPos += arr.length;
    }
    if (toPos >= arr.length) {
        var k = toPos - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(toPos, 0, arr.splice(fromPos, 1)[0]);
}

function resequence(table) {
    var model = table.getModel().oData;
    console.log(model);
    for (i = 0; i < model.length; i++) {
        model[i].SEQUENCE_NO = ("00000" + (i + 1)).slice(-5);
    }

}
function generateID() {

    var d = new Date().getTime();
    return "$" + d;

}
