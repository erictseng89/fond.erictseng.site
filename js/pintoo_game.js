$(function () {
    // 設定拼圖隨機位置
    function init() {
        for (i=1;i<=6;i++) {
            r=Math.floor(60*Math.random());
            k=Math.floor(45*Math.random());
            $('#ans0'+ i).css({'left':r+'%', 'top':k+'%'});
        }
    }
    init();
    
    var ansArray = new Array(6);
    var ansTotal;
    $(".ans").draggable({
        containment: '#gameBox', //限制在父系框架
        // distance: 20,  //移動20px 拖曳
        snap: '.table_cell', //內外徑吸附
        // revert: 'invalid',
        cursor: 'pointer' //滑鼠樣式
    });
    $(".table_cell,#gameBox").droppable({
        accept: ".ans",
        drop: function (event, ui) {
            var Id = ui.draggable.attr("id");
            var draggableId = "#" + Id;
            if (ui.draggable.attr("data-ans") == $(this).attr('data-ans')) {
                showMsg(draggableId, "");
                ansArray[Id] = 1;
                console.log(draggableId, "");
            } else {
                showMsg(draggableId, "X");
                ansArray[Id] = 0;
                console.log(draggableId, " X");
            }
            finish();
        }
    });

    function showMsg(draggableId, ans) {
        $(draggableId).find('span').html(ans);
    }
    // 判斷是否完成拼圖的函數
    function finish (event) {
        ansTotal = 0;
        console.log(ansArray);
        for (var i = 0; i < ansArray.length; i++) {
            var num = "ans0" + (i + 1);
            if (ansArray[num] == "1") {
                ansTotal += 1;
                // console.log("fail: " + ansArray[num]);
            }
        }
        if (ansTotal == "6") {
            alert("pass");
            $('#finished').css('visibility', 'visible');
        }
    }
    // 設定重新開始按鈕
    $('#restart').click(function(){
        $('#finished').css('visibility', 'hidden');
        init();
    });

    // $("#fin").click(function (event) {
    //     ansTotal = 0;
    //     console.log(ansArray);
    //     for (var i = 0; i < ansArray.length; i++) {
    //     var num = "ans0" + (i + 1);
    //     if (ansArray[num] == "1") {
    //         ansTotal += 1;
    //         // console.log("fail: " + ansArray[num]);
    //     }
    //     }
    //     if (ansTotal == "6") {alert("pass");} else {alert("fail");};
    // });
});

    /*!
        * 這邊可以用CDN調用，是jQuery涵式庫，老師引用出來是給我們方便
        * jQuery UI Touch Punch
        *
        *  jquery.ui.widget.js
        *  jquery.ui.mouse.js
        */
