
function loadAllData(){
    $("#myInput").val("");
    $(".container").empty();
    $.ajax({
        type:'POST',
        url:'/all',
        data:{_token:token},
        success:function(data){
            // console.log(data);
            for(let i=0;i<data.length;i++){
                let text = toHtml(data[i].id,data[i].action,data[i].done);
                $(".container").append(text);
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function(event) {

       loadAllData();

        var input = document.getElementById("myInput");
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                document.getElementById("addBtn").click();
            }
            event.preventDefault();
        });

        var btn = document.getElementById("addBtn").onclick = add;
        var btn = document.getElementById("delBtn").onclick = del;
    }
);


function add(){
    var act = $("#myInput").val();
    if(act.length==0){
        return;
    }
    var obj = {action:act,_token:token};
    $.ajax({
        type:'POST',
        url:'/add',
        data:obj,
        success:function(data){
            loadAllData();
        }
    });

}

function toHtml(id,action,done){
    var s1,s2;
    if(done){
        s1 = "<s>";
        s2 = "</s>";
    }
    else{
        s1 = "";
        s2 = "";
    }
    var text = `<div class="column"><label><input type="checkbox" value="${id}">${s1} ${action} ${s2}</label></div>`;


    return text;
}

function del(){
    var ids = [];
    var d= $(".column");
    console.log(d.length);
    for(let i=0;i<d.length;i++){
        var obj = $(".column:eq("+i+") > label > input");
        var val = obj.val();
        console.log(obj.prop("checked"));
        if(obj.prop("checked")){
            ids.push(obj.val());
        }
    }

    if(ids.length == 0){
        return;
    }

    $.ajax({
        type:'POST',
        url:'/del',
        data:{ids:ids,_token:token},
        success:function(data){
            console.log("Response:"+data);
            console.log(data);
            loadAllData();
        }
    });


}
