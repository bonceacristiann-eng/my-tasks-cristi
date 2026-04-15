let tasks = JSON.parse(localStorage.getItem('mytasks') || '[]'); 
let filter = 'all'; 
let selectedPrio = 'low'; 
let editId = null; 
let editPrio = 'low'; 
const CATS = ['General', 'Munca', 'Personal', 'Cumparaturi', 'Sanatate', 'Proiect']; 



// linia 1 la fiecare deschidere a paginii, aceasta linie restaureaza toate task-urile exact cum erau inainte de a inchide pagina
// daca este prima deschidere task porneste ca array gol
// linia 2 retine filtrul active adica 'all', 'active' sau 'done', implicit fiind 'all' adica toate
// linia 3 prioritatea selectata pentru taskul nou, fiind implicit pe 'low' adica scazuta
// linia 4 ID-ul taskului deschis in modal pentru editare este null cand modalul este inchis
// linia 5 prioritatea selectata in modalul de editare si anume 'low' adica scazuta
// linia 6 const este o variabila care nu se poate reasigna, lista de categorii este fixa. este folosit in modalul de editare pentru 
// a genera optiunile din select dinamic.