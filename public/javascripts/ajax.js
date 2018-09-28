var guncelle = (id) => {
    let idString = '#'+id;
    let kalan = $(idString).val();
    let url = 'http://localhost:3321/kildim/'+id+'/'+kalan;

    $.get(url,(data) => { alert("ok"); });
}