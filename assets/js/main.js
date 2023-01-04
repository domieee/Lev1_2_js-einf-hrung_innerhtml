/* Es gibt auch noch eine andere Variante, um Inhalte mit JS in unser HTML-Dokument zu schreiben.
Mit innerHTML können wir Inhalte in unser HTML-Element hinzufügen oder ganze HTML-Elemente hinzufügen. 


Verwende den HTML-Code aus dem Kommentarbereich.

Erstelle mit document.getElementById(“info”).innerHTML eine h1 mit dem Text “Hello World”.
Füge noch eine h2 hinzu mit dem Text “How are you?”.

Sieh’ dir das Ergebnis über den Live Server an. */

let info = document.getElementById("info");
info.innerHTML += "<h1>Hello World!</h1>" + "<h2>How are you?</h2>";

/* Jetzt arbeiten wir weiter mit dem Code und fügen noch ein <div> mit der ID “container” hinzu. Siehe unten im Kommentar.

Nun nutzen wir document.write() und innerHTML, um jeweils Inhalte ins HTML zu schreiben.

Nutze document.getElementById('container').innerHTML, um einen <p>-Tag mit dem Text “start of the element” zu kreieren
Schreiben nun document.write("end of the element")

Analysiere das Ergebnis im Live Server.
Mit document.write() fügt man immer am Ende des HTML Dokuments die Inhalte hinzu. */

let container = document.getElementById("container");
container.innerHTML += "<p>start of the element</p>";
document.write("end of the element");
    // In diesem Fall wird das <p>-Tag in den vorher angesprochenen <div>-Container genestet
    // Anders als bei der document.write("end of the element")-Methode. 'document.write' bezieht sich auf kein Element und wird immer an das ende des DOM-Element gesetzt.




