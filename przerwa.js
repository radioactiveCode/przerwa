// sekcja zegar
let komunikat = document.getElementById("komunikat");
let minutnik = document.getElementById("minutnik");

// sekcja ustawienia
let ustawienia = document.getElementById("ustawienia");
let czas = document.getElementById("czas");
let minuty = 0;
let sekundy = 0;

// dodatkowe flagi
let praca = false;
let ustaw = false; 

// przycisk Ustaw
document.getElementById("ustaw").onclick = function() 
{ 
    minuty = czas.value;
    if ((minuty >=1) && (minuty <=60))
    {
        ustaw = true;
        document.getElementById("start").disabled = false;
    }
    else
    {
        alert("Wpisz poprawną wartość z zakresu 1-60 minut");
        minuty = 0;
    }
};

// przycisk Start
document.getElementById("start").onclick = function() { if (ustaw == true) {praca = true;}; };
document.getElementById("start").disabled = true;

// główna funkcja
document.onload = odliczanie();

function odliczanie()
{  
    if ((praca) && (ustaw))
    { 
        ustawienia.style.display = "none";
        wyswietl_czas();
        sekundy--;
        sprawdz_sekundy();
    }
    else
    {
        wyswietl_czas();
    }
    setTimeout(odliczanie, 100);
};

// wyświetlanie czasu
function wyswietl_czas()
{
    if (minuty < 10)
    {
        if (sekundy < 10)
        {
            minutnik.textContent = "0" + minuty + ":0" + sekundy;
        }
        else
        {
            minutnik.textContent = "0" + minuty + ":" + sekundy;
        }
    }
    else
    {
        if (sekundy < 10)
        {
            minutnik.textContent = minuty + ":0" + sekundy;
        }
        else
        {
            minutnik.textContent = minuty + ":" + sekundy;
        }
    }
}

// funkcja przskakująca z 0 na 59 lub czy jest koniec odliczania
function sprawdz_sekundy()
{
    if ((sekundy == 0) && (minuty <= 0))
    {
        koniec();
    }

    if (sekundy <= 0)
    {
        sekundy = 59;
        minuty--;
    }
}

// koniec odliczania - wyświetlanie komunikatu
function koniec()
{   
    praca = false;
    komunikat.style.color = "red";
    komunikat.style.fontWeight = 600;
    komunikat.textContent = "Koniec przerwy! Zapraszamy do stanowisk!";
    minutnik.style.display = "none";
}



