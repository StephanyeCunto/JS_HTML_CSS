document.write('Olá mundo ')
const navegador=window.navigator.appName
const url=window.document.URL
document.write(url)
var p1= document.getElementsByTagName('p')[1]
document.write('<br>Está escrito assim: '+p1.innerHTML)
p1.style.color='yellow'
var d=document.getElementById('msg')
d.style.background='green'
d.innerText="Estou aguardando"