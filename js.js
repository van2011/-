$(document).ready(function () {
    $(".descriptiontext").hide()
    $(".description").click(() => {
        console.log('gg')
        $(".descriptiontext").toggle(1000)
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
            <img class="ipng itext"
                src="${e.photo_url}" />
            <div class="description">Подробнее</div>
            <div class="descriptiontext">${e.descriptiontext}</div>
            <a href = "user.html?id=${e.author_id}" class = "seller">Продавец</a>
            <button class="buy">Купить</button>
        </div>
        
        `)
            })
        }
    })

})


//const arr = [{ age: 14, name: 'el' }, { name: 'el2' }, { name: 'el3' }]

//arr.forEach(e => console.log(e.name))