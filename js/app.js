/* ═══════════════════════════════════════════════
   FARAH — Shared App Logic (Nav, Routing, UI)
═══════════════════════════════════════════════ */

/* ─── Render Navigation ─── */
function renderNav() {
  const user = Auth.getCurrentUser();
  const isVendor = user && user.type === 'vendor';
  const isCouple = user && user.type === 'couple';

  const authSection = user ? `
    <div class="nav-user">
      <div class="nav-user-avatar">${escHtml(user.name.charAt(0).toUpperCase())}</div>
      <span>${escHtml(user.name.split(' ')[0])}</span>
    </div>
    ${isCouple ? `<a href="dashboard.html" style="color:rgba(255,255,255,0.85);font-size:0.85rem;font-weight:500">My Planner</a>` : ''}
    ${isVendor ? `<a href="vendor-dashboard.html" style="color:rgba(255,255,255,0.85);font-size:0.85rem;font-weight:500">My Dashboard</a>` : ''}
    <button class="btn-nav-logout" onclick="Auth.logout()">Sign Out</button>
  ` : `
    <button class="btn-nav-login" onclick="window.location='auth.html'">Log In</button>
    <button class="btn-nav-signup" onclick="window.location='auth.html'">Join Free</button>
  `;

  return `
    <nav class="nav">
      <div class="nav-logo">
        <a href="index.html">FARAH<small>فرح · Palestinian Wedding Marketplace</small></a>
      </div>
      <div class="nav-links">
        <a href="vendors.html">Find Vendors</a>
        <a href="vendors.html#categories">Categories</a>
        <a href="index.html#about">About</a>
        <a href="auth.html?type=vendor">For Vendors</a>
      </div>
      <div class="nav-auth">${authSection}</div>
    </nav>
  `;
}

function mountNav() {
  const el = document.getElementById('nav-root');
  if (el) el.outerHTML = renderNav();
}

/* ─── Vendor Card HTML ─── */
function vendorCardHTML(v) {
  const wishlisted = Wishlist.has(v.id);
  const badge = v.badge ? `<span class="vendor-badge ${v.badgeType}">${escHtml(v.badge)}</span>` : '';
  return `
    <div class="vendor-card" data-category="${escHtml(v.category)}" onclick="window.location='vendor.html?id=${v.id}'">
      <div class="vendor-img-wrap">
        <div class="vendor-img-placeholder" style="background:${v.gradient}">${v.emoji}</div>
        ${badge}
      </div>
      <div class="vendor-body">
        <div class="vendor-cat-label">${escHtml(v.category)}</div>
        <div class="vendor-name">${escHtml(v.name)}</div>
        <div class="vendor-name-ar">${escHtml(v.nameAr)}</div>
        <div class="vendor-location">📍 ${escHtml(v.city)}</div>
        <div class="vendor-tags">${v.tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>
        <div class="vendor-footer">
          <div class="vendor-price">${formatCurrency(v.price)} <small>/ ${escHtml(v.priceUnit)}</small></div>
          <div class="stars">${starsHTML(v.rating)} <span>(${v.reviews})</span></div>
          <button class="wishlist-btn" onclick="event.stopPropagation();handleWishlist(${v.id},this)" title="Save">${wishlisted ? '❤️' : '🤍'}</button>
        </div>
      </div>
    </div>
  `;
}

function handleWishlist(id, btn) {
  const added = Wishlist.toggle(id);
  btn.textContent = added ? '❤️' : '🤍';
  btn.style.transform = 'scale(1.35)';
  setTimeout(() => btn.style.transform = '', 180);
  showToast(added ? 'Added to your wishlist ❤️' : 'Removed from wishlist', added ? 'success' : 'info');
}

/* ─── Render Footer ─── */
function renderFooter() {
  return `
    <footer>
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="logo">FARAH · فرح</div>
          <p>The Palestinian wedding marketplace — connecting couples with trusted vendors across the homeland and the global diaspora.</p>
        </div>
        <div class="footer-col">
          <h4>For Couples</h4>
          <a href="vendors.html">Find Vendors</a>
          <a href="dashboard.html">Wedding Planner</a>
          <a href="vendors.html">Inspiration Gallery</a>
          <a href="auth.html">Sign Up Free</a>
        </div>
        <div class="footer-col">
          <h4>For Vendors</h4>
          <a href="auth.html?type=vendor">List Your Business</a>
          <a href="vendor-dashboard.html">Vendor Dashboard</a>
          <a href="auth.html?type=vendor">Get Started</a>
        </div>
        <div class="footer-col">
          <h4>About Farah</h4>
          <a href="index.html#about">Our Story</a>
          <a href="#">Community Values</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Farah Wedding Marketplace — <em style="color:var(--gold)">فرحك يبدأ هنا</em></span>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:0.72rem">Made with ❤️ for Palestine</span>
          <div class="palestine-flag"><div class="pf-black"></div><div class="pf-white"></div><div class="pf-green"></div></div>
        </div>
      </div>
    </footer>
  `;
}

