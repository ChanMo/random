var item = $(".random");
if(item.length > 0){
    var checked = Math.ceil(Math.random()*item.length)-1;
    item.not(':eq('+checked+')').hide();
    item.eq(checked).show();
}

