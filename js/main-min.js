$(document).ready(function(){(function(e){var t=[];var n=new e.Date;var r=n.getDate();var i=function(){var e=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];return e[n.getMonth()]};var s=i();var o=function(e){var t=new Array(e||0),n=e;if(arguments.length>1){var r=Array.prototype.slice.call(arguments,1);while(n--)t[e-1-n]=o.apply(this,r)}return t};var u=o(8,0);var a=function(e){var t=e.split("/");return new Date(t[2],t[0]-1,t[1])};var f=function(e,t){return(t-e)/(1e3*60*60*24)};var l=function(){var e;for(var n=0;n<t.length;n++){e=Math.round(t[n].date);switch(e){case 0:u[0].push(t[n]);continue;case 1:u[1].push(t[n]);continue;case 2:u[2].push(t[n]);continue;case 3:u[3].push(t[n]);continue;case 4:u[4].push(t[n]);continue;case 5:u[5].push(t[n]);continue;case 6:u[6].push(t[n]);continue;case 7:u[7].push(t[n]);continue}}};var c=function(){var e;e=Math.round(t[t.length-1].date);switch(e){case 0:u[0].push(t[t.length-1]);break;case 1:u[1].push(t[t.length-1]);break;case 2:u[2].push(t[t.length-1]);break;case 3:u[3].push(t[t.length-1]);break;case 4:u[4].push(t[t.length-1]);break;case 5:u[5].push(t[t.length-1]);break;case 6:u[6].push(t[t.length-1]);break;case 7:u[7].push(t[t.length-1]);break}};var h=function(){for(var e=0;e<u.length;e++){var t=u[e];for(var n=0;n<t.length;n++){if(t[n].date>8){t.splice(n,1)}}}};if(t.length>1){h()}var p=function(){C.text("Tasks today ("+s+" "+r+"): ")};var d=function(){var e=u[0];N.prepend("<li>"+e[e.length-1].task+"</li>")};var v=function(){N.empty();for(var e=0;e<u[0].length;e++){if(u[0][e].task){N.prepend("<li>"+u[0][e].task+"</li>")}}};var m=function(){var e;var t;for(var n=1;n<8;n++){t=$("#day-date"+n);e=$("#day"+n);t.text("");e.empty()}};var g=function(){m();for(var e=1;e<8;e++){var t=u[e];var n=$("#day"+e);var i=$("#day-date"+e);if(t){for(var o=0;o<t.length;o++){if(t[o].task){i.text(s+" "+(r+e)+":");n.prepend("<li>"+u[e][o].task+"</li>")}}}}};var y=$("#cal-date");var b=$("#task-add");var w=$(".task-add-icon");var E=$(".task-add-menu");var S=$("#task-submit-button");var x=$("#task-name");var T=$("#cal-date");var N=$("#today-task-list");var C=$("#today-header");var k=$("#seven-days");var L=$("#today");var A=$("#next-seven-days");var O=$("#today-click");y.datepicker({minDate:-0,maxDate:"+7D",showOn:"button",buttonText:"Select date"});b.click(function(){E.toggle("slow");b.toggle("fast")});S.click(function(){var e;b.show();E.hide();e=Math.ceil(f(n,a(T.val())));t.push({task:x.val(),date:e});c();if(e===0){d()}});A.click(function(){k.show();L.hide();g()});O.click(function(){k.hide();L.show();v();p()});p()})(window)})