function mountFooter() {
  const el = document.getElementById('footer-root');
  if (el) el.outerHTML = renderFooter();
}

/* ─── Availability Calendar ─── */
const _MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const _DAY_LABELS  = ['Su','Mo','Tu','We','Th','Fr','Sa'];

function _buildCalMonth(vendorId, year, month, opts) {
  const { interactive = false, selectedDate = '' } = opts || {};
  const avail = Availability.get(vendorId);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay    = new Date(year, month, 1).getDay();

  const labels = _DAY_LABELS.map(d => `<div class="cal-lbl">${d}</div>`).join('');
  let cells = '';
  for (let i = 0; i < firstDay; i++) cells += `<div class="cal-cell"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const ds  = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const past = new Date(year, month, d) < today;
    const status = avail[ds] || 'available';
    const sel  = !interactive && ds === selectedDate;
    let cls = 'cal-cell';
    let click = '';
    if (past) {
      cls += ' cal-past';
    } else if (status === 'booked') {
      cls += ' cal-booked';
      if (interactive) click = `onclick="calDashToggle(${vendorId},'${ds}',this)"`;
    } else {
      cls += ' cal-avail';
      if (sel)         cls += ' cal-sel';
      if (interactive) click = `onclick="calDashToggle(${vendorId},'${ds}',this)"`;
      else             click = `onclick="calPickDate('${ds}')"`;
    }
    cells += `<div class="${cls}" title="${ds}" ${click}>${d}</div>`;
  }

  const navBtns = interactive ? `
    <button class="cal-nav-btn" onclick="calDashNav(-1)">&#8249;</button>
    <button class="cal-nav-btn" onclick="calDashNav(1)">&#8250;</button>` : '';

  return `<div class="cal-month">
    <div class="cal-month-hd">${navBtns ? `<span>${navBtns.split('</button>')[0]}</span>` : ''}
      <span class="cal-month-title">${_MONTH_NAMES[month]} ${year}</span>
      ${navBtns ? `<span>${navBtns.split('</button>')[1].replace('</button>','')}</span>` : ''}
    </div>
    <div class="cal-grid">${labels}${cells}</div>
  </div>`;
}

// Render 2-month read-only calendar (vendor.html)
function renderAvailCalendar(vendorId, containerId, selectedDate) {
  const now = new Date();
  const y = now.getFullYear(), m = now.getMonth();
  const ny = m === 11 ? y + 1 : y, nm = m === 11 ? 0 : m + 1;
  document.getElementById(containerId).innerHTML =
    `<div class="cal-two-col">` +
    _buildCalMonth(vendorId, y, m, { selectedDate }) +
    _buildCalMonth(vendorId, ny, nm, { selectedDate }) +
    `</div>
    <div class="cal-legend">
      <span class="cal-leg-item"><span class="cal-leg-dot" style="background:rgba(0,122,61,0.18);border:1px solid rgba(0,122,61,0.3)"></span> Available</span>
      <span class="cal-leg-item"><span class="cal-leg-dot" style="background:rgba(139,26,26,0.12)"></span> Booked</span>
      <span class="cal-leg-item"><span class="cal-leg-dot" style="background:var(--crimson)"></span> Selected</span>
    </div>`;
}

// Render single interactive month (vendor-dashboard.html)
let _calDashState = { vendorId: null, year: null, month: null };
function renderDashCalendar(vendorId) {
  const now = new Date();
  _calDashState = { vendorId, year: now.getFullYear(), month: now.getMonth() };
  _refreshDashCal();
}
function _refreshDashCal() {
  const { vendorId, year, month } = _calDashState;
  const el = document.getElementById('dash-cal-wrap');
  if (!el) return;
  el.innerHTML = _buildCalMonth(vendorId, year, month, { interactive: true });
}
function calDashNav(dir) {
  let { year, month } = _calDashState;
  month += dir;
  if (month < 0)  { month = 11; year--; }
  if (month > 11) { month = 0;  year++; }
  const today = new Date();
  if (year < today.getFullYear() || (year === today.getFullYear() && month < today.getMonth())) return;
  _calDashState.year = year; _calDashState.month = month;
  _refreshDashCal();
}
function calDashToggle(vendorId, dateStr, el) {
  const newStatus = Availability.toggle(vendorId, dateStr);
  el.className = el.className.replace(/cal-avail|cal-booked/g, '').trim();
  el.className += newStatus === 'booked' ? ' cal-booked' : ' cal-avail';
  showToast(newStatus === 'booked' ? 'Marked as booked' : 'Marked as available', newStatus === 'booked' ? 'error' : 'success');
}

/* ─── Init on DOM ready ─── */
document.addEventListener('DOMContentLoaded', () => {
  mountNav();
  mountFooter();
});
