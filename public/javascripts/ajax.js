var guncelle = (id) => {
    let idString = '#'+id;
    let kalan = $(idString).val();
    let url = 'http://localhost:3321/kildim/'+id+'/'+kalan;

    $.get(url,(data) => { 
        if(data['ok']){
            alert("ok");
        } else {
            alert("HATA:\n"+data['err']);
        }
     });
}

var detay = (id) => {
    let url = 'http://localhost:3321/namaz/'+id;

    $.get(url,(data) => { alert("ok"); });
}