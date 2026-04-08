
function render() {
    const list = document.getElementById('list'); 
    let visible = tasks; 
    if (filter === 'active') visible = tasks.filter(t => !t.done); 
    if (filter === 'done') visible = tasks.filter(t => t.done);



if (visible.length === 0) { 
    list.innerHTML = `
      <div class="empty">
         <div class="empty-icon"><i class="fa-solid fa-clipboard-list"></i></div>
        <p>Niciun task ${filter === 'done' ? 'finalizat' : filter === 'active' ? 'activ' : ''} momentan.</p>
      </div>`;
} else {
    list.innerHTML = visible.map(t => `
      <div class="card ${t.done ? 'done' : ''} ${t.priority}" data-id="${t.id}">
               <div class="check" onclick="toggleDone('${t.id}')">
  <span class="check-icon">${t.done ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-regular fa-circle"></i>'}</span>
</div>
        <div class="card-body">
          <div class="card-text">${escHtml(t.text)}</div>
          <div class="card-meta">
  <span class="tag tag-cat">${t.category}</span>
  <span class="tag tag-prio-${t.priority}">
    ${t.priority === 'low' ? 'scazuta' : t.priority === 'medium' ? 'medie' : 'ridicata'}
  </span>
  <span class="card-date">${formatDate(t.createdAt)}</span>
  ${t.dueDate ? `<span class="card-due ${new Date(t.dueDate) < new Date() ? 'expirat' : ''}">
    <i class="fa-regular fa-clock"></i> ${new Date(t.dueDate) < new Date() ? 'Expirat: ' : 'Termen: '}${formatDate(new Date(t.dueDate))}
  </span>` : ''}
</div>
                  
        
            
          
        </div>
        <div class="card-actions">
          <button class="icon-btn edit-btn" onclick="openEdit('${t.id}')" title="Editeaza"><i class="fa-solid fa-pen"></i></button>
<button class="icon-btn del-btn"  onclick="deleteTask('${t.id}')" title="Sterge"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `).join('');
  }

  // Actualizeaza statisticile din header cu numarul de taskuri finalizate din total.
  const total = tasks.length;
  const done  = tasks.filter(t => t.done).length;
  document.getElementById('stats').innerHTML =
    `<strong>${done}</strong> / ${total} finalizate`;
}



// pe scrut toata aceasta functie render() actualizeaza tot ce apare pe ecran dupa fiecare schimbare
//  linia 2 Functia render() afiseaza lista de task-uri in pagina web filtrandu-le dupa starea lor (all, active,done) si le 
// arata sub forma de carduri cu text, categorie, prioritate, data si butoane de actiune. Daca nu exista taskuri afiseara un mesa 
// corespunzator.
// linia 3 selecteaza div-ul gol din HTML <div id="list"></div> unde vor aparea cardurile
// linia 4 porneste cu toate taskurile vizibile, este let in loc de const pentru ca valoarea se poate schimba pe randurile urmatoare
// linia 5 returneaza un array nou cu elementele care indeplinesc codntia !t.done insaemna taskurile nebifate
// linia 6 acelasi principiu ca la linia 5 pastreaza doar taskurile bifate
// linia 10 daca nu exista task-uril vizibile afiseaza starea goala.
// linia 11-15 daca lista este goala apare un mesaj in loc de carduri, iar iconita vine din Font Awesome
// textul se schimba dinamic, daca  filtrul este pe "Toate" apare mesajul niciun task momentan"
// dacafiltrul este pe finalizate apare textul "Niciun task finalizat momentan" si tot asa si pentru active
// liniile 16-45 tot acest bloc construieste si afiseaza cardurile task-urilor pe ecran
//.map() parcurce fiecare task din visible si pentru fiecare construieste un sablon HTML complet, adica un card. Iar acel card contine
// zona de bifat, textul taskului care este protejat de escHtml(), tag-urile categoria, prioritate cu culoarea corespunzatoare, data crearii,
// termenul limita, iar daca acesta exista afiseaza "termen" sau "Expirat" in functie de data de azi si butoanele, creionul care deschide 
// openEdit() si cosul care apeleaza deleteTask()
// .join(''); lipeste toate cardurile generate intr-un singur sir de text, iar list.innerHTML =... le injecteaza toate dintr-o data in 
// HTML in <div id="list"></div> iar ele sunt afisate pe ecran
// liniile 48 si 49 calculeaza statisticile, total este numarul tuturor task-urilor, iar done este numarul celor bifate finalizate, .length 
// returneaza cate elemente are array-URL
// linia 50 si 51 gaseste in html <div class="stats" id="stats"></div> si il umple cu textul din header de exemplu 2/7 finalizate, iar >strong>
// face ca numarul de la finalizate sa fie bolduit