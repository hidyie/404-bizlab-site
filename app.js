const revealEls=[...document.querySelectorAll('.reveal')];
const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.1,rootMargin:'0px 0px -40px'});
revealEls.forEach(el=>revealObserver.observe(el));

const serviceSelect=document.querySelector('select[name="service"]');
document.querySelectorAll('[data-service]').forEach(link=>{
  link.addEventListener('click',()=>{
    if(serviceSelect) serviceSelect.value=link.dataset.service;
  });
});

const form=document.getElementById('diagnosis-form');
const statusEl=document.getElementById('form-status');
const ENDPOINT='https://solmiir-cs-proxy.grnamu13.workers.dev/api/chat';
const PUBLIC_SITE_ID='CS-CH3W2UFQ';

form?.addEventListener('submit',async event=>{
  event.preventDefault();
  const submit=form.querySelector('button[type="submit"]');
  const fd=new FormData(form);
  statusEl.className='form-status';
  statusEl.textContent='접수 중입니다…';
  submit.disabled=true;
  try{
    const payload={
      type:'lead',
      licenseKey:PUBLIC_SITE_ID,
      brand:'404 비즈랩 무료진단',
      name:`${fd.get('business')} / ${fd.get('industry')}`,
      contact:String(fd.get('contact')||'').trim(),
      memo:`서비스:${fd.get('service')} | URL:${fd.get('url')||'-'} | 당근:${fd.get('daangn')||'-'} | 고민:${fd.get('concern')||'-'}`.slice(0,500),
      sessionId:`bizlab-${Date.now().toString(36)}`,
      consent:true,
      consentAt:new Date().toISOString()
    };
    const response=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!response.ok) throw new Error('SUBMIT_FAILED');
    form.reset();
    statusEl.className='form-status ok';
    statusEl.textContent='접수되었습니다. 확인 후 연락드리겠습니다.';
  }catch(error){
    console.error(error);
    statusEl.className='form-status err';
    statusEl.innerHTML='접수가 원활하지 않습니다. 잠시 후 다시 시도해 주세요.';
  }finally{
    submit.disabled=false;
  }
});