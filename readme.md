Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Ps. ricordatevi dei consigli e casi d’uso visti a lezione!
Qui trovate il sito per simulare il comportamento dell’Event Loop di Javascript, può aiutarvi a chiarire dubbi che potreste trovare durante l’esercizio: http://latentflip.com/loupe/

1. Creo una funzione che genera 5 numeri casuali da 1 a 100 e li inserisce in un array
2. Mostro i 5 numeri generati nella pagina, usando innerHTML
3. Imposto un timer setTimeout che farà scomparire i 5 numeri dalla pagina dopo 30 secondi
4. Un altro timer attiverà un prompt  dopo 31 secondi
5. Creo 5 prompt per far indovinare all'utente i numeri mostrati in precedenza
   I prompt saranno inseriti in un ciclo while in modo che l'input sarà terminato quando tutti i 5 minuti saranno inseriti
6. Inserisco i numeri inseriti dall'utente in un'altro array
7. Con un ciclo for e include verifico i numeri inseriti dall'utente con quelli casuali generati
8. Infine mostro in pagina i numeri indovinati e tutti i numeri casuali iniziali