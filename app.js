const app = document.getElementById("app");

let currentStep = 1;

const formData = {
  regions: [],
  tripStyle: [],
  year: "",
  month: "",
  duration: "",
  experiences: [],
  accommodation: "",
  budget: 8000,
  party: "",
  adults: 2,
  children: 0,
  notes: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: ""
};

// Add your n8n Production Webhook URL here when ready.
const N8N_WEBHOOK_URL = "";

function showHome() {
  currentStep = 1;

  app.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <div class="eyebrow">EXTRAORDINARY JOURNEYS · A DEEPER KENYA</div>

        <h1>Tailor-made Kenya safaris, designed around you.</h1>

        <p>
          From unforgettable wildlife encounters to remote conservancies and
          Indian Ocean beaches, we create private Kenya journeys shaped around
          your interests, pace and travel style.
        </p>

        <button class="primary-btn" onclick="startPlanning()">Start Planning →</button>
      </div>
    </section>

    <section id="trips" class="section">
      <h2 class="section-title">Sample Kenya Itineraries</h2>

      <p class="section-subtitle">
        Ideas to inspire your journey. Every trip can be tailored around you.
      </p>

      <div class="trip-grid">
        ${tripCard(
          safariImage(),
          "Classic Kenya Safari",
          "10 DAYS · MASAI MARA · AMBOSELI",
          "Iconic parks, spectacular landscapes and exceptional wildlife."
        )}

        ${tripCard(
          lionImage(),
          "Wild Kenya",
          "9 DAYS · MARA · LAIKIPIA",
          "Big cats, private conservancies and remarkable game viewing."
        )}

        ${tripCard(
          migrationImage(),
          "The Great Migration",
          "8 DAYS · MASAI MARA",
          "Follow one of East Africa's most dramatic wildlife experiences."
        )}

        ${tripCard(
          beachImage(),
          "Safari & Indian Ocean",
          "12 DAYS · MARA · DIANI",
          "Combine the thrill of safari with a few slow days beside the sea."
        )}
      </div>
    </section>

    <section class="section how-it-works">
      <h2 class="section-title">How It Works</h2>

      <p class="section-subtitle">
        A simple guided process to create your Kenya journey.
      </p>

      <div class="steps-overview">
        ${overview(1, "Tell us about you", "Answer a few quick questions about your trip.")}
        ${overview(2, "We shape your journey", "Your preferences help us build the right itinerary.")}
        ${overview(3, "Review & refine", "We fine-tune destinations, stays and experiences together.")}
        ${overview(4, "Travel with confidence", "Get support before and during your trip.")}
      </div>
    </section>

    <section id="why-us" class="section why-us">
      <h2 class="section-title">Why travel with us?</h2>

      <p class="section-subtitle">
        Thoughtful planning, local knowledge and journeys designed for real travellers.
      </p>

      <div class="why-grid">
        ${why("◎", "Tailor-made journeys", "Every journey starts with you rather than a fixed package.")}
        ${why("⌖", "Local expertise", "We work with trusted specialists who know Kenya on the ground.")}
        ${why("♡", "Personal support", "A real person helps you shape your itinerary from the first idea.")}
        ${why("◌", "Responsible travel", "We favour experiences that respect wildlife, communities and place.")}
        ${why("✧", "Carefully selected stays", "From classic safari camps to private conservancy lodges.")}
        ${why("✓", "Travel with confidence", "Clear planning and support before and throughout your journey.")}
      </div>
    </section>
  `;
}

function tripCard(image, title, meta, text) {
  return `
    <article class="trip-card">
      <img src="${image}" alt="${title}">
      <h3>${title}</h3>
      <div class="meta">${meta}</div>
      <p>${text}</p>
      <span class="text-link">View trip →</span>
    </article>
  `;
}

function overview(number, title, text) {
  return `
    <div class="overview-item">
      <div class="number">${number}</div>
      <div>
        <strong>${title}</strong>
        <span>${text}</span>
      </div>
    </div>
  `;
}

function why(icon, title, text) {
  return `
    <div class="why-item">
      <div class="why-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  `;
}

function startPlanning() {
  currentStep = 1;
  renderStep();
  window.scrollTo(0, 0);
}

