// Butoane prioritate de adaugare
document.querySelectorAll('[data-p]').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedPrio = btn.dataset.p;
    document.querySelectorAll('[data-p]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Butoane prioritate de editare
document.querySelectorAll('[data-ep]').forEach(btn => {
  btn.addEventListener('click', () => {
    editPrio = btn.dataset.ep;
    document.querySelectorAll('[data-ep]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Acest cod gestioneaza selectarea prioritatii atat la adaugare de taskuri cat si la editarea lor
// linia 2 document.querySelectorAll('[data-p]') gaseste toata elementele din HTML care au atributul data-p, acestea sunt cele 3 butoane
// pentru prioritate scazuta, medie si ridicata .forEach parcurge fiecare buton gasit si ii ataseaza cate un addEventListener
// linia 4  salveaza in variabila globala selectedPrio valoarea butonului apasat, adica "low", "medium" sau "high" aceasta variabila 
// este folosita mai tarziu cand creez task-ul.
// linia 5 mai intai scoate clasa "active" de pe toate butoanele iar apoi adauga clasa "active" doar pe butonul apasat, astfel
// din punct de vedere vizual apare doar un buton selectat, cel pe care am dat click

// linia 11 este la fel ca la linia 2 pentru butoane prioritate de adaugare, doar ca aici se aplica  pentru modalul de editare
// in loc de data-p am folosit data-ep astfel incat sa nu se incurce cele doua seturi de butoane
// linia 13  adica salveaza in editPrio, este o variabila separata pentru editare

// am nevoie de doua seturi de butoane, deoarece daca as avea un singur set, in momentul in care as da click pe unul din butoane ar fi
// afectate si cele din modal si cele din formularul principal
