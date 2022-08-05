let name = prompt("adınızı giriniz");

document.getElementById('myName').innerHTML= name;

function showTime(){
    var date = new Date();
    var myClock = document.getElementById('myClock');
    var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe", "Cuma","Cumartesi"];
    var month = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]
    myClock.innerHTML= ` ${date.getDate()} ${month[date.getMonth()]} ${days[date.getDay()]} ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
    setTimeout(showTime,1000);
}

showTime();