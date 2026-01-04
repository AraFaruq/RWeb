// ===== Helpers =====
const $ = (sel, parent = document) => parent.querySelector(sel);
const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

const i18n = {
  en: {
    brand: "Shaxawan muhammed majed company   ",
    nav_home: "Home",
    nav_products: "Our Products",
    nav_contact: "Contact Us",
    nav_cta: "Shop Now",
    nav_cta2: "Contact on Facebook",

    hero_pill: "Modern • Strong • Reliable",
    hero_title: "Premium Garage Doors for Modern Homes.",
    hero_sub: "Durable materials, smooth operation, and clean design — made for everyday use.",
    hero_btn_products: "Browse Doors",
    hero_btn_contact: "Contact Us",
    hero_badge: "Best Seller",
    hero_price: "with the best price",
    hero_card_title: "Modern Roll-Up Door",
    hero_card_sub: "Smooth • Secure • Quiet",

    stat1_num: "Strong",
    stat1_lbl: "Materials",
    stat2_num: "Fast",
    stat2_lbl: "Installation",
    stat3_num: "Clean",
    stat3_lbl: "Design",

    why_title: "Why customers choose us",
    why_sub: "Quality doors, professional service, clean finishing.",
    f1_title: "Durable build",
    f1_sub: "Made to handle daily use and tough weather.",
    f2_title: "Installation",
    f2_sub: "Fast setup with safe, clean work.",
    f3_title: "Secure options",
    f3_sub: "Strong locks and smooth opening systems.",

    cta_title: "Need a new garage door?",
    cta_sub: "See our styles and contact us on Facebook.",
    cta_btn: "View Products",

    products_title: "Our Garage Doors",
    products_sub: "Browse our styles — contact us on Facebook for price & installation.",
    search_placeholder: "Search doors...",
    products_note: "Message us on Facebook with your size and location — we reply with price and time.",
    go_contact: "Go to Contact",

    contact_title: "Contact Us",
    contact_sub: "The fastest way to order is via Facebook message.",
    contact_fast: "Message us on Facebook",
    contact_hint: "Click the button below — send your door size + location, and we will reply with price and installation time.",
    contact_btn: "Open Facebook Page",
    contact_note: "Tip: include width/height + door type (roll-up / sectional / motor).",

    footer_desc: "Garage doors with modern look and reliable performance.",
    footer_pages: "Pages",
    footer_contact: "Contact",
    footer_email: "Facebook: Message us",
    footer_phone: "Phone: 07701465720",
    footer_rights: "All rights reserved.",

    our_info: "Our Info",
    hours: "Hours: Sat–Thu, 10:00–18:00",
    quick_tip: "Quick Tip",
    quick_tip_text: "If you want a motorized door, tell us ",
    browse_products: "Browse Products"
  },

  // Kurdish (Sorani)
  ku: {
    brand: "کۆمپانیای شاخەوان محمد مجید",
    nav_home: "سەرەکی",
    nav_products: "بەرهەمەکانمان",
    nav_contact: "پەیوەندیمان پێوەبکە",
    nav_cta: "بازاڕکردن",
    nav_cta2: "ئێمە لە فەیسبووک",

    hero_pill: "مۆدێرن • بەهێز • دڵنیا",
    hero_title: "دەرگای گەراج بۆ ماڵی و شوێنەکانتان بە شێوازی مۆدێرن.",
    hero_sub: "ماددەی بەهێز، کارکردنی پتەو، و دیزاینی پاک — بۆ بەکارهێنانی ڕۆژانە.",
    hero_btn_products: "بینینی دەرگا",
    hero_btn_contact: "پەیوەندی",
    hero_badge: "فرۆشتراوترین",
    hero_price: " بە گونجاوترین نرخ ",
    hero_card_title: "دەرگای رول-ئەپی مۆدێرن",
    hero_card_sub: "پتەو • پارێزراو • بێدەنگ",

    stat1_num: "بەهێز",
    stat1_lbl: "لە ماددە",
    stat2_num: "خێرای",
    stat2_lbl: "لە دانان",
    stat3_num: "پاکی",
    stat3_lbl: "دیزاین",

    why_title: "بۆچی خەڵک هەڵمان دەبژێرن؟",
    why_sub: "جۆری باش، خزمەتگوزاری باش، و بە کەمترینکات.",
    f1_title: "دروستکردنی بەهێز",
    f1_sub: "بۆ بەکارهێنانی ڕۆژانە و کەش و هەوا.",
    f2_title: "دانان",
    f2_sub: "دانانی خێرا بە کاری پاک و پارێزراو.",
    f3_title: "پاراستن",
    f3_sub: "قوفڵی بەهێز و سیستەمی کردنەوەی نەرم.",

    cta_title: "پێویستت بە دەرگای نوێی گەراجە؟",
    cta_sub: "جۆرەکان ببینە و لە فەیسبووک پەیوەندیمان پێوە بکە.",
    cta_btn: "بینینی بەرهەمەکان",

    products_title: "دەرگا گەراجەکانمان",
    products_sub: "جۆرەکان ببینە — بۆ نرخ و دانانی لە فەیسبووک پەیوەندیمان پێوە بکە.",
    search_placeholder: "گەڕان بۆ دەرگا...",
    products_note: "لە فەیسبووک نامەمان بۆ بنێرە بەپێ قەبارە و شوێنەکەت — وەڵام دەدەینەوە بە نرخ و کاتی گونجاو.",
    go_contact: "چوون بۆ پەیوەندی",

    contact_title: "پەیوەندی",
    contact_sub: "خێراترین ڕێگا بۆ داواکردن نامەی فەیسبووکە.",
    contact_fast: "لە فەیسبووک نامەمان بۆ بنێرە",
    contact_hint: "دوگمەکە دابگرە — قەبارەی دەرگا + شوێن بنێرە، ئێمە وەڵامت دەدەینەوە بە نرخ و کاتی دانان.",
    contact_btn: "کردنەوەی پەیجی فەیسبووک",
    contact_note: "تێبینی: پانی/بەرزی + جۆری دەرگا بنووسە (رول-ئەپ / سێکشەنال / مۆتۆر).",

    footer_desc: "دەرگای گەراج بە دیزاینی مۆدێرن و کارکردنی دڵنیا.",
    footer_pages: "پەڕەکان",
    footer_contact: "پەیوەندی",
    footer_email: "فەیسبووک: نامەمان بۆ بنێرە",
    footer_phone: "تەلەفۆن: 07701465720",
    footer_rights: "وەکیلی سەرەکی ئێرالێکس - کارگەی ناوشاخان.",

    our_info: "زانیاری",
    place: "shakawanmuhammed552@gmailcom",
    quick_tip: "تێبینی خێرا",
    quick_tip_text: ".",
    browse_products: "بینینی بەرهەمەکان"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.dir = (lang === "ku") ? "rtl" : "ltr";
  document.documentElement.lang = (lang === "ku") ? "ku" : "en";

  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  $$("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[lang][key]) el.setAttribute("placeholder", i18n[lang][key]);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = $(".nav-toggle");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    $$(".nav a", nav).forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Language toggle
  const btn = $("#langBtn");
  const saved = localStorage.getItem("lang") || "en";
  setLang(saved);

  if (btn) {
    btn.addEventListener("click", () => {
      const current = localStorage.getItem("lang") || "en";
      setLang(current === "en" ? "ku" : "en");

      // Re-render products if on products page so buttons/text match language
      initProductsPage(true);
    });
  }

  initProductsPage(false);
});

// ===== Products Page (NO categories, NO ordering) =====
function initProductsPage(force = false) {
  const grid = $("#productsGrid");
  if (!grid) return;

  const products = [
  { id: 1, title: "Roll-Up Garage Door", price:"contact us", desc: "Strong steel roll-up door with smooth movement.", img: "img/12.jpg" },
  { id: 2, title: "Sectional Garage Door", price:"contact us", desc: "Modern sectional panels with clean finishing.", img: "img/7.jpg" },
  { id: 3, title: "Motorized System Option", price:"contact us", desc: "Remote control motor option for easy opening.", img: "img/2.jpg" },
  { id: 4, title: "Insulated Garage Door", price:"contact us", desc: "Reduces noise and helps temperature stability.", img: "img/3.jpg" },
  { id: 5, title: "Heavy-Duty Roll-Up", price:"contact us", desc: "Extra thick build for warehouses and shops.", img: "img/4.jpg" },
  { id: 6, title: "Anti-Rust Coating Upgrade", price:"contact us", desc: "Protective coating for longer life and better look.", img: "img/5.jpg" },
  { id: 7, title: "Roll-Up Garage Door", price:"contact us", desc: "Strong steel roll-up door with smooth movement.", img: "img/6.jpg" },
  { id: 8, title: "Sectional Garage Door", price:"contact us", desc: "Modern sectional panels with clean finishing.", img: "img/1.jpg" },
  { id: 9, title: "Motorized System Option", price:"contact us", desc: "Remote control motor option for easy opening.", img: "img/8.jpg" },
  { id: 10, title: "Insulated Garage Door", price:"contact us", desc: "Reduces noise and helps temperature stability.", img: "img/9.jpg" },
  { id: 11, title: "Heavy-Duty Roll-Up", price:"contact us", desc: "Extra thick build for warehouses and shops.", img: "img/10.jpg" },
  { id: 12, title: "Anti-Rust Coating Upgrade", price:"contact us", desc: "Protective coating for longer life and better look.", img: "img/11.jpg" }
];


  const searchInput = $("#searchInput");

function render(list) {
  grid.innerHTML = list.map(p => `
    <article class="product" data-id="${p.id}">
      <div class="product-img">
        <img src="${p.img}" alt="${escapeHtml(p.title)}">
      </div>

      <div class="product-body">
        <h3 class="product-title">${escapeHtml(p.title)}</h3>
        <p class="product-desc">${escapeHtml(p.desc)}</p>

        <div class="product-row">
          <div class="price">$${p.price}</div>
        </div>

        <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
          <button class="btn primary" data-view>View</button>
        </div>
      </div>
    </article>
  `).join("");

  $$("[data-view]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".product");
      const id = Number(card.dataset.id);
      openProductModal(products.find(x => x.id === id));
    });
  });
}

  function applyFilters() {
    const q = (searchInput?.value || "").trim().toLowerCase();
    const filtered = products.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
    render(filtered);
  }

  if (!force && searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  render(products);
}

// ===== Modal =====
function openProductModal(product) {
  const modal = $("#productModal");
  if (!modal || !product) return;

  // TEXT
  $("#modalTitle").textContent = product.title;
  $("#modalDesc").textContent = product.desc;
  $("#modalPrice").textContent = `$${product.price}`;

  // IMAGE (THIS WAS MISSING)
  const modalImage = $("#modalImage");
  modalImage.innerHTML = `
    <img src="${product.img}" alt="${escapeHtml(product.title)}">
  `;

  // SHOW MODAL
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  // CLOSE LOGIC
  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  $$("[data-close]", modal).forEach(el =>
    el.addEventListener("click", close)
  );

  document.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") {
      close();
      document.removeEventListener("keydown", esc);
    }
  });
}


// ===== Utils =====
function escapeHtml(s){
  return s.replace(/[&<>"']/g, (c) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}