function wizardShell(title, description, content) {
  const percentage = (currentStep / 8) * 100;

  app.innerHTML = `
    <section class="wizard">
      <div class="wizard-top">
        <div class="progress-row">
          <button class="back-button" onclick="previousStep()">← Back</button>

          <div class="progress">
            <div class="progress-bar" style="width:${percentage}%"></div>
          </div>

          <span class="view-selections">View selections</span>
        </div>
      </div>

      <div class="step-number">STEP ${currentStep} OF 8</div>

      <h1 class="wizard-title">${title}</h1>

      <p class="wizard-description">${description || ""}</p>

      <div class="wizard-content">${content}</div>
    </section>
  `;
}

function renderStep() {
  switch (currentStep) {
    case 1: renderDestination(); break;
    case 2: renderTripStyle(); break;
    case 3: renderTravelDate(); break;
    case 4: renderExperiences(); break;
    case 5: renderAccommodation(); break;
    case 6: renderBudget(); break;
    case 7: renderTravellers(); break;
    case 8: renderContact(); break;
  }
}

function renderDestination() {
  wizardShell(
    "Where would you like to explore?",
    "Choose as many regions as you like. If you are not sure yet, that is completely fine.",
    `
      <div class="option-grid">
        ${photoOption("regions", "Masai Mara", safariImage())}
        ${photoOption("regions", "Amboseli", safariImage())}
        ${photoOption("regions", "Laikipia", lionImage())}
        ${photoOption("regions", "Samburu", safariImage())}
        ${photoOption("regions", "Diani Beach", beachImage())}
        ${photoOption("regions", "Not sure yet", migrationImage())}
      </div>

      ${navigationButtons()}
    `
  );
}

function renderTripStyle() {
  wizardShell(
    "What kind of journey are you imagining?",
    "Select everything that sounds like your kind of trip.",
    `
      <div class="option-grid">
        ${simpleOption("tripStyle", "Classic Safari", true)}
        ${simpleOption("tripStyle", "Safari + Beach", true)}
        ${simpleOption("tripStyle", "Honeymoon", true)}
        ${simpleOption("tripStyle", "Family Adventure", true)}
        ${simpleOption("tripStyle", "Photography Safari", true)}
        ${simpleOption("tripStyle", "Off the Beaten Track", true)}
      </div>

      ${navigationButtons()}
    `
  );
}

function renderTravelDate() {
  wizardShell(
    "When would you like to travel?",
    "An approximate date is enough.",
    `
      <h3 style="text-align:center">Choose a year</h3>

      <div class="option-grid">
        ${singleOption("year", "2026")}
        ${singleOption("year", "2027")}
        ${singleOption("year", "2028")}
        ${singleOption("year", "2029")}
      </div>

      <h3 style="text-align:center; margin-top:45px;">Do you know which month?</h3>

      <div class="option-grid" style="grid-template-columns:repeat(4,1fr);">
        ${months().map(month => singleOption("month", month)).join("")}
      </div>

      <div class="field" style="max-width:420px; margin:40px auto 0;">
        <label>How long would you like to travel?</label>

        <select onchange="formData.duration = this.value">
          <option value="">Select duration</option>
          <option>One week</option>
          <option>10 days</option>
          <option>2 weeks</option>
          <option>2 weeks +</option>
          <option>I'm not sure</option>
        </select>
      </div>

      ${navigationButtons()}
    `
  );
}

function renderExperiences() {
  wizardShell(
    "What would you like to experience?",
    "Choose as many as inspire you.",
    `
      <div class="option-grid">
        ${photoOption("experiences", "Wildlife", safariImage())}
        ${photoOption("experiences", "Big Five Safari", lionImage())}
        ${photoOption("experiences", "Great Migration", migrationImage())}
        ${photoOption("experiences", "Family", familyImage())}
        ${photoOption("experiences", "Honeymoon", beachImage())}
        ${photoOption("experiences", "Walking Safari", safariImage())}
        ${photoOption("experiences", "Conservancy Experience", lionImage())}
        ${photoOption("experiences", "Photography", migrationImage())}
        ${photoOption("experiences", "Cultural Encounters", safariImage())}
        ${photoOption("experiences", "Beach Extension", beachImage())}
        ${photoOption("experiences", "Hot Air Balloon", safariImage())}
      </div>

      ${navigationButtons()}
    `
  );
}

