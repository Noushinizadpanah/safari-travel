const app = document.getElementById('app');
const footer = document.getElementById('site-footer');
let currentStep = 1;

// Add your n8n production webhook URL here later.
// Example: const N8N_WEBHOOK_URL = 'https://your-n8n-domain/webhook/pole-pole-enquiry';
const N8N_WEBHOOK_URL = '';

const IMG = {
  hero: 'assets/hero-lioness.jpg',
  amboseli: 'assets/amboseli-elephant.jpg',
  mara: 'assets/mara-zebra.jpg',
  serengeti: 'assets/serengeti-buffalo.jpg',
  tarangire: 'assets/tarangire-antelope.jpg',
  giraffes: 'assets/giraffes.jpg',
  giraffeExperience: 'assets/giraffe-experience.jpg',
  galleryGiraffe: 'assets/giraffe-portrait.jpg',
  galleryElephants: 'assets/elephant-family.jpg',
  galleryLions: 'assets/lion-pride.jpg',
  galleryMarabou: 'assets/marabou.jpg',
  galleryZebras: 'assets/zebras-landscape.jpg',
  galleryJacana: 'assets/african-jacana.jpg',

  // Reserved for the planner so the home page never repeats its own photos.
  plannerZebra: 'assets/zebra-rear.jpg',
  plannerGiraffe: 'assets/giraffe-head.jpg',
  plannerGiraffeDetail: 'assets/giraffe-detail.jpg',
  plannerMarabou: 'assets/marabou-portrait.jpg',
  plannerEland: 'assets/eland.jpg',
  plannerEagle: 'assets/fish-eagle.jpg',

  zanzibar: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=88',
  ngorongoro: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1400&q=88',
  balloon: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1400&q=88',
  beach: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1400&q=88',
  camp: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=88',
  walking: 'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1400&q=88'
};

const formData = {
  regions: [],
  tripStyle: [],
  year: '',
  month: '',
  duration: '',
  experiences: [],
  accommodation: '',
  budget: 8000,
  party: '',
  exactPartySize: '',
  adults: 2,
  children: 0,
  childrenAges: [],
  notes: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  occasion: '',
  travelledBefore: '',
  referred: ''
};

function icon(name){
  const icons = {
    key: '<svg viewBox="0 0 64 64"><path d="M31 28a12 12 0 1 1-4-9l20 20m-6-6 7-7m-1 14 6-6"/><circle cx="19" cy="28" r="3"/></svg>',
    sign: '<svg viewBox="0 0 64 64"><path d="M32 8v47M18 17h29l-6 8H18l6-8Zm-4 24h30l-6 8H14l6-8Z"/><path d="M26 56h14"/></svg>',
    heart: '<svg viewBox="0 0 64 64"><path d="M32 51S12 39 12 24c0-7 5-12 12-12 4 0 7 2 8 5 2-3 5-5 9-5 7 0 12 5 12 12 0 15-21 27-21 27Z"/></svg>',
    leaf: '<svg viewBox="0 0 64 64"><path d="M53 12C31 11 15 23 15 39c0 8 5 13 13 13 16 0 25-20 25-40Z"/><path d="M10 56c8-17 20-28 37-37"/></svg>',
    plane: '<svg viewBox="0 0 64 64"><path d="m10 30 42-18-13 40-8-15-21-7Z"/><path d="m31 37 21-25"/><path d="M31 37c-6 2-9 7-9 13"/></svg>',
    hand: '<svg viewBox="0 0 64 64"><path d="M13 42c8 0 10-9 17-9 7 0 8 6 14 6 4 0 7-2 10-5"/><path d="M17 34c-2-7 2-12 7-12 4 0 6 2 8 5 2-3 4-5 8-5 6 0 10 5 9 11-2 8-17 17-17 17S21 44 17 34Z"/><path d="M9 47c9 5 18 8 27 8"/></svg>'
  };
  return icons[name];
}

