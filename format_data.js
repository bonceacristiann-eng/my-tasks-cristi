function formatDate(ts) {
    const d = new Date(ts);
    return d.toLocaleDateString('ro-RO', {
        day: '2-digit',
        month: 'short',
        year:  'numeric'
    });
}

// aceasta functie transforma un timpestamp sau o data intr-un text in limba romana
// linia 1 ts este parametrul functiei este un timestamp (numar de milisecunde)
// linia 2 new Date(ts) converteste ts intr-un obiect data pe care JS il poate intelege si din care poate extrge ziua, luna anul si devine
// un obiect  care stie ca este de exemplu 25 februarie 2026
// linia 3 d.toLocaleDateString('ro-RO' {...}) formateaza data ca text, iar 'ro-RO' ii spune sa foloseasca formatul si lb romana
// linia 4 face ca ziua sa apara cu doua cifre
// linia 5 face ca luna sa apara prescurtat de exemplu in loc de aprilie o sa afiseze apr.
// linia 6 face ca anul sa apara cu 4 cifre

// aceasta functie este folosita in doua locuri in export CSV si in render() cand afiseaza data in cardul fiecaru task pe ecran