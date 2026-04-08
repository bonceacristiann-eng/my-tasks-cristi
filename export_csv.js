function exportCSV() {
  const header = ['Text', 'Categorie', 'Prioritate', 'Status', 'Data creare', 'Termen'];

  const rows = tasks.map(t => [
    `"${t.text.replace(/"/g, '""')}"`,
    t.category,
    t.priority === 'low' ? 'Scazuta' : t.priority === 'medium' ? 'Medie' : 'Ridicata',
    t.done ? 'Finalizat' : 'Activ',
    formatDate(t.createdAt),
    t.dueDate ? formatDate(new Date(t.dueDate)) : 'Fara termen'
  ]);

  const csv = [header, ...rows].map(r => r.join(',')).join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'tasks.csv';
  a.click();

  URL.revokeObjectURL(url);
}


// linia 1 aceasta functie exporta toate taskurile ca fisier CSV 
// linia 2  sunt numele coloanelor, exact cum le-as vedea in Excel
// linia 4 parcurge fiecare task din array si l transforma intr-un rand cu 6 valori
// linia 5 pune textul intre ghilimele
// linia 6 ia categoria task ului de exemplu General, munca , etc
// linia 7 face conversia valorilor interne low, medium si high in romana pentru fisier. cele doua semne ? se numeste ternary operator
// si verifca pe rand fiecare conditie
// linia 8 daca done e true atunci in lista o sa apara 'Finalizat', altfel o sa para 'Activ'
// linia 9  formateaza timestamp-ul crearii intr-o data lizibila prin functia formatDate() din fisierul format_data.js
// linia 10 daca task-ul are ddata limita o formateaza  in data, iar daca nu are data limita o sa scrie ' Fara Termen'
// linia 13 [header, ...rows] pune antetul primul, apoi toate randurile. ... este un spread operator si desfasoara array ul rows in elemente
// individuale, fara el ar fi un array in array
// .map(r => r.join(',')) ficare rand devine un sir de text cu valorile separate de virgula
// .join('\n'); uneste toate randurile cu linie noua, unul sub altul
// linia 15 Blob creeaza un fisier virtual in memoria broswerului din textul CSV, type: 
// 'text/csv;charset=utf-8;' ii spune browserului ce tip de fisier este si charset asigura ca diactricile apar corect
// linia 16 creaza un URL temporar catre acel fisier virtual, fara acest URL nu pot descarca un fisier creat in memoria browserului
// linia 18 creaza un element <a> (link) invizibil nu este in HTML, exista doar in memorie
// linia 19 Seteaza url-ul catre fisierul virtual creat mai sus la linia 18
// linia 20 ii spune browserului ca la click nu trebuie sa navigheze la URL ci sa descarca fisierul cu numele tasks.csv
// linia 21  simuleaza un click pe link, browserul porneste descarcare automat.
// linia 23 elibereaza memoria, URL-ul temporar si fisierul virtual nu mai sunt necesare dupa ce descarcare a pornit