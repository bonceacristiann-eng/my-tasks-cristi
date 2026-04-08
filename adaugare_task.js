function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) {
    input.focus();
    return;
  }

  const cat = document.getElementById('catSelect').value;

  tasks.unshift({
    id: genId(),
    text: text,
    category: cat,
    priority: selectedPrio,
    done: false,
    createdAt: Date.now(),
    dueDate: document.getElementById('dueDateInput').value
  });

  save();
  document.getElementById('dueDateInput').value = '';
  input.value = '';
  render();
}

// randul 2 si 3 (const) iau textul din campul input al "adauga task nou|" si elimina spatiile de la inceput si sfarsit
// randul 4-7 (if) daca campul e gol, pune cursorul inapoi in input si opreste functia, adica nu seadauga nimic
// randul 9 (const) ia valoarea din dropdown-ul de categorii, adica citeste categoria selectata
// randul 11 (task.unshift({..............}) creaza si adauga taskul, "unshift" adauga task-ul la inceputul array-ului, adica apare primul in lista
// randul 12 (id) este un ID unic generat de genId
// randul 13 (text) este textul taskului
// randul 14 (category)  este categoria aleasa
// randul 15 (priority) este prioritatea selectata dintr-o variabila globala
// randul 16 (done: false) imi spune ca taskul incepe nefinalizat
// randul 17 (createdAt: Date.now() ) este timestamp-ul crearii in milisecunde, adica cate milisecunde au trecut de la 1 ianuarie 1970 pana la exact momentul crearii taskului
// randul 18 (dueDate) data limita din campul dedicat, data pana la care trebuie finalizat task-ul
// linia 21 (save () ) salveaza task urile in local storage
// linia 22 (document.getElementByid...) aceasta curata campul de data, adica dupa ce utilizatorul a selectat o data si a adaugat task-ul, apoi campul devinde gol pentru a putea selecta o noua data
// linia 23 (input .value = ' ') la fel ca la linia 22 doar ca el curata campul text din "adauga task nou" adica unde trec taskul cel nou
// linia 24 (render () ) redeseneaza lista, adica ne afiseaza noua lista dupa adaugarea unui task nou, fara render pe ecran nu ar aprea nimic
// pentru ca java script pentru adaugarea taskului functioneaza asa apas Adauga, adaugam taskul, apoi tasul intra in array adica in memorie
// se salveaza in localStorage iar functia render actualizeaza ecranul
// pe scurt fara render eu nu as vedea nimic pe ecran, totul s-ar intampla in spate in java script in array si localstorage