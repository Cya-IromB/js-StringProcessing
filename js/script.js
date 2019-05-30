window.addEventListener('DOMContentLoaded',
  function(){
    let str = '0123456780123456789abcdef0123456789abcdefg';

    let s_str = str.split('8');

    console.log(`str = ${str}`);
    console.log(`s_str = ${s_str[0]} ${s_str[1]} ${s_str[2]} ${s_str[3]}`);

  },false
);
