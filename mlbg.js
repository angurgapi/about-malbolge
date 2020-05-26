const vocab = {'!':'5','"':'z',"#":"]",'$':'&','%':'g','&':'q',"'":'t','(':'y',')':'f','*':'r','+':'$',',':'(','-':'w',
		'.':'e','/':'4','0':'{','1':'W','2':'P','3':')','4':'H','5':'-','6':'Z','7':'n','8':',','9':'[',':':'%',
		';':'\\','<':'3','=':'d','>':'L','?':'+','@':'Q','A':';','B':'>','C':'U','D':'!','E':'p','F':'J','G':'S',
		'H':'7','I':'2','J':'F','K':'h','L':'O','M':'A','N':'1','O':'C','P':'B','Q':'6','R':'v','S':'^','T':'=',
		'U':'I','V':'_','W':'0','X':'/','Y':'8','Z':'|','[':'j','\\':'s',']':'b','^':'9','_':'m','`':'<','a':'.',
		'b':'T','c':'V','d':'a','e':'c','f':'`','g':'u','h':'Y','i':'*','j':'M','k':'K','l':"'",'m':'X','n':'~',
		'o':'x','p':'D','q':'l','r':'}','s':'R','t':'E','u':'o','v':'k','w':'N','x':':','y':'#','z':'?','{':'G',
		'|':'"','}':'i','~':'@',' ':' '};

let encodeAnswer = document.getElementById('encoderesult');
let decodeAnswer = document.getElementById('decoderesult');

function encode(secret){
  let answerCoded = ''
  for (i=0;i<secret.length;i++){
    answerCoded += vocab[secret[i]];
    }
  return answerCoded;
}

function decode(secret){
  let answerDecoded = ''
  for (i=0;i<secret.length;i++){
    answerDecoded += Object.keys(vocab).find(key => vocab[key] === secret[i]);
    }
  return answerDecoded;
}

let okButton = document.getElementById("okbtn");
okButton.addEventListener('click', encrypt);
function encrypt(){
  let msg = document.getElementById("tocode").value;
	encodeAnswer.textContent = encode(msg);
}

let normButton = document.getElementById("normbtn");
normButton.addEventListener('click', decrypt);
function decrypt(){
  let msg = document.getElementById("todecode").value;
	decodeAnswer.textContent = decode(msg);
}
