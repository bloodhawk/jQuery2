$(document).ready(function () {
    (function (window) {
        //--------------
        //Main app stuffs
        //--------------

        var taskArr = [];
        var date = new window.Date();
        var todayDate = date.getDate();
        var getMonth = function(){
            var monthArr = ['Jan', 'Feb', 'March', 'April', 'May','June', 'July', 'Aug' ,'Sept', 'Oct', 'Nov', 'Dec'];
            return monthArr[date.getMonth()];
        };
        var monthDate = getMonth();
        var createArray = function (length) {
            var arr = new Array(length || 0),
                i = length;

            if (arguments.length > 1) {
                var args = Array.prototype.slice.call(arguments, 1);
                while (i--) arr[length - 1 - i] = createArray.apply(this, args);
            }
            return arr;
        };
        var orderedTaskArr = createArray(8, 0);
        var taskSorter = function () {
            var sum;
            for (var i = 0; i < taskArr.length; i++) {
                sum = Number(taskArr[i].date) - Number(todayDate);
                switch (sum) {
                    case 0:
                        orderedTaskArr[0].push(taskArr[i]);
                        continue;
                    case 1:
                        orderedTaskArr[1].push(taskArr[i]);
                        continue;
                    case 2:
                        orderedTaskArr[2].push(taskArr[i]);
                        continue;
                    case 3:
                        orderedTaskArr[3].push(taskArr[i]);
                        continue;
                    case 4:
                        orderedTaskArr[4].push(taskArr[i]);
                        continue;
                    case 5:
                        orderedTaskArr[5].push(taskArr[i]);
                        continue;
                    case 6:
                        orderedTaskArr[6].push(taskArr[i]);
                        continue;
                    case 7:
                        orderedTaskArr[7].push(taskArr[i]);
                        continue;
                }
            }
        };
        var sortOne = function () {
            var sum;
            sum = Number(taskArr[taskArr.length - 1].date) - Number(todayDate);
            switch (sum) {
                case 0:
                    orderedTaskArr[0].push(taskArr[taskArr.length - 1]);
                    break;
                case 1:
                    orderedTaskArr[1].push(taskArr[taskArr.length - 1]);
                    break;
                case 2:
                    orderedTaskArr[2].push(taskArr[taskArr.length - 1]);
                    break;
                case 3:
                    orderedTaskArr[3].push(taskArr[taskArr.length - 1]);
                    break;
                case 4:
                    orderedTaskArr[4].push(taskArr[taskArr.length - 1]);
                    break;
                case 5:
                    orderedTaskArr[5].push(taskArr[taskArr.length - 1]);
                    break;
                case 6:
                    orderedTaskArr[6].push(taskArr[taskArr.length - 1]);
                    break;
                case 7:
                    orderedTaskArr[7].push(taskArr[taskArr.length - 1]);
                    break;
            }
        };
        var cleanUp = function () {
            for (var i = 0; i < orderedTaskArr.length; i++) {
                var innerArray = orderedTaskArr[i];
                for (var x = 0; x < innerArray.length; x++) {
                    if (innerArray[x].date - Number(todayDate) < 0) {
                        innerArray.splice(x, 1);
                    }

                }
            }
        };
        if (taskArr.length > 1) {
            cleanUp();
        }


        //-----------------------------
        // parse stuffs
        //-----------------------------


        //-----------------------------
        // jQuery stuffs
        //------------------------------

        var renderTodayDate = function () {
            $todayHeader.text('Tasks today(' + monthDate +': ' + todayDate + '): ');
        };

        var renderNew = function () {
            var todayArray = orderedTaskArr[0];
            $todayTasks.prepend('<li>' + todayArray[todayArray.length - 1].task + '</li>');
        };

        var renderToday = function () {
            $todayTasks.empty();
            for (var i = 0; i < orderedTaskArr[0].length; i++) {
                if (orderedTaskArr[0][i].task) {
                    $todayTasks.prepend('<li>' + orderedTaskArr[0][i].task + '</li>');
                }
            }
        };

        var clearWeek = function () {
            var $clearDay;
            var $dateClear
            for (var i = 1; i < 8; i++) {
                $dateClear = $('#day-date' + i);
                $clearDay = $('#day' + i);
                $dateClear.text('');
                $clearDay.empty();
            }
        };

        var renderWeek = function () {
            clearWeek();
            for (var i = 1; i < 8; i++) {
                var day = orderedTaskArr[i];
                var $appendToDay = $('#day' + i);
                var $setToDate = $('#day-date' + i);
                if (day) {
                    for (var x = 0; x < day.length; x++) {
                        if (day[x].task) {
                            $setToDate.text(monthDate + ' ' + (todayDate+i) + ':');
                            $appendToDay.prepend('<li>' + orderedTaskArr[i][x].task + '</li>');
                        }
                    }
                }
            }
        };


        var $calender = $('#cal-date');
        var $taskAdd = $('#task-add');
        var $taskAddIcon = $('.task-add-icon');
        var $taskShow = $('.task-add-menu');
        var $taskSubmit = $('#task-submit-button');
        var $taskName = $('#task-name');
        var $calDate = $('#cal-date');
        var $todayTasks = $('#today-task-list');
        var $todayHeader = $('#today-header');
        var $sevenView = $('#seven-days');
        var $todayView = $('#today');
        var $sevenViewClick = $('#next-seven-days');
        var $todayViewClick = $('#today-click');

        $calender.datepicker({
            minDate: -0,
            maxDate: "+7D",
            showOn: "button",
            buttonText: "Select date"
        });
        $taskAdd.click(function () {
            $taskShow.toggle('slow');
            $taskAdd.toggle('fast');
        });
        $taskSubmit.click(function () {
            var t;
            $taskAdd.show();
            $taskShow.hide();
            t = $calDate.val().split("/");
            t = t[1];
            taskArr.push({
                task: $taskName.val(),
                date: t
            });
            sortOne();
            if (Number(t) - Number(todayDate) === 0) {
                renderNew();
            }
        });
        $sevenViewClick.click(function () {
            $sevenView.show();
            $todayView.hide();
            renderWeek();

        });
        $todayViewClick.click(function () {
            $sevenView.hide();
            $todayView.show();
            renderToday();
            renderTodayDate();
        });
        renderTodayDate();
    })(window);
});