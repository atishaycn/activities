# Activities website

A static front-end MVP for a family activity discovery platform inspired by the user brief.

## Included pages

- `index.html` — homepage with the 4 dropdown paths
- `about.html` — platform offering, founder story, market context
- `classes.html` — discovery catalog with category rows and filters
- `activities.html` — modern all-activities product grid with search, filters and quick view
- `partners.html` — list a class / partner inquiry page
- `contact.html` — reach us page
- `privacy.html`
- `terms-users.html`
- `terms-partners.html`

## MVP features

- Discovery across:
  - Extra-curricular classes
  - Sports
  - Academic classes
  - Extra-academy classes
  - Summer camps
  - Weekend workshops
  - Kids Trending articles
- Per-category filters for:
  - Area
  - Age-group
  - Month
- Local reminder saving with browser storage
- Calendar download (`.ics`) for class listings
- Shared footer with quick links and policy links

## Run locally

Because this is a static site, any simple file server works.

### Python

```bash
python3 -m http.server 3000
```

Then open:

- `http://localhost:3000`

## Notes

- Contact and partner forms are front-end only and currently show a confirmation toast.
- Reminder state is stored in `localStorage`.
- Content can be updated directly in `script.js` and the HTML files.
