function enableReceipt() {
    let chosenReceipt = $('input[name=receipt]:checked').val();

    if (chosenReceipt === "三聯式") {

        $('#receipt').slideDown(300);
        // $('#receipt').addClass("receiptGrid");
        $('#receipt').css("display", "grid");
    }
    else {
        $('#receipt').slideUp(200);
    }
}

$('input[name=receipt]').bind("click", enableReceipt);

$('#twzipcode').twzipcode();