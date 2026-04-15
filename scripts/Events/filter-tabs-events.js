document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    filter = tab.dataset.filter;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    render();
  });
});

// acest cod gestioneaza taburile de filtrare adica Toate, Active si Finalizate
// linia 1 gaseste toate elementele cu clasa tab din HTML adica cele 3 butoane de filtrare, .forEach parcurge fiecare buton si ii ataseaza 
// cate un addEventListener
// cand dau click pe taburi  executa  sa retina pe ce tab am dat click, scoate clasa active de pe toate cele 3 butoane, adauga clasa active
// doar pe tabul pe care am dat click si afiseaza pe ecran cu reneder