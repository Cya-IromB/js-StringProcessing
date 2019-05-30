window.addEventListener('DOMContentLoaded',
  function(){
    const aiueo = 'あいうえおかきくけこさしすせそ';
    const csv = '中村,菊野,山澤,北野,穂高,川嶋,瀬木沢,関,Asahi,';
    const str1 = 'こんにちは';
    const str2 = '私の名前は';
    const str3 = 'です。';
    const str4 = 'よろしくお願いします。';

    document.write(`${aiueo}: ${aiueo.length}<br>`);

    let share = str1.concat(str2,str3,str4);

    document.write(share);


  },false
);
