// deschide modalul

function openEdit(id) {
  editId = id;
  const t = tasks.find(t => t.id === id);

  document.getElementById('editInput').value = t.text;

  // Selectare categorie in modal

  const ec = document.getElementById('editCat');
  ec.innerHTML = CATS.map(c =>
    `<option value="${c}" ${c === t.category ? 'selected' : ''}>${c}</option>`
  ).join('');

  editPrio = t.priority;
  document.querySelectorAll('[data-ep]').forEach(b => {
    b.classList.toggle('active', b.dataset.ep === editPrio);
  });

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('editInput').focus();
}

// Salveaza editarea

function saveEdit() {
  const text = document.getElementById('editInput').value.trim();
  if (!text) return;

  const t = tasks.find(t => t.id === editId);
  if (t) {
    t.text = text;
    t.category = document.getElementById('editCat').value;
    t.priority = editPrio;
    save();
    render();
  }

  closeModal();
}

// Inchide modal

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  editId = null;
}

// in acest fisier sunt 3 functii care lucreaza impreuna pentru deschiderea, salvarea si inchiderea modalului de editare
// linia 1 deschide modalul si il completeaza cu datele task-ului de editat
// linia 2 si 3 salveaza id-ul in variabila globala editId astfel incat sa il poata folosi si saveEdit(). gaseste task-ul in arrai dupa id
// linia 5 gaseste campul din modal si il populeaza cu textul existent al tasku-lui, astfel cand se deschide modalul vad textul adaugat anterior
// gata de modificat
// liniile 9-12  gaseste dropdown-ul din modal <select class="cat-select" id="editCat" style="width:100%;"></select>, acesta este gol in HTML
// iar Javascript il populeaza dinamic. CATS este un array cu toate categoriile, .map() parcurge fiecare categorie si creeaza cate un <option>
// c === t.category ? 'selected' : '' daca categoria din array este aceeasi cu categoria taskului curent il  adauga selected, astfel dropdown-ul
// arata automat categoria corecta cand deschid modalul
// liniile 14-17 seteaza prioritate curenta in editPrio, iar apoi parcurge cele 3 butoane de prioritate din modal.
//.classList.toggle('active', ......) adauga clasa active daca conditia e adevarata, o scoate daca e falsa. Astfel butonul corect apare selectat automat
// liniile 19 si 20 adauga clasa open care in CSS face modalul vizibil, iar apoi pune cursorul automat in campul de text ca sa pot scrie imediat
// linia 25 salveaza modificarile facute in modal
// liniile 26 si 27 citeste textul modificat, iar daca este gol opreste functia
// liniile 29-36 gaseste taskul dupa editId salvat la deschidere si il suprascrie cu cele 3 proprietati cu valorile noi, apoi salveaza 
// in local storage si redeseneaza lista prin render, asftel incat sa fie afisat pe ecran
// linia 38 inchide modalul dupa salvare
// linia 43 functia closeModal() scoate clasa open, iar modalul devine invizibil din nou, reseteaza editId la null, adica curata urma editarii
// deci fluxl complet al modalului este urmatorul dau click pe editeaza la un task, openEdit(id) se deschide modalul cu datele taskului
// modifc textul, categoria si prioritate, dau click pe butonul "salveaza" saveEdit() task ul se actualizeaza savve() +render()
// closeModal() modalul dispare