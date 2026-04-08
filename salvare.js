function save() {
    localStorage.setItem('mytasks', JSON.stringify(tasks));
} 

// JSON.stringify(tasks) converteste array-ul (lista) JavaScript in string(Text) JSON pentru ca localStorage accepta doar string-uri.  
//  localStorage.setItem('mytasks' ...) salveaza string-ul cu cheia 'mytasks' in browser, adica datele raman dupa refresh si
//  dupa inchidea browserului.
