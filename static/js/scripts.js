(function() {
    const codes = [
      99,111,110,116,97,99,116,
      64,
      99,115,119,101,98,
      46,
      99,111,46,107,114
    ];
    const email = String.fromCharCode(...codes);
    const a = document.createElement('a');
    a.href = 'mailto:' + email;
    a.textContent = email;
    a.className = 'text-white text-decoration-underline';
    document.getElementById('email-obf').appendChild(a);
})();