function renderAccommodation() {
  wizardShell(
    "What is your preferred accommodation style?",
    "Choose the style that feels closest to you.",
    `
      <div class="option-grid">
        ${singleOption("accommodation", "Classic")}
        ${singleOption("accommodation", "Comfort")}
        ${singleOption("accommodation", "Luxury")}
        ${singleOption("accommodation", "Not sure")}
      </div>

      ${navigationButtons()}
    `
  );
}

function renderBudget() {
  wizardShell(
    "How much would you like to spend per person?",
    "This estimate excludes international flights.",
    `
      <div class="range-container">
        <div id="budgetValue" class="range-value">
          $${Number(formData.budget).toLocaleString()}
        </div>

        <p>per person</p>

        <input
          type="range"
          min="3000"
          max="30000"
          step="500"
          value="${formData.budget}"
          oninput="updateBudget(this.value)"
        >

        <div style="display:flex; justify-content:space-between; color:#777;">
          <span>$3,000</span>
          <span>$30,000+</span>
        </div>
      </div>

      ${navigationButtons()}
    `
  );
}

function renderTravellers() {
  wizardShell(
    "Who will you be travelling with?",
    "",
    `
      <div class="option-grid">
        ${singleOption("party", "I'm travelling solo")}
        ${singleOption("party", "With my partner")}
        ${singleOption("party", "With my family")}
        ${singleOption("party", "With friends")}
      </div>

      <div class="field-row" style="max-width:600px; margin:45px auto;">
        <div style="flex:1">
          <label>No. of adults</label>
          <select onchange="formData.adults = Number(this.value)">
            ${numberOptions(1, 10, formData.adults)}
          </select>
        </div>

        <div style="flex:1">
          <label>No. of children</label>
          <select onchange="formData.children = Number(this.value)">
            ${numberOptions(0, 6, formData.children)}
          </select>
        </div>
      </div>

      ${navigationButtons()}
    `
  );
}

function renderContact() {
  wizardShell(
    "Tell us about your dream Kenya safari",
    "Share a few final details and we'll use everything you've selected to shape your itinerary.",
    `
      <div class="form-card">
        <div>
          ${inputField("What are you dreaming of?", "notes", true)}
          ${inputField("First name", "firstName")}
          ${inputField("Last name", "lastName")}
          ${inputField("Email address", "email", false, "email")}
          ${inputField("Phone or WhatsApp (optional)", "phone")}

          <button class="primary-btn" style="width:100%; margin-top:15px;" onclick="submitEnquiry()">
            Send My Enquiry →
          </button>
        </div>

        <aside class="trust-card">
          <h3>Why plan with us?</h3>

          <div class="trust-item">
            <strong>Tailor-made advice</strong>
            <p>Recommendations shaped around your interests and travel style.</p>
          </div>

          <div class="trust-item">
            <strong>Local expertise</strong>
            <p>First-hand knowledge of Kenya's parks, conservancies and coastline.</p>
          </div>

          <div class="trust-item">
            <strong>Seamless support</strong>
            <p>Help before, during and after your journey.</p>
          </div>

          <div class="trust-item">
            <strong>Travel with confidence</strong>
            <p>Carefully selected local partners and clear planning.</p>
          </div>
        </aside>
      </div>
    `
  );
}

function photoOption(key, value, image) {
  const selected = Array.isArray(formData[key]) && formData[key].includes(value);

  return `
    <div
      class="option-card photo-option ${selected ? "selected" : ""}"
      style="background-image:url('${image}')"
      onclick="toggleMultiple('${key}', '${escapeQuotes(value)}')"
    >
      <span>${value}</span>
    </div>
  `;
}

function simpleOption(key, value, multiple = false) {
  const selected = multiple
    ? formData[key].includes(value)
    : formData[key] === value;

  return `
    <div
      class="option-card ${selected ? "selected" : ""}"
      onclick="${
        multiple
          ? `toggleMultiple('${key}','${escapeQuotes(value)}')`
          : `selectSingle('${key}','${escapeQuotes(value)}')`
      }"
    >
      ${value}
    </div>
  `;
}

