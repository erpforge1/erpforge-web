
const root=document.documentElement;
const saved=localStorage.getItem('theme');
if(saved){root.setAttribute('data-theme',saved)}
function toggleTheme(){const current=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',current);localStorage.setItem('theme',current)}
function copyText(id){const el=document.getElementById(id);navigator.clipboard.writeText(el.innerText||el.value||'')}
function uuidv4(){return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g,c=>(+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16))}
function generateUuid(){const count=Math.min(parseInt(document.getElementById('uuidCount')?.value||'5',10),100);const out=Array.from({length:count},uuidv4).join('\n');document.getElementById('uuidResult').innerText=out}
function formatJson(){const input=document.getElementById('jsonInput').value;try{document.getElementById('jsonResult').innerText=JSON.stringify(JSON.parse(input),null,2)}catch(e){document.getElementById('jsonResult').innerText='Invalid JSON: '+e.message}}
function minifyJson(){const input=document.getElementById('jsonInput').value;try{document.getElementById('jsonResult').innerText=JSON.stringify(JSON.parse(input))}catch(e){document.getElementById('jsonResult').innerText='Invalid JSON: '+e.message}}
function encodeBase64(){const v=document.getElementById('base64Input').value;document.getElementById('base64Result').innerText=btoa(unescape(encodeURIComponent(v)))}
function decodeBase64(){const v=document.getElementById('base64Input').value;try{document.getElementById('base64Result').innerText=decodeURIComponent(escape(atob(v)))}catch(e){document.getElementById('base64Result').innerText='Invalid Base64 input'}}
function convertTimestamp(){const v=document.getElementById('timestampInput').value.trim();let d;if(!v){d=new Date()}else if(/^\d+$/.test(v)){const n=Number(v);d=new Date(v.length===10?n*1000:n)}else{d=new Date(v)}document.getElementById('timestampResult').innerText=isNaN(d.getTime())?'Invalid date or timestamp':`Local: ${d.toString()}\nUTC: ${d.toISOString()}\nUnix seconds: ${Math.floor(d.getTime()/1000)}\nUnix milliseconds: ${d.getTime()}`}
function filterCards(){const q=document.getElementById('siteSearch').value.toLowerCase();document.querySelectorAll('[data-search]').forEach(c=>{c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none'})}
