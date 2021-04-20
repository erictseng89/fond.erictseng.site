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
(function ($) {

    // Detect touch support
    $.support.touch = 'ontouchend' in document;

    // Ignore browsers without touch support
    if (!$.support.touch) {
        return;
    }

    var mouseProto = $.ui.mouse.prototype,
    _mouseInit = mouseProto._mouseInit,
    _mouseDestroy = mouseProto._mouseDestroy,
    touchHandled;

    /*
    * Simulate a mouse event based on a corresponding touch event
    * @param {Object} event A touch event
    * @param {String} simulatedType The corresponding mouse event
    */
    function simulateMouseEvent(event, simulatedType) {

        // Ignore multi-touch events
        if (event.originalEvent.touches.length > 1) {
        return;
        }

        event.preventDefault();

        var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');

        // Initialize the simulated mouse event using the touch event's coordinates
        simulatedEvent.initMouseEvent(
        simulatedType, // type
        true, // bubbles                    
        true, // cancelable                 
        window, // view                       
        1, // detail                     
        touch.screenX, // screenX                    
        touch.screenY, // screenY                    
        touch.clientX, // clientX                    
        touch.clientY, // clientY                    
        false, // ctrlKey                    
        false, // altKey                     
        false, // shiftKey                   
        false, // metaKey                    
        0, // button                     
        null // relatedTarget              
        );

        // Dispatch the simulated event to the target element
        event.target.dispatchEvent(simulatedEvent);
    }

    /**
         * Handle the jQuery UI widget's touchstart events
         * @param {Object} event The widget element's touchstart event
         */
    mouseProto._touchStart = function (event) {

        var self = this;

        // Ignore the event if another widget is already being handled
        if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
        return;
        }

        // Set the flag to prevent other widgets from inheriting the touch event
        touchHandled = true;

        // Track movement to determine if interaction was a click
        self._touchMoved = false;

        // Simulate the mouseover event
        simulateMouseEvent(event, 'mouseover');

        // Simulate the mousemove event
        simulateMouseEvent(event, 'mousemove');

        // Simulate the mousedown event
        simulateMouseEvent(event, 'mousedown');
    };

    /**
         * Handle the jQuery UI widget's touchmove events
         * @param {Object} event The document's touchmove event
         */
    mouseProto._touchMove = function (event) {

        // Ignore event if not handled
        if (!touchHandled) {
        return;
        }

        // Interaction was not a click
        this._touchMoved = true;

        // Simulate the mousemove event
        simulateMouseEvent(event, 'mousemove');
    };

    /**
         * Handle the jQuery UI widget's touchend events
         * @param {Object} event The document's touchend event
         */
    mouseProto._touchEnd = function (event) {

        // Ignore event if not handled
        if (!touchHandled) {
        return;
        }

        // Simulate the mouseup event
        simulateMouseEvent(event, 'mouseup');

        // Simulate the mouseout event
        simulateMouseEvent(event, 'mouseout');

        // If the touch interaction did not move, it should trigger a click
        if (!this._touchMoved) {

        // Simulate the click event
        simulateMouseEvent(event, 'click');
        }

        // Unset the flag to allow other widgets to inherit the touch event
        touchHandled = false;
    };

    /**
         * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
         * This method extends the widget with bound touch event handlers that
         * translate touch events to mouse events and pass them to the widget's
         * original mouse event handling methods.
         */
    mouseProto._mouseInit = function () {

        var self = this;

        // Delegate the touch handlers to the widget's element
        self.element.bind({
        touchstart: $.proxy(self, '_touchStart'),
        touchmove: $.proxy(self, '_touchMove'),
        touchend: $.proxy(self, '_touchEnd') });


        // Call the original $.ui.mouse init method
        _mouseInit.call(self);
    };

    /**
         * Remove the touch event handlers
         */
    mouseProto._mouseDestroy = function () {

        var self = this;

        // Delegate the touch handlers to the widget's element
        self.element.unbind({
        touchstart: $.proxy(self, '_touchStart'),
        touchmove: $.proxy(self, '_touchMove'),
        touchend: $.proxy(self, '_touchEnd') });


        // Call the original $.ui.mouse destroy method
        _mouseDestroy.call(self);
    };

})(jQuery);
        //# sourceURL=pen.js