function showHome(){
  currentStep = 1;
  footer.style.display = 'block';
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">Safari, softly done.</div>
        <h1>Kenya & Tanzania,<br><em>beautifully unrushed.</em></h1>
        <p>Private safaris, handpicked stays and unforgettable moments across Kenya and Tanzania — designed at a gentler pace.</p>
        <div class="hero-actions">
          <button class="btn btn-primary" type="button" onclick="startPlanning()">Plan Your Safari →</button>
          <a class="btn btn-secondary" href="#trips">Explore Trips</a>
        </div>
        <div class="hero-note">Hakuna Matata — travel <em>pole pole.</em></div>
      </div>
      <div class="hero-media"><img src="${IMG.hero}" alt="Lioness on safari"></div>
    </section>

    <section class="section trips-section" id="trips">
      <div class="section-head">
        <div class="kicker">Iconic places · meaningful journeys</div>
        <h2 class="section-title">Sample Trips</h2>
        <p class="section-subtitle">A few ways Kenya and Tanzania can come together. Every itinerary is a starting point, not a fixed package.</p>
      </div>
      <div class="trip-grid">
        ${tripCard(IMG.amboseli,'Kenya','Amboseli','Elephants with Kilimanjaro on the horizon.','4–6 days')}
        ${tripCard(IMG.mara,'Kenya','Maasai Mara','Iconic wildlife, golden plains and intimate game drives.','4–7 days')}
        ${tripCard(IMG.serengeti,'Tanzania','Serengeti','Big skies, migration country and long, wild horizons.','5–8 days')}
        ${tripCard(IMG.tarangire,'Tanzania','Tarangire','Baobabs, wildlife and a quieter safari rhythm.','3–5 days')}
        ${tripCard(IMG.giraffes,'Tanzania','Ngorongoro & North','Highlands, crater country and beautiful northern circuits.','3–5 days')}
        ${tripCard(IMG.zanzibar,'Tanzania','Zanzibar','End your safari with warm water and island calm.','3–6 days')}
      </div>
    </section>

    <section class="section how-section" id="how-it-works">
      <div class="section-head">
        <div class="kicker">Simple by design</div>
        <h2 class="section-title">How it works</h2>
        <p class="section-subtitle">You bring the idea. We turn it into a journey that feels easy, personal and beautifully paced.</p>
      </div>
      <div class="how-grid">
        ${howCard('1','Tell us your style','Share your dates, budget, pace and what you would love to experience.')}
        ${howCard('2','We shape the route','We connect the right places across Kenya, Tanzania or both.')}
        ${howCard('3','Refine it together','Adjust camps, experiences and timing until it feels just right.')}
        ${howCard('4','Travel easy','Arrive with a clear plan and human support when you need it.')}
      </div>
    </section>

    <section class="section why-section" id="why-us">
      <div class="why-intro">
        <div class="kicker">Why travel with Pole Pole?</div>
        <h2 class="section-title">Thoughtful travel, without the fuss.</h2>
        <p class="section-subtitle">Short version: we keep it personal, calm and considered from the first idea to the final day.</p>
      </div>
      <div class="why-grid">
        ${whyItem('key','Tailor-made','Built around you — not a fixed package.')}
        ${whyItem('sign','Local know-how','We recommend places we genuinely believe fit the trip.')}
        ${whyItem('heart','Human support','A real person helps shape the journey with you.')}
        ${whyItem('leaf','Travel thoughtfully','Wildlife, people and place matter in every choice.')}
        ${whyItem('plane','Smooth planning','One simple planning flow for Kenya, Tanzania or both.')}
        ${whyItem('hand','Care all the way','We stay close before, during and after your safari.')}
      </div>
    </section>

    <section class="section gallery-section" id="gallery">
      <div class="section-head">
        <div class="kicker">Real moments · extraordinary places</div>
        <h2 class="section-title">A glimpse of the journey</h2>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item tall"><img src="${IMG.galleryGiraffe}" alt="Giraffe portrait"></div>
        <div class="gallery-item"><img src="${IMG.galleryZebras}" alt="Zebras on the plains"></div>
        <div class="gallery-item"><img src="${IMG.galleryLions}" alt="Lion pride resting"></div>
        <div class="gallery-item"><img src="${IMG.galleryMarabou}" alt="Marabou stork"></div>
        <div class="gallery-item wide"><img src="${IMG.galleryJacana}" alt="African jacana"></div>
      </div>
    </section>

    <section class="final-cta">
      <div class="final-cta-copy">
        <h2>Ready for your Kenya & Tanzania safari?</h2>
        <p>Tell us what you are imagining and we will help shape a journey at the right pace for you.</p>
        <button class="btn btn-primary" type="button" onclick="startPlanning()">Plan Your Safari →</button>
      </div>
    </section>
  `;
}

function tripCard(image,country,title,text,days){
  return `<article class="trip-card"><img src="${image}" alt="${title}"><div class="trip-copy"><div class="trip-country">${country}</div><h3>${title}</h3><p>${text}</p><div class="trip-meta">${days} →</div></div></article>`;
}
function howCard(number,title,text){return `<article class="how-card"><div class="how-step">${number}</div><h3>${title}</h3><p>${text}</p></article>`}
function whyItem(iconName,title,text){return `<article class="why-item"><div class="why-icon">${icon(iconName)}</div><h3>${title}</h3><p>${text}</p></article>`}

function startPlanning(){currentStep=1;footer.style.display='none';renderStep();window.scrollTo(0,0)}
function renderStep(){footer.style.display='none';({1:renderDestination,2:renderTripStyle,3:renderTravelDate,4:renderExperiences,5:renderAccommodation,6:renderBudget,7:renderTravellers,8:renderContact}[currentStep])()}

function wizardShell(title,description,content){
  const percentage=(currentStep/8)*100;
  app.innerHTML=`<section class="wizard"><div class="wizard-top"><div class="progress-row"><button class="back-btn" type="button" onclick="previousStep()">← Back</button><div class="progress"><div class="progress-bar" style="width:${percentage}%"></div></div><span class="view-selections">Pole Pole Planner</span></div></div><div class="step-number">STEP ${currentStep} OF 8</div><h1 class="wizard-title">${title}</h1>${description?`<p class="wizard-description">${description}</p>`:''}<div class="wizard-content">${content}</div></section>`;
}

function renderDestination(){
  wizardShell('Where would you like to explore?','Choose as many as you like. We can also help shape the route.',`
    <div class="option-grid">
      ${photoOption('regions','Kenya · Maasai Mara',IMG.plannerZebra)}
      ${photoOption('regions','Kenya · Amboseli',IMG.plannerGiraffe)}
      ${photoOption('regions','Tanzania · Serengeti',IMG.plannerEland)}
      ${photoOption('regions','Tanzania · Ngorongoro',IMG.ngorongoro)}
      ${photoOption('regions','Tanzania · Zanzibar',IMG.zanzibar)}
      ${photoOption('regions','Kenya + Tanzania',IMG.plannerEagle)}
      ${photoOption('regions','Something quieter',IMG.plannerMarabou)}
      ${simpleOption('regions','Surprise me',true)}
    </div>${navigationButtons()}`);
}

function renderTripStyle(){
  wizardShell('What kind of journey are you imagining?','Choose as many as you like.',`
    <div class="option-grid">
      ${simpleOption('tripStyle','Classic safari',true)}
      ${simpleOption('tripStyle','Safari + beach',true)}
      ${simpleOption('tripStyle','Honeymoon',true)}
      ${simpleOption('tripStyle','Family adventure',true)}
      ${simpleOption('tripStyle','Photography',true)}
      ${simpleOption('tripStyle','Slow & luxurious',true)}
      ${simpleOption('tripStyle','Active & outdoors',true)}
      ${simpleOption('tripStyle','Not sure yet',true)}
    </div>${navigationButtons()}`);
}

function renderTravelDate(){
  wizardShell('When would you like to travel?','An approximate date is absolutely fine.',`
    <h3 class="form-section-heading">Choose a year</h3>
    <div class="option-grid">${['2026','2027','2028','2029'].map(y=>singleOption('year',y)).join('')}</div>
    <h3 class="form-section-heading spaced">Do you know which month?</h3>
    <div class="option-grid months-grid">${months().map(m=>singleOption('month',m)).join('')}</div>
    <div class="field narrow-field"><label>How long would you like to travel?</label><select onchange="formData.duration=this.value"><option value="">Select duration</option>${['One week','10 days','2 weeks','2 weeks +',"I'm not sure"].map(v=>`<option ${formData.duration===v?'selected':''}>${v}</option>`).join('')}</select></div>
    ${navigationButtons()}`);
}

function renderExperiences(){
  wizardShell('What would you love to experience?','Choose as many as you like.',`
    <div class="option-grid">
      ${photoOption('experiences','Wildlife',IMG.plannerGiraffeDetail)}
      ${photoOption('experiences','Great Migration',IMG.walking)}
      ${photoOption('experiences','Hot air balloon',IMG.balloon)}
      ${photoOption('experiences','Beautiful camps',IMG.camp)}
      ${photoOption('experiences','Indian Ocean',IMG.beach)}
      ${simpleOption('experiences','Family',true)}
      ${simpleOption('experiences','Honeymoon',true)}
      ${simpleOption('experiences','Culture & community',true)}
    </div>${navigationButtons()}`);
}

function renderAccommodation(){
  wizardShell('What is your preferred accommodation style?','Pick the closest fit — we can mix styles too.',`
    <div class="option-grid">
      ${singleOption('accommodation','Classic')}
      ${singleOption('accommodation','Mid-range')}
      ${singleOption('accommodation','Luxury')}
      ${singleOption('accommodation','Not sure')}
    </div>${navigationButtons()}`);
}

function renderBudget(){
  wizardShell('How much would you like to spend per person?','This estimate includes accommodation, activities and local travel, but not international flights.',`
    <div class="range-container"><div class="range-value" id="budgetValue">$${Number(formData.budget).toLocaleString()}</div><p>per person</p><input type="range" min="3000" max="30000" step="500" value="${formData.budget}" oninput="updateBudget(this.value)"><div class="range-labels"><span>$3,000</span><span>$30,000+</span></div></div>${navigationButtons()}`);
}

function renderTravellers(){
  const showCounts=['With my family','With friends'].includes(formData.party);
  let extra='';
  if(showCounts){
    extra=`<div class="traveller-extra"><div class="inline-question"><h3>Do you know the exact number of people travelling?</h3><div class="yes-no"><button class="mini-choice ${formData.exactPartySize==='yes'?'selected':''}" type="button" onclick="setExactPartySize('yes')">Yes</button><button class="mini-choice ${formData.exactPartySize==='no'?'selected':''}" type="button" onclick="setExactPartySize('no')">No</button></div></div>${formData.exactPartySize==='yes'?travellerCountsMarkup():''}</div>`;
  }
  wizardShell('Who will you be travelling with?','',`
    <div class="option-grid">
      ${partyOption("I'm travelling solo")}
      ${partyOption('With my partner')}
      ${partyOption('With my family')}
      ${partyOption('With friends')}
    </div>${extra}${navigationButtons()}`);
}

function travellerCountsMarkup(){
  const ages=formData.children>0?`<div class="children-ages"><h4>What are the ages of the children travelling?</h4><div class="age-grid">${Array.from({length:formData.children},(_,i)=>`<div class="field"><label>Child ${i+1} age</label><select onchange="setChildAge(${i},this.value)">${ageOptions(formData.childrenAges[i])}</select></div>`).join('')}</div></div>`:'';
  return `<div class="traveller-row"><div class="field"><label>No. of adults</label><select onchange="formData.adults=Number(this.value)">${numberOptions(1,12,formData.adults)}</select></div><div class="field"><label>No. of children</label><select onchange="setChildrenCount(this.value)">${numberOptions(0,8,formData.children)}</select></div></div>${ages}`;
}

function renderContact(){
  wizardShell("Great — we're almost there.",'Tell us a little more so we can tailor the first conversation to you.',`
    <div class="form-card">
      <div class="form-panel">
        <div class="field"><label>Please tell us more about the trip</label><textarea placeholder="For example: a birthday trip, elephants are a must, we prefer a slower pace..." oninput="formData.notes=this.value">${escapeHtml(formData.notes)}</textarea></div>
        <div class="form-two-col">${inputField('First name','firstName')}${inputField('Last name','lastName')}</div>
        ${inputField('Email address','email','email')}
        ${inputField('Phone / WhatsApp (optional)','phone','tel')}
        <div class="field-group-label">Are you celebrating a special occasion? (optional)</div>
        <div class="chip-group">${['Honeymoon','Birthday','Anniversary','Mini moon'].map(v=>chip('occasion',v)).join('')}</div>
        <div class="field-group-label">Have you travelled with Pole Pole before? (optional)</div>
        <div class="chip-group">${['Yes','No'].map(v=>chip('travelledBefore',v)).join('')}</div>
        <div class="field-group-label">Have you been referred by a Pole Pole guest? (optional)</div>
        <div class="chip-group">${['Yes','No'].map(v=>chip('referred',v)).join('')}</div>
        <button class="btn btn-primary full-btn" type="button" onclick="submitEnquiry()">Submit Enquiry →</button>
      </div>
      <aside class="trust-card">
        <div class="trust-label">We're here to help</div>
        <h3>Easy to plan. Hard to forget.</h3>
        <div class="trust-item"><strong>Tailored advice</strong><p>Recommendations shaped around your style, pace and budget.</p></div>
        <div class="trust-item"><strong>Kenya + Tanzania</strong><p>One planning flow across both countries.</p></div>
        <div class="trust-item"><strong>Human support</strong><p>A real person will review your enquiry and get in touch soon.</p></div>
      </aside>
    </div>`);
}

function simpleOption(key,value,multiple=false){
  const selected=multiple?formData[key].includes(value):formData[key]===value;
  return `<button type="button" class="option-card ${selected?'selected':''}" onclick="${multiple?`toggleMultiple('${key}','${jsEscape(value)}')`:`selectSingle('${key}','${jsEscape(value)}')`}">${value}</button>`;
}
function singleOption(key,value){return simpleOption(key,value,false)}
function photoOption(key,value,image){
  const selected=Array.isArray(formData[key])&&formData[key].includes(value);
  return `<button type="button" class="option-card photo-option ${selected?'selected':''}" style="background-image:url('${image}')" onclick="toggleMultiple('${key}','${jsEscape(value)}')"><span>${value}</span></button>`;
}
function partyOption(value){return `<button type="button" class="option-card ${formData.party===value?'selected':''}" onclick="selectParty('${jsEscape(value)}')">${value}</button>`}
function navigationButtons(){return `<div class="wizard-actions"><button class="btn btn-secondary" type="button" onclick="nextStep()">Not sure</button><button class="btn btn-primary" type="button" onclick="nextStep()">Next →</button></div>`}
function inputField(label,key,type='text'){return `<div class="field"><label>${label}</label><input type="${type}" value="${escapeAttr(formData[key])}" oninput="formData.${key}=this.value"></div>`}
function chip(key,value){return `<button type="button" class="chip ${formData[key]===value?'selected':''}" onclick="setChip('${key}','${jsEscape(value)}')">${value}</button>`}

function toggleMultiple(key,value){const list=formData[key];formData[key]=list.includes(value)?list.filter(v=>v!==value):[...list,value];renderStep()}
function selectSingle(key,value){formData[key]=value;renderStep()}
function setChip(key,value){formData[key]=formData[key]===value?'':value;renderStep()}
function updateBudget(value){formData.budget=Number(value);document.getElementById('budgetValue').textContent='$'+Number(value).toLocaleString()}
function setExactPartySize(value){formData.exactPartySize=value;if(value==='no'){formData.children=0;formData.childrenAges=[]}renderStep()}
function setChildrenCount(value){formData.children=Number(value);formData.childrenAges=formData.childrenAges.slice(0,formData.children);while(formData.childrenAges.length<formData.children)formData.childrenAges.push('');renderStep()}
function setChildAge(index,value){formData.childrenAges[index]=value}

function selectParty(value){
  formData.party=value;
  formData.exactPartySize='';
  if(value==="I'm travelling solo"){formData.adults=1;formData.children=0;formData.childrenAges=[]}
  else if(value==='With my partner'){formData.adults=2;formData.children=0;formData.childrenAges=[]}
  else {formData.adults=Math.max(formData.adults,2)}
  renderStep();
}

function nextStep(){if(currentStep<8){currentStep++;renderStep();window.scrollTo(0,0)}}
function previousStep(){if(currentStep===1){showHome();window.scrollTo(0,0);return}currentStep--;renderStep();window.scrollTo(0,0)}
function months(){return ['January','February','March','April','May','June','July','August','September','October','November','December','Any month','Not sure']}
function numberOptions(min,max,selected){let html='';for(let i=min;i<=max;i++)html+=`<option value="${i}" ${Number(selected)===i?'selected':''}>${i}</option>`;return html}
function ageOptions(selected){let html='<option value="">Select age</option>';for(let i=0;i<=17;i++)html+=`<option value="${i}" ${String(selected)===String(i)?'selected':''}>${i}</option>`;return html}
function jsEscape(value){return String(value).replaceAll('\\','\\\\').replaceAll("'","\\'")}
function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
function escapeAttr(value){return escapeHtml(value)}

async function submitEnquiry(){
  if(!formData.firstName.trim() || !formData.email.trim()){
    alert('Please enter your first name and email address.');
    return;
  }

  const payload={...formData,submittedAt:new Date().toISOString(),source:'pole-pole-website'};

  if(!N8N_WEBHOOK_URL){
    console.log('Pole Pole Safari Enquiry:',payload);
    showSuccess();
    return;
  }

  try{
    const response=await fetch(N8N_WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!response.ok)throw new Error(`Submission failed: ${response.status}`);
    showSuccess();
  }catch(error){
    console.error(error);
    alert("We couldn't send your enquiry. Please try again.");
  }
}

function showSuccess(){
  footer.style.display='block';
  app.innerHTML=`<section class="success-page"><div class="success-card"><div class="success-check">✓</div><div class="kicker">Enquiry received</div><h1>Thank you, ${escapeHtml(formData.firstName)}.</h1><p>We've received your safari preferences.</p><p>One of our trip planners will review them and get in touch with you soon.</p><button class="btn btn-primary" type="button" onclick="showHome()">Back to Home</button></div></section>`;
  window.scrollTo(0,0);
}

showHome();
