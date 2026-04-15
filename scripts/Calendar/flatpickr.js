flatpickr('#dueDateInput', {
  locale: 'ro',
  dateFormat: 'Y-m-d',
  minDate: 'today',
  disableMobile: true,
});

// acest cod transforma campul de data dintr-un input simplu intr-un calendar
// linia 1 #dueDateInput e acelasi lucru ca getElementById('dueDateInput),dar fiind o librarie externa Flatpickr folosesc o sintaxa mai scurta
//cu simboluri adica # inseamna elementul cu id-ul, cauta acelasi element ca getElementById
// deci Flatpickr preia acel camp simplu de data si il inlocuieste vizual cu un calendar custom care vine din libraria incarcata in HTML
// si vine din aceste fisiere <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"></link>
// linia 2  face calendarul sa apara in romana, vinde din : <script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/ro.js"></script>
// linia 3 eeste formatul in care se salveaza data
// linia 4 nu te lasa sa selectezi o data din trecut, claendarul blocheaza zilele anterioare datei de azi
// linia 5 este pentru telefon, fara acest parametru in mod normal browserul deschide calendarul nativ al telefonului , iar cu aceasta optiune
// il forteaza sa foloseasca calendarul Flatpickr in asa fel incat sa arate la fel pe toate dispozitivele