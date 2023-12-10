$(document).ready(function () {
    $(".userdescriptiontext").hide()
    $(".userdescription").click(function () {
        $(".userdescriptiontext").toggle(1000)
    })

    $.ajax("https://my-json-server.typicode.com/van2011/test/products", {
        dataType: "json",
        data: { limit: 127 },
        success: function (result) {
            result.forEach(e => {
                console.log(e);
                $('.kvadratkvadrat').append(`

    <div class="kvadrat">
    
            <div class="ititle itext">${e.name}</div>
            <div class="ititle itext">${sir.name}</div>
            <img class="ipng itext"
                src="${e.photo_url}" />
            
            <div class="descriptiontext">${e.balance}</div>
            
      
        </div>
        
        `)
            })
        }
    })

})


