# 🏠 Airbnb SF Listings

A responsive web page that loads and displays the first **50 San Francisco Airbnb listings** from a JSON file using **AJAX (fetch & await)**.

🔗 **[Live Demo →](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME)**

---

## Features

- **AJAX data loading** — All listings are fetched asynchronously using `fetch` and `await`, with no page reload
- **Skeleton loader** — Animated placeholder cards shown while data loads
- **Listing cards** showing:
  - Thumbnail image
  - Listing name & description
  - Amenities (first 4 shown as chips, remainder counted)
  - Host name & photo
  - Price per night
  - Star rating
  - Room type & bedroom/bed count
- **Search** — Filter listings in real time by name or neighbourhood
- **Room type filter** — Dropdown to filter by Entire home, Private room, etc.
- **🎨 Creative addition: Neighbourhood colour-coding** — Each San Francisco neighbourhood gets a unique accent colour applied consistently across all its listing cards, making it easy to visually group stays by area at a glance

---

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript (ES2017+)
- Bootstrap 5.3 (grid, navbar, responsive utilities)
- Google Fonts (Plus Jakarta Sans + Fraunces)
- Data: `airbnb_sf_listings_500.json` (first 50 records used)

---

## Running Locally

Because `fetch` requires HTTP (not `file://`), run a local server:

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080
```

Or use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension.

---

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
5. Update the Live Demo link at the top of this README

---

## File Structure

```
├── index.html                    # Main page
├── css/
│   └── main.css                  # All custom styles
├── js/
│   └── main.js                   # AJAX fetch, card rendering, search/filter
├── airbnb_sf_listings_500.json   # Data source (500 listings, first 50 used)
└── README.md
```
