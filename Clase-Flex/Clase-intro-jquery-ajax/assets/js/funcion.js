function showImg(data){
    let img = $('<img></img>');
    img.attr('src',data.download_url);
    img.addClass("img-api");
    let p = '<span>'+data.author+'</span>';
    $("#gallery").append(img);
    $("#gallery").append(p);
}
for(i=0;i<12;i++){
    let number = Math.round(Math.random()*200);

    $.ajax({
    type: 'GET',
    url: 'https://picsum.photos/id/'+number+'/info',
    dataType: 'json',
    async: true,
    success: function(data){
        showImg(data);
    },
})
}