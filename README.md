# Pole Pole — Safari, softly done.

A static HTML, CSS and JavaScript website. No installation or build step is needed.

## Preview and publish
Open index.html in a modern browser, or serve this folder with any static server.
Upload **the contents of this folder** to the root of your GitHub repository (index.html, app.js, styles.css, testimonials.js, assets, and .nojekyll).
Enable Settings → Pages → Deploy from a branch → main / root.
All local asset paths are relative, so GitHub project pages work too.

## This revision
- Cream, terracotta and cocoa palette, serif typography and a reusable acacia logo.
- Full-width photographic hero, six itinerary cards on large screens and roomier sections.
- “Safari Itineraries” replaces “Sample Trips”. Cards preselect their destination in the existing planner.
- Honeymoon, anniversary and milestone birthday entry points carry the occasion into the planner.
- A branded invitation appears after 30% of the page has been scrolled (at least 500px), once per browser-tab session. It opens the existing safari planner.
- The invitation supports Escape, outside click, keyboard focus containment, scroll locking and dismissal. Storage restrictions do not break it.
- Traveller-story cards replace the image gallery. The empty-state cards are explicitly labelled layout previews.
- A spacious five-column footer adapts to mobile. Only the contact number supplied in the original website is used; unconfigured social/Telegram links and third-party awards are omitted.
- Gentle scroll reveals respect reduced-motion preferences. Mobile navigation and skip navigation are included.

## Add real traveller reviews
Edit testimonials.js. Put approved entries in window.POLE_POLE_TESTIMONIALS:

    {
      quote: 'The guest’s approved review text',
      name: 'Guest’s approved display name',
      trip: 'Kenya & Tanzania · 10 days',
      image: 'assets/your-guest-photo.jpg',
      alt: 'A description of the guest photo'
    }

Add photos to assets. Use local .jpg, .jpeg, .png or .webp paths. The layout switches automatically from clearly labelled previews to guest reviews. Do not publish invented testimonials or ratings.

## Enquiry delivery
Set N8N_WEBHOOK_URL near the top of app.js to your production webhook, configured to accept JSON POST requests from your website origin.
**Until this is configured, enquiries are not sent or stored remotely.** Visitors get an honest explanation, a local text download of their preferences and the existing phone contact. The old false “enquiry received” message has been removed from this unconfigured path.
With a configured webhook, the success screen appears only after an HTTP success response. Test your webhook and CORS configuration before enabling live enquiries. Never put private API keys in this public client code.

## Assets and maintenance
All imagery is bundled locally. The supplied wildlife photographs are retained; confirm their original usage permissions before publishing. The beach and crater assets are AI-generated illustrative destination imagery; see ASSET-NOTES.md. Cormorant Garamond and Manrope are bundled in assets/fonts with their SIL Open Font License files. No external font or image requests are required.
The acacia SVG is a new editable vector approximation inspired by the reference.
The contact number is inherited from the source archive: +98 912 465 0161.
The website language remains English, as in the provided design.
