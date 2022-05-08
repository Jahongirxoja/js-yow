
// var number = +prompt('yoshingizni kiriting')

// if(number <= 18){
//     alert('siz hali yowsz')
// }else if (isNaN(number)){
//     alert(' siz umuman son yozmadingiz!')
// }else if(number <= 50) {
//     alert('ishla')
// }else if(number <= 59) {
//     alert('siz nafaqaga cqas')
// }else if(number <= 150) {
//     alert('siz nafaqadasiz')
// }


var age = +prompt('yoshingiz')

if(age > 0 && age <= 18) {
    alert('yowsiz')
}else if(age > 18 && age <= 50) {
    alert('iwla')
}else if(age > 50 && age <= 60) {
    alert('nafaqaga cqas yaqnda')
}else if (age > 60 && age <= 150) {
    alert('nafaqa')
}else{
    console.info('xato')
}















