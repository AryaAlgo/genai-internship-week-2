const notes=document.getElementById("notes"),preview=document.getElementById("preview");
function render(){let text=notes.value.split("\n");let chunks=[];for(let i=0;i<text.length;i+=18)chunks.push(text.slice(i,i+18).join("\n"));preview.innerHTML=chunks.map((c,i)=>`<article class="page ${document.getElementById("font").value} ${document.getElementById("paper").value}" style="--ink:${document.getElementById("ink").value}">${escapeHTML(c)}\n\n<span style="font:12px system-ui;color:#64748b">Page ${i+1}</span></article>`).join("")}
function escapeHTML(s){return s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
["notes","font","ink","paper"].forEach(id=>document.getElementById(id).addEventListener(id==="notes"?"input":"change",render));render();
