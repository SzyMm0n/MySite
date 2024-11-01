function klik(tresc)
{
    document.getElementById("okno").innerHTML+= tresc
}
function wyczysc()
{
    document.getElementById("okno").innerHTML=null
}
function wynik()
{
    document.getElementById("okno").innerHTML=eval(document.getElementById("okno").innerText)
}