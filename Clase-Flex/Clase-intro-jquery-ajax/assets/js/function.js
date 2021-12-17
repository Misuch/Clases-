function showImg(data){
    let img = $('<img></img>');
    img.attr('src',data.download_url);
    img.addClass("img-api");
    let p = '<span>'+data.author+'</span>';
    author.attr('p',data.download_url);
    author.addClass("authorco");
    $("#gallery").append(img);
    $("#gallery").append(p);
}

$(document).ready(function(){
    $("#btn-hide").click(function(){
        $("p").hide("slow");
    })

    $("#btn-show").click(function(){
        $("p").show("slow");
    })

    $("#btn-create").click(function(){
        let span = "<span>Parrafo nuevo</span>";
        $("#new-content").append(span);
        $("span").addClass("parrafo");
    })

    $.ajax({
        type: 'GET',
        url: 'https://picsum.photos/id/0/info',
        dataType: 'json',
        async: true,
        success: function(data){
            showImg(data);
        },
    })
})
