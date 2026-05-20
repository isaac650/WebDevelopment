async function loadListings() {
  const container = document.getElementById("listings");
  const skeleton = document.getElementById("skeleton-loader");
  const counter = document.getElementById("listing-count");

  try {
    const response = await fetch("airbnb_sf_listings_500.json");
    const data = await response.json();
    const listings = data.slice(0, 50);

    skeleton.remove();
    counter.textContent = `(${listings.length} stays)`;

    listings.forEach((listing) => {
      container.appendChild(createCard(listing));
    });

    window._allCards = [...container.querySelectorAll(".listing-col")];
  } catch (err) {
    skeleton.innerHTML = `<p class="text-danger">Failed to load listings: ${err.message}</p>`;
  }
}

function createCard(listing) {
  const amenities = parseAmenities(listing.amenities).slice(0, 4);
  const col = document.createElement("div");
  col.className = "col listing-col";
  col.dataset.name = (listing.name || "").toLowerCase();
  col.dataset.type = (listing.room_type || "").toLowerCase();

  col.innerHTML = `
    <div class="card h-100">
      <img
        src="${listing.picture_url || 'https://via.placeholder.com/400x200?text=No+Image'}"
        class="card-img-top"
        alt="${escHtml(listing.name || 'Listing')}"
        onerror="this.src='https://via.placeholder.com/400x200?text=No+Image'"
      />
      <div class="card-body">
        <h5 class="card-title">${escHtml(shortTitle(listing.name || "Unnamed"))}</h5>
        <p class="card-text text-muted small">${escHtml(truncate(stripHtml(listing.description || "No description."), 100))}</p>
        <div class="mb-2">
          ${amenities.map(a => `<span class="badge bg-secondary me-1 amenity-badge">${escHtml(a)}</span>`).join("")}
        </div>
        <div class="d-flex align-items-center gap-2 mb-2">
          <img
            src="${listing.host_thumbnail_url || 'https://via.placeholder.com/32?text=H'}"
            class="host-avatar"
            alt="${escHtml(listing.host_name || 'Host')}"
            onerror="this.src='https://via.placeholder.com/32?text=H'"
          />
          <small class="text-muted">Hosted by <strong>${escHtml(listing.host_name || "Unknown")}</strong></small>
        </div>
        <p class="mb-1"><strong>${escHtml(listing.price || "N/A")}</strong> <small class="text-muted">/ night</small></p>
        ${listing.review_scores_rating ? `<p class="mb-0 small">⭐ ${parseFloat(listing.review_scores_rating).toFixed(2)}</p>` : ""}
      </div>
      <div class="card-footer">
        <a href="${listing.listing_url || '#'}" target="_blank" class="btn btn-dark btn-sm w-100">View on Airbnb</a>
      </div>
    </div>
  `;
  return col;
}

function setupSearch() {
  const input = document.getElementById("search-input");
  const typeFilter = document.getElementById("type-filter");
  const counter = document.getElementById("listing-count");

  function filter() {
    const q = input.value.toLowerCase();
    const t = typeFilter.value.toLowerCase();
    let count = 0;
    window._allCards.forEach(col => {
      const match = (!q || col.dataset.name.includes(q)) && (!t || col.dataset.type.includes(t));
      col.style.display = match ? "" : "none";
      if (match) count++;
    });
    counter.textContent = `(${count} stays)`;
  }

  input.addEventListener("input", filter);
  typeFilter.addEventListener("change", filter);
}

function parseAmenities(raw) {
  if (!raw) return [];
  try { return JSON.parse(raw); }
  catch { return raw.replace(/[\[\]"]/g, "").split(",").map(s => s.trim()).filter(Boolean); }
}

function truncate(str, max) { return str.length > max ? str.slice(0, max) + "…" : str; }
function stripHtml(str) { return str.replace(/<[^>]*>/g, "").trim(); }
function escHtml(str) { return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function shortTitle(name) { return truncate(name.replace(/·.*$/, "").trim() || name, 50); }

document.addEventListener("DOMContentLoaded", () => {
  loadListings().then(() => setupSearch());
});