function singleOption(key, value) {
  return simpleOption(key, value, false);
}

function escapeQuotes(value) {
  return value.replaceAll("'", "\\'");
}

function toggleMultiple(key, value) {
  const list = formData[key];

  if (list.includes(value)) {
    formData[key] = list.filter(item => item !== value);
  } else {
    formData[key].push(value);
  }

  renderStep();
}

function selectSingle(key, value) {
  formData[key] = value;
  renderStep();
}

function navigationButtons() {
  return `
    <div class="wizard-actions">
      <button class="secondary-btn" onclick="nextStep()">Not sure</button>
      <button class="primary-btn" onclick="nextStep()">Next →</button>
    </div>
  `;
}

function nextStep() {
  if (currentStep < 8) {
    currentStep++;
    renderStep();
    window.scrollTo(0, 0);
  }
}

function previousStep() {
  if (currentStep === 1) {
    showHome();
    return;
  }

  currentStep--;
  renderStep();
  window.scrollTo(0, 0);
}

function inputField(label, key, textarea = false, type = "text") {
  if (textarea) {
    return `
      <div class="field">
        <label>${label}</label>
        <textarea
          placeholder="Tell us what you'd love to see and do, what matters most to you, or anything we should know."
          oninput="formData.${key} = this.value"
        >${formData[key]}</textarea>
      </div>
    `;
  }

  return `
    <div class="field">
      <label>${label}</label>
      <input
        type="${type}"
        value="${formData[key]}"
        oninput="formData.${key} = this.value"
      >
    </div>
  `;
}

function updateBudget(value) {
  formData.budget = Number(value);
  document.getElementById("budgetValue").innerText =
    "$" + Number(value).toLocaleString();
}

function numberOptions(min, max, selected) {
  let html = "";

  for (let i = min; i <= max; i++) {
    html += `
      <option value="${i}" ${Number(selected) === i ? "selected" : ""}>
        ${i}
      </option>
    `;
  }

  return html;
}

function months() {
  return [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December",
    "Any month"
  ];
}

async function submitEnquiry() {
  if (!formData.firstName || !formData.email) {
    alert("Please enter your first name and email address.");
    return;
  }

  if (!N8N_WEBHOOK_URL) {
    console.log("Safari Enquiry:", formData);
    showSuccess();
    return;
  }

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) throw new Error("Submission failed");

    showSuccess();
  } catch (error) {
    console.error(error);
    alert("We couldn't send your enquiry. Please try again.");
  }
}

function showSuccess() {
  app.innerHTML = `
    <section class="success-page">
      <div class="eyebrow">YOUR JOURNEY STARTS HERE</div>

      <h1>Enquiry Sent!</h1>

      <p>
        Thank you, ${formData.firstName}.<br>
        We've received your travel preferences and will use them to shape your Kenya safari.
      </p>

      <p>A travel specialist will be in touch to discuss the next steps.</p>

      <br>

      <button class="primary-btn" onclick="showHome()">Done</button>

      <div class="success-divider"></div>

      <h2>In the meantime...</h2>

      <p>Discover a little more about Kenya while your journey starts taking shape.</p>

      <div class="trip-grid" style="margin-top:45px; text-align:left;">
        ${tripCard(
          safariImage(),
          "The Masai Mara",
          "KENYA",
          "Wildlife, wide-open landscapes and unforgettable safari experiences."
        )}

        ${tripCard(
          migrationImage(),
          "When to See the Migration",
          "TRAVEL GUIDE",
          "Understand how the migration changes throughout the year."
        )}

        ${tripCard(
          lionImage(),
          "Kenya's Big Cats",
          "WILDLIFE",
          "Discover some of the best places to encounter lion, cheetah and leopard."
        )}

        ${tripCard(
          beachImage(),
          "Safari & Beach",
          "JOURNEY IDEA",
          "Pair the bush with a few relaxed days beside the Indian Ocean."
        )}
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
}

function safariImage() {
  return "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85";
}

function migrationImage() {
  return "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85";
}

function lionImage() {
  return "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=1200&q=85";
}

function beachImage() {
  return "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85";
}

function familyImage() {
  return "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=85";
}

showHome();
