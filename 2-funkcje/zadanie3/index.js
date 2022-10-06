/*
function budujDom() {
    var test = 'abcd';

    function wylejBetonNaFundamenty() { console.log('wylejBetonNaFundamenty') };
    function zbudujSciany() { console.log('Zbuduj sciany') };
    function wstawOkna() { console.log('wstawOkna') };
    function zbudujDach() { console.log('Zbuduj dach') };
    function udekorujWnetrze() { console.log('udekorujWnetrze') };

    wylejBetonNaFundamenty();
    zbudujSciany()
    wstawOkna();
    zbudujDach();
    udekorujWnetrze();

    return 'Dom zbudowany';
}

console.log(budujDom());
console.log('Koniec budowania');

wylejBetonNaFundamenty();
zbudujSciany();
console.log(test);
*/

function kata() {
    function ninja() {
        console.log('Jestem ninja');
    }
    ninja();
}

kata();
/*
    To nie zadziala, poniewaz funkcja ninja nie jest widoczna poza zakresem funkcji kata.
*/
ninja();
