function Imie(sender, tresc){
    var pattern = /^[A-Z][a-z]*$/g
    if (pattern.test(tresc)===true && tresc.length <= 30)
    {
        sender.style.backgroundColor = "green";
    }
    else
    {
        sender.style.backgroundColor = "red";
    }
}
function Nazwisko(sender,tresc) {
    var pattern = /((^[A-Z][a-z]+-?)[a-z]+\w$)|(^[A-Z][a-z]+\s?)[A-Z][a-z]+\w$/g

    if (pattern.test(tresc) === true )
    {
        sender.style.textDecorationLine = "underline";
    }
    else sender.style.textDecorationLine = "line-through";
}
function Panstwo(tresc) {
    var pattern = /^[A-Z][a-z]*$/g
    if (pattern.test(tresc) !==true || tresc.length > 30)
        alert("Państwo powinno się zaczynać dużą literą i mieć mniej niż 30 znaków");
}
function Miasto(tresc) {
    var pattern = /^[A-Z][a-z]*$/
    if (pattern.test(tresc) !==true || tresc.length > 20)
        alert("Miasto powinno się zaczynać dużą literą i mieć mniej niż 20 znaków");
}
function NumerDomu(sender, tresc) {
    var pattern = /(^\d+\w?$)/gi
    if(pattern.test(tresc)!==true)
        sender.style.color = "red";
    else sender.style.color = "green";
}
function NumerMieszkania(tresc) {
    if(tresc<1 || tresc>=1000)
        alert("Błędny numer mieszkania!");
}
function NumerTelefonu(sender, tresc) {
    var pattern = /(^\d{3}-?\d{3}-?\d{3}$)|(^\d{3}\s?\d{3}\s?\d{3}$)/g
    if (pattern.test(tresc)!==true)
    {
        sender.style.color = "red";
        alert("Podany numer telefonu nie zgadza się z wymaganym formatem!");
    }
    else sender.style.color = "green";
}
function Data(tresc) {
    let dataUrodzin = new Date(tresc);
    let date = new Date()
    let rokUrozin = dataUrodzin.getFullYear()
    let rokTeraz = date.getFullYear()
    let miesiacTeraz = dataUrodzin.getMonth()
    let  miesiacUrodzin = dataUrodzin.getMonth()
    let dzienTeraz = date.getDate()
    let dzienUrozin = dataUrodzin.getDate()
    if( rokTeraz - rokUrozin <= 17)
    {
        alert("Musisz mieć conajmneij 18 lat by móc korzystać z tej strony!");
    }
    if(rokTeraz - rokUrozin === 18)
    {
        if(miesiacTeraz - miesiacUrodzin < 0)
            alert("Musisz mieć conajmneij 18 lat by móc korzystać z tej strony!");
        if(miesiacTeraz - miesiacUrodzin === 0)
        {
            if(dzienTeraz - dzienUrozin < 0)
                alert("Musisz mieć conajmneij 18 lat by móc korzystać z tej strony!");
        }
    }

}