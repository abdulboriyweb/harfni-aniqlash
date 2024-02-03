var elTitle1 = document.querySelector('.title1')
var elTitle2 = document.querySelector('.title2')
var elInp = document.querySelector('.inp')

function bt(){
    var val = elInp.value

    if(val.length <= 5){
        elTitle1.textContent = '5 ta harfdan kichik'
    }else{
        elTitle2.textContent = '5 ta hardan katta'
    }
}
