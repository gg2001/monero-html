console.log(Cookies.get('mnemonic'));
var testc = Cookies.get('mnemonic');
var dcookie = CryptoJS.AES.decrypt(testc, "y!").toString(CryptoJS.enc.Utf8);
console.log(dcookie);