$(document).ready(function () {
    $(".descriptiontext").hide()
    $(".description").click(function () {
        $(".descriptiontext").toggle(1000)
    })

    console.log('ggg')
    $.ajax("https://my-json-server.typicode.com/van2011/test/products", {
        dataType: "json",
        data: { limit: 127 },
        success: function (result) {
            result.forEach(e => {
                console.log(e)

                $('.jsonitems').html(`

    <div class="kvadrat">
            <div class="ititle itext">${e.name}</div>
            <img class="ipng itext"
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg" />
            <div class="description">Подробнее</div>
            <div class="descriptiontext">Захочет вас убить</div>
            <button class="buy">Купить</button>
        </div>
        
        `)
            })
        }
    })
})


//const arr = [{ age: 14, name: 'el' }, { name: 'el2' }, { name: 'el3' }]

//arr.forEach(e => console.log(e.name))