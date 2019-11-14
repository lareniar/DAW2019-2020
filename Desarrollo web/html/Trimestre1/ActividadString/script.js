function SinVocales(sPalabra) {
    //vocales para comparar con la palabra
    aVocales = ["a", "e", "i", "o", "u"];
    aVocalesTildes = ["á", "é", "í", "ó", "ú"];
    aVocalesTildesInvertidas = ["à", "è", "ì", "ò", "ù"];
    //si el input tiene uppercase, lo cambiamos a lowercase
    sPalabra = sPalabra.toLowerCase();
    sAux = sPalabra;
    //for para recorrer la palabra
    for (i = 0; i < sAux.length; i++) {
        //for para recorrer posicion de letra comparada en el array
        for (j = 0; j < aVocales.length; j++) {
            //si vocal igual a vocal, se sustituye
            if (aVocales[j] == sPalabra[i]) {
                sPalabra = sPalabra.substr(0, i) + '' + sPalabra.substr(i + 1);
                //ya que quitamos una letra y reducimos el length de palabra, restamos la i para que tome la posición de la siguiente letra
                i--;
            }
            if (aVocalesTildes[j] == sPalabra[i]) {
                sPalabra = sPalabra.substr(0, i) + '' + sPalabra.substr(i + 1);
                i--;
            }
            if (aVocalesTildesInvertidas[j] == sPalabra[i]) {
                sPalabra = sPalabra.substr(0, i) + '' + sPalabra.substr(i + 1);
                i--;
            }

        }
    }
    return (sPalabra);
}
