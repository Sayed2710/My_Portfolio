window.onload = function () {
    $('#loading').fadeOut(1000, function () { $('html').css('overflow', 'visible') })
}

$(".Nav_bar .Route button").on("click", function () { $(".Nav_bar .Route button").removeClass("activeButn"); $(this).addClass("activeButn"); });
var pages = ['.Home', '.Skill', '.projects'];
const move = (x) => {

    for (const key in pages) {
        console.log(pages[key], pages[x]);
        if (pages[key] == pages[x])
            $(pages[key]).slideDown(1000);
        else
            $(pages[key]).slideUp(1000);
    }
}
$.getJSON('../js/Skills.json', function (data) {
    var y;
    for (const x in data) {
        y = `<p class="col-6 col-sm-4 col-lg-3">${data[x].name}</p>`;
        document.querySelectorAll('.Skill .sk .row')[0].innerHTML += y;
    }
})
$.getJSON('../js/courses.json', function (data) {
    for (const x in data) {
        y = `<p class="col-6 col-sm-4 col-lg-3">${data[x].name}</p>`;
        document.querySelectorAll('.Skill .co .row')[0].innerHTML += y;
    }
})
$.getJSON('../js/projects.json', function (data) {
    for (const x in data) {
        y = `<div class="col-12 col-sm-6 col-lg-4"><a href="${data[x].link}" ><img src="../media/${data[x].image}.jpg" width="100%"><p>${data[x].name}</p></a></div>`;
        document.querySelectorAll('.projects .proj .row')[0].innerHTML += y;
    }
})