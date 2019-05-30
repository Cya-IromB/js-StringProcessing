window.addEventListener('DOMContentLoaded',
  function(){
    const aiueo = 'あいうえおかきくけこさしすせそ';
    const csv = '中村,菊野,山澤,北野,穂高,川嶋,瀬木沢,関,Asahi,';
    const str1 = 'こんにちは';
    const str2 = '私の名前は';
    const str3 = 'です。';
    const str4 = 'よろしくお願いします。';

    document.write(`${aiueo}: ${aiueo.length}<br>`);

    let share = str1.concat(str2,str3,str4,'<br>');
    document.write(share);

    share = share.replace(/は/g,'わ☆');
    document.write(share);

    let subs = share.substring(11,18);
    document.write(subs + '<br>');

    let csvAllay = csv.split(',');
    document.write(csvAllay[2]+'<br>');

    share = str1.concat(str2,csvAllay[3],str3,str4);
    document.write(share + '<br>');

    let sl = csvAllay.slice(3,6);
    document.write(sl + '<br>');

    document.write(csvAllay[8].toUpperCase(csvAllay[8]));
    document.write(`${csvAllay[8]} <br>`);

    if(subs.match(/かきくけこ/)){
      document.write('okかきくけこ！<br>');
    }else{
      document.write('notかきくけこ<br>');
    }

    subs = subs.concat(aiueo);

    if(subs.match(/かきくけこ/)){
      document.write(`okかきくけこ！<br>${subs}`);
    }else{
      document.write('notかきくけこ<br>');
    }

    

    share = '';


  },false
);
