function enableReceipt() {
    let chosenReceipt = $('input[name=receipt]:checked').val();

    if (chosenReceipt === "三聯式") {
        $('#receiptNumber')[0].disabled = false;
    }
    else {
        $('#receiptNumber')[0].disabled = true;
    }
}

$('input[name=receipt]').bind("click", enableReceipt);

