(()=>{
  const steps=document.getElementById('steps');
  if(!steps) return;
  const esc=n=>Number(n||0).toFixed(0);
  function C(){
    try{return typeof calc==='function'?calc():null}catch(e){return null}
  }
  function counts(){const r=C();return r?r.c:{L:1,M:1,S:1}}
  function quantities(){
    const r=C(),c=counts();
    if(!r) return {c,L:{mas:250,nata:120,nut:200},M:{mas:250,nata:120,kin:200,bueno:3},S:{mas:250,nata:120,blanco:180},cov:{mas:250,nata:750,glas:110}};
    return {c,
      L:{mas:250*c.L,nata:120*c.L,nut:200*c.L},
      M:{mas:250*c.M,nata:120*c.M,kin:200*c.M,bueno:3*c.M},
      S:{mas:250*c.S,nata:120*c.S,blanco:180*c.S},
      cov:{mas:250*r.af,nata:750*r.af,glas:110*r.af}
    };
  }
  function renderGuide(){
    const x=quantities(),c=x.c;
    const nut=c.L?`<strong>Cantidades:</strong> ${esc(x.L.mas)} g mascarpone + ${esc(x.L.nut)} g Nutella + ${esc(x.L.nata)} ml nata 35 % MG.`:'<strong>No necesario:</strong> no hay piso grande seleccionado.';
    const kin=c.M?`<strong>Cantidades:</strong> ${esc(x.M.mas)} g mascarpone + ${esc(x.M.kin)} g crema Kinder + ${esc(x.M.nata)} ml nata 35 % MG + ${esc(x.M.bueno)} barritas Kinder Bueno.`:'<strong>No necesario:</strong> no hay piso mediano seleccionado.';
    const wh=c.S?`<strong>Cantidades:</strong> ${esc(x.S.mas)} g mascarpone + ${esc(x.S.blanco)} g chocolate blanco + ${esc(x.S.nata)} ml nata 35 % MG.`:'<strong>No necesario:</strong> no hay piso pequeño seleccionado.';
    const cv=(c.L+c.M+c.S)?`<strong>Cantidades para la cobertura seleccionada:</strong> ${esc(x.cov.mas)} g mascarpone + ${esc(x.cov.nata)} ml nata 35 % MG + ${esc(x.cov.glas)} g azúcar glas. Reserva primero una pequeña parte blanca para el recogemigas y colorea el resto.`:'<strong>No hay pisos seleccionados.</strong>';
    steps.innerHTML=`
    <label class="step"><input type="checkbox"><div><strong>1 · Prepara los moldes</strong><p>Forra bases y laterales. Precalienta a 165–170 °C, calor arriba y abajo, rejilla medio-baja.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>2 · Bate huevos y azúcar</strong><p>Con varillas eléctricas dobles, 4–5 min a velocidad media-alta, hasta obtener una mezcla clara y aireada.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>3 · Añade yogur, vainilla y aceite</strong><p>Incorpora a baja velocidad y añade el aceite en hilo fino, sólo hasta integrar.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>4 · Incorpora la harina</strong><p>Tamiza. Si la harina lleva impulsor incorporado, no añadas impulsor adicional. Integra en 2–3 tandas sin sobrebatir.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>5 · Reparte y hornea</strong><p>Distribuye la masa y utiliza la pestaña Horneado para sincronizar los moldes.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>6 · Enfría completamente</strong><p>Espera 10–15 min en el molde, desmolda y termina de enfriar sobre rejilla.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>7 · Relleno Nutella · piso grande</strong><p>${nut}<br>Mezcla mascarpone + Nutella a velocidad baja-media. Añade la nata muy fría y monta sólo hasta picos firmes.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>8 · Relleno Kinder Bueno · piso mediano</strong><p>${kin}<br>Mezcla mascarpone + crema Kinder. Incorpora la nata fría y monta hasta firme. Añade las barritas troceadas al final con espátula.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>9 · Relleno chocolate blanco · piso pequeño</strong><p>${wh}<br>Derrite el chocolate y déjalo bajar a unos 28–30 °C. Mézclalo con el mascarpone; añade la nata fría y monta hasta firme.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>10 · Monta y rellena</strong><p>Nivela los bizcochos, reparte las cremas sin llegar al borde y refrigera cada piso 20–30 min antes de cubrir.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>11 · Cobertura de nata y mascarpone</strong><p>${cv}<br>Mezcla brevemente mascarpone + azúcar glas. Añade la nata muy fría y monta a velocidad media. Detente en picos firmes, mientras siga lisa.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>12 · Capa recogemigas</strong><p>Usa parte de la cobertura todavía blanca para una capa fina. Refrigera 20–30 min.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>13 · Divide y colorea</strong><p><strong>Grande:</strong> morado (aprox. 2 partes azul + 1 roja, corrigiendo gota a gota). <strong>Mediano:</strong> rosa (una cantidad mínima de rojo). <strong>Pequeño:</strong> azul. Mezcla con espátula; el gel intensifica al reposar.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>14 · Cubre cada piso</strong><p>Grande → morado · Mediano → rosa · Pequeño → azul. Alisa y enfría antes de apilar.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>15 · Soportes y montaje</strong><p>Coloca bases finas y soportes en los pisos inferiores y apila centrado.</p></div></label>
    <label class="step"><input type="checkbox"><div><strong>16 · Acabado y frío final</strong><p>Corrige juntas y refrigera 4–6 h; mejor toda la noche.</p></div></label>
    <div class="note warn" style="grid-column:1/-1"><strong>Importante:</strong> las cantidades anteriores se recalculan con la selección actual de tartas/pisos. En la cobertura, no sustituyas mascarpone por más nata: perdería estabilidad.</div>`;
    [...steps.querySelectorAll('input[type=checkbox]')].forEach((box,i)=>{box.checked=localStorage.getItem('cake-step-'+i)==='1';box.onchange=()=>localStorage.setItem('cake-step-'+i,box.checked?'1':'0')});
  }
  renderGuide();
  document.addEventListener('input',e=>{if(['fullCount','largeCount','mediumCount','smallCount'].includes(e.target.id))setTimeout(renderGuide,0)});
  document.querySelectorAll('input[name="mode"]').forEach(x=>x.addEventListener('change',()=>setTimeout(renderGuide,0)));
})();