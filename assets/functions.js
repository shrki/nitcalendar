$(document).ready (function(){
    $("#addtask1").click(function(){
        $("ul.mon").append("<li class='task'><input type='checkbox'><label>"+$("#monday").val()+"</label><button class='delTask'>x</button></li>");
    });
    
    $("#addtask2").click(function(){
        $("ul.tue").append("<li class='task'><input type='checkbox'><label>"+$("#tuesday").val()+"</label><button class='delTask'>x</button></li>");
    });
    
    $("#addtask3").click(function(){
        $("ul.wed").append("<li class='task'><input type='checkbox'><label>"+$("#wednesday").val()+"</label><button class='delTask'>x</button></li>");
    });
    
    $("#addtask4").click(function(){
        $("ul.thu").append("<li class='task'><input type='checkbox'><label>"+$("#thursday").val()+"</label><button class='delTask'>x</button></li>");
    });
    
    $("#addtask5").click(function(){
        $("ul.fri").append("<li class='task'><input type='checkbox'><label>"+$("#friday").val()+"</label><button class='delTask'>x</button></li>");
    });
    
    $("#addtask6").click(function(){
        $("ul.wee").append("<li class='task'><input type='checkbox'><label>"+$("#weekend").val()+"</label><button class='delTask'>x</button></li>");
    });
});

$(document).on('click', function(){
    $(".delTask").click(function(){
        $(this).parent('.task').remove();
    });
    
});

