const instagramUrl = "https://www.instagram.com/yenmay2hand/";
const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=45/3+An+Hai+Dong+1+Street,+Son+Tra,+Da+Nang";
const phoneNumber = "0906 452 023";

const copy = {
  en: {
    lang: "en",
    title: "Yen May Vintage | Y2K secondhand clothing in Da Nang",
    description:
      "Yen May Vintage is a small Y2K and vintage shop in Son Tra, Da Nang. Visit for hand-picked clothes, bags, and accessories selected for fabric, form, condition, and character.",
    headerCta: "Get Directions",
    nav: {
      "brand-heart": "Shop Point",
      finds: "Pieces",
      moments: "Customer Wall",
      visit: "Visit",
    },
    heroEyebrow: "45/3 An Hai Dong 1 - Da Nang",
    heroTitleSpan: "& Y2K Secondhand Clothing",
    heroText:
      "A small room for Y2K, vintage, bags, and accessories picked piece by piece. Come try things on, check the fabric, take a mirror moment, and keep the one that feels like yours.",
    shopNote: "Good clothes. Good mood. Good people.",
    openMaps: "Open Google Maps",
    seeDrops: "See New Drops",
    callUs: "Call 0906 452 023",
    findsEyebrow: "On the rack lately",
    findsTitle: "Pieces that made the wall.",
    findsText: "Not a full catalog. Stock changes quickly, so DM before visiting if one piece is the reason for your trip.",
    momentsEyebrow: "Customer wall",
    momentsTitle: "More faces, more mirror moments.",
    momentsText: "Real customer photos and in-shop moments. More proof of how pieces feel on people, not only on hangers.",
    visitEyebrow: "Visit the shop",
    visitTitle: "Walk the alley, check the rack, try the piece.",
    visitText:
      "Yen May is small, made for slow browsing: look through colors, touch fabrics, try what catches your eye, and take the mirror check.",
    askInstagram: "Ask on Instagram",
    shareItem: "Share",
    ariaShare: "Share this piece",
    shareTooltip: "Share this piece",
    altSelected: "selected by Yen May Vintage",
    statuses: {
      "In shop": "In shop",
      "On hold": "On hold",
      Sold: "Sold",
    },
    toastCopied: (title) => `Copied item name: ${title}. Heading to Instagram?`,
    toastShared: (title) => `Shared ${title}. You can send it straight into Instagram DM.`,
    toastShareFallback: (title) => `Link copied for ${title}. Paste it in Instagram DM.`,
  },
  vi: {
    lang: "vi",
    title: "Yen May Vintage | Đồ secondhand Y2K tại Đà Nẵng",
    description:
      "Yen May Vintage là tiệm Y2K và vintage nhỏ ở Sơn Trà, Đà Nẵng. Ghé xem quần áo, túi và phụ kiện được chọn kỹ theo chất vải, phom dáng, tình trạng và cá tính.",
    headerCta: "Chỉ đường",
    nav: {
      "brand-heart": "Chất tiệm",
      finds: "Món nổi bật",
      moments: "Khách ghé tiệm",
      visit: "Ghé shop",
    },
    heroEyebrow: "45/3 An Hải Đông 1 - Đà Nẵng",
    heroTitleSpan: "& Đồ secondhand Y2K",
    heroText:
      "Một căn phòng nhỏ cho Y2K, vintage, túi và phụ kiện được chọn từng món. Ghé thử đồ, chạm chất vải, soi gương rồi giữ lại món hợp với bạn nhất.",
    shopNote: "Đồ đẹp. Mood đẹp. Người cũng đẹp.",
    openMaps: "Mở Google Maps",
    seeDrops: "Xem đồ mới",
    callUs: "Gọi 0906 452 023",
    findsEyebrow: "Đồ mới lên kệ",
    findsTitle: "Những món vừa chạm mắt.",
    findsText: "Không phải catalog đầy đủ. Đồ đổi nhanh, nên nhắn trước nếu bạn ghé tiệm vì một món cụ thể.",
    momentsEyebrow: "Góc khách ghé",
    momentsTitle: "Nhiều gương hơn, nhiều khoảnh khắc hơn.",
    momentsText: "Ảnh khách thật và khoảnh khắc trong shop. Dễ hình dung món đồ lên người hơn là chỉ nhìn trên móc.",
    visitEyebrow: "Ghé tiệm",
    visitTitle: "Đi vào hẻm, xem kệ đồ, thử món bạn thích.",
    visitText:
      "Yên Mây nhỏ và hợp để xem chậm: ngắm màu, chạm vải, thử món nào hút mắt rồi soi gương kỹ trước khi chốt.",
    askInstagram: "Hỏi trên Instagram",
    shareItem: "Chia sẻ",
    ariaShare: "Chia sẻ món này",
    shareTooltip: "Chia sẻ món đồ này",
    altSelected: "được Yên Mây chọn",
    statuses: {
      "In shop": "Còn tại shop",
      "On hold": "Đang giữ",
      Sold: "Đã bán",
    },
    toastCopied: (title) => `Đã sao chép tên: ${title}. Chuyển sang Instagram ngay?`,
    toastShared: (title) => `Đã chia sẻ ${title}. Có thể gửi thẳng vào Instagram DM.`,
    toastShareFallback: (title) => `Đã sao chép link ${title}. Dán vào Instagram DM nhé.`,
  },
};

const finds = [
  {
    title: { en: "Denim Mini", vi: "Chân váy denim mini" },
    image: "./assets/find-1.jpg",
    size: { en: "Size S-M", vi: "Size S-M" },
    condition: { en: "Clean, ready to wear", vi: "Sạch, mặc ngay" },
    status: "In shop",
    reason: {
      en: "Washed blue, clean shape, easy Y2K proportion.",
      vi: "Xanh wash vừa mắt, phom gọn, tỷ lệ Y2K dễ mặc.",
    },
  },
  {
    title: { en: "Knit Rib Top", vi: "Áo len gân ôm" },
    image: "./assets/find-2.jpg",
    size: { en: "Size M", vi: "Size M" },
    condition: { en: "Good vintage condition", vi: "Tình trạng vintage tốt" },
    status: "On hold",
    reason: {
      en: "Fitted shape, warm tone, soft enough for daily wear.",
      vi: "Phom ôm nhẹ, tông ấm, mặc hằng ngày vẫn mềm và dễ chịu.",
    },
  },
  {
    title: { en: "Shoulder Bag", vi: "Túi đeo vai" },
    image: "./assets/find-3.jpg",
    size: { en: "Compact carry", vi: "Nhỏ gọn đeo đi chơi" },
    condition: { en: "Light wear visible", vi: "Có dấu vết dùng nhẹ" },
    status: "In shop",
    reason: {
      en: "Neat hardware, compact carry, strong vintage character.",
      vi: "Phần kim loại gọn đẹp, dáng túi nhỏ xinh, chất vintage rõ nét.",
    },
  },
  {
    title: { en: "Lace Cami", vi: "Áo hai dây ren" },
    image: "./assets/find-4.jpg",
    size: { en: "Size XS-S", vi: "Size XS-S" },
    condition: { en: "Clean, ready to wear", vi: "Sạch, mặc ngay" },
    status: "In shop",
    reason: {
      en: "Delicate trim, soft fabric, easy to layer.",
      vi: "Viền ren nhỏ xinh, vải mềm, dễ phối layer.",
    },
  },
  {
    title: { en: "Cargo Skirt", vi: "Chân váy cargo" },
    image: "./assets/find-5.jpg",
    size: { en: "Size M-L", vi: "Size M-L" },
    condition: { en: "Minor fade marks", vi: "Có bạc màu nhẹ" },
    status: "Sold",
    reason: {
      en: "Pocket detail, lived-in color, useful travel fit.",
      vi: "Túi đẹp mắt, màu có độ lived-in, hợp đi chơi và du lịch.",
    },
  },
  {
    title: { en: "Mesh Layer", vi: "Áo lưới layer" },
    image: "./assets/find-6.jpg",
    size: { en: "Size S", vi: "Size S" },
    condition: { en: "Very good condition", vi: "Tình trạng rất tốt" },
    status: "In shop",
    reason: {
      en: "Sheer texture, playful print, good photo energy.",
      vi: "Chất lưới nhẹ, họa tiết vui mắt, lên ảnh rất có mood.",
    },
  },
];

const moments = [
  { image: "./assets/clients/z7178306174683_18366e8bd8b2794933d2c95337e18f11.jpg", label: "try-on", date: "12.10.2025" },
  { image: "./assets/clients/z7178306189579_aff66e3e3c0b18b65f227bbc4cbbab66.jpg", label: "mirror", date: "12.10.2025" },
  { image: "./assets/clients/z7178306195208_d01d76a3152284dc34c757df3087b7a5.jpg", label: "soft layer", date: "18.10.2025" },
  { image: "./assets/clients/z7178306207395_676a475b8bb96f82e201221668c48c6c.jpg", label: "own taste", date: "18.10.2025" },
  { image: "./assets/clients/z7178306207643_03d6f9821e750752f81c6dc5826d4532.jpg", label: "rack", date: "24.10.2025" },
  { image: "./assets/clients/z7178306224600_8486f66fd403773f2ee5506a76ce2240.jpg", label: "inside", date: "24.10.2025" },
  { image: "./assets/clients/z7178306224928_363bba2e3b4d7664d957255d1e5e3991.jpg", label: "fit note", date: "02.11.2025" },
  { image: "./assets/clients/z7178306237571_8e556282cd730b07b4556d878929ea39.jpg", label: "kept", date: "02.11.2025" },
  { image: "./assets/clients/z7178306242109_9571f31a35e07a35892fdbbe7e75602b.jpg", label: "bag day", date: "06.11.2025" },
  { image: "./assets/clients/z7178306251946_2fcf72a831daafdf3427eb792cb3781a.jpg", label: "checkout", date: "06.11.2025" },
  { image: "./assets/clients/z7178306263071_b873f04584be3e6407c2274f5e4dd66c.jpg", label: "mirror", date: "12.11.2025" },
  { image: "./assets/clients/z7178306265450_84bfd9ebc3b48729afcb44278aeca207.jpg", label: "good find", date: "12.11.2025" },
  { image: "./assets/clients/z7178306267161_d14c503d34d1a65d43434fae927c1134.jpg", label: "try-on", date: "18.11.2025" },
  { image: "./assets/clients/z7178306276994_65e1d204f4b532ae46e99ade34ac7f98.jpg", label: "paper bag", date: "18.11.2025" },
  { image: "./assets/customers.jpg", label: "cover mood", date: "24.11.2025" },
  { image: "./assets/shop-photo-8.jpg", label: "shop floor", date: "24.11.2025" },
  { image: "./assets/shop-photo-9.jpg", label: "rack light", date: "30.11.2025" },
  { image: "./assets/shop-photo-10.jpg", label: "inside", date: "30.11.2025" },
];

const state = {
  lang: localStorage.getItem("yen-may-lang") || "en",
  toastTimer: null,
};

const byStatus = (status) => status.toLowerCase().replace(/\s+/g, "-");
const t = () => copy[state.lang] || copy.en;
const valueFor = (value) => (typeof value === "string" ? value : value?.[state.lang] || value?.en || "");

function updateStaticCopy() {
  const current = t();
  document.documentElement.lang = current.lang;
  document.title = current.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", current.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (current[key]) element.textContent = current[key];
  });

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const key = link.dataset.navLink;
    if (current.nav[key]) link.textContent = current.nav[key];
  });

  document.querySelectorAll(".lang-option").forEach((button) => {
    const active = button.dataset.lang === state.lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function makeFindCard(item) {
  const current = t();
  const title = valueFor(item.title);
  const size = valueFor(item.size);
  const condition = valueFor(item.condition);
  const reason = valueFor(item.reason);
  const status = current.statuses[item.status] || item.status;
  const shareUrl = `${location.origin}${location.pathname}#finds`;

  const article = document.createElement("article");
  article.className = `find-card reveal ${byStatus(item.status)}`;

  article.innerHTML = `
    <div class="find-image">
      <div class="find-kicker">
        <span class="status ${byStatus(item.status)}">${status}</span>
      </div>
      <img src="${item.image}" alt="${title} ${current.altSelected}" loading="lazy" />
    </div>
    <div class="find-content">
      <h3>${title}</h3>
      <div class="find-meta">
        <span>${size}</span>
        <span>${condition}</span>
      </div>
      <p>${reason}</p>
      <div class="find-actions">
        <a class="find-cta" href="${instagramUrl}" target="_blank" rel="noreferrer" data-ask-instagram data-title="${title}">
          <svg class="instagram-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
            <circle cx="12" cy="12" r="4"></circle>
            <circle cx="17.5" cy="6.5" r="1.2"></circle>
          </svg>
          <span>${current.askInstagram}</span>
        </a>
        <button type="button" class="share-button" data-share-item data-title="${title}" data-image="${item.image}" data-url="${shareUrl}" aria-label="${current.ariaShare}" data-tooltip="${current.shareTooltip}">
          <svg class="share-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 16V4"></path>
            <path d="M7.5 8.5 12 4l4.5 4.5"></path>
            <path d="M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"></path>
          </svg>
        </button>
      </div>
    </div>
  `;

  return article;
}

function makeMomentCard(item) {
  const article = document.createElement("article");
  article.className = "moment-card reveal";
  article.innerHTML = `
    <div class="moment-photo">
      <img src="${item.image}" alt="${item.label} at Yen May Vintage" loading="lazy" />
    </div>
    <div class="moment-caption">
      <span>${item.label}</span>
      <time datetime="${item.date.split(".").reverse().join("-")}">${item.date}</time>
    </div>
  `;
  return article;
}

function renderCollections() {
  const findsGrid = document.querySelector("[data-finds-grid]");
  const momentsGrid = document.querySelector("[data-moments-grid]");

  if (findsGrid) findsGrid.replaceChildren(...finds.map(makeFindCard));
  if (momentsGrid && !momentsGrid.children.length) momentsGrid.replaceChildren(...moments.map(makeMomentCard));

  setupFindActions();
  setupReveal();
}

function setupHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;

  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal:not(.is-bound)");

  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.12 }
  );

  elements.forEach((element, index) => {
    element.classList.add("is-bound");
    element.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
    observer.observe(element);
  });
}

function setupParallax() {
  const cards = [...document.querySelectorAll(".moment-card")];
  if (!cards.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const update = () => {
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      const y = Math.max(-18, Math.min(18, progress * -22));
      card.style.setProperty("--parallax-y", `${y + (index % 2 ? 8 : -4)}px`);
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function ensureToast() {
  let toast = document.querySelector("[data-toast]");
  if (toast) return toast;

  toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("data-toast", "");
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
  return toast;
}

function showToast(message) {
  const toast = ensureToast();
  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "absolute";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
  return true;
}

function setupFindActions() {
  document.querySelectorAll("[data-ask-instagram]").forEach((link) => {
    link.onclick = async (event) => {
      event.preventDefault();
      const title = link.dataset.title || "";
      try {
        await copyText(title);
        showToast(t().toastCopied(title));
      } catch {
        showToast(t().toastCopied(title));
      }
      window.open(instagramUrl, "_blank", "noreferrer");
    };
  });

  document.querySelectorAll("[data-share-item]").forEach((button) => {
    button.onclick = async () => {
      const title = button.dataset.title || "";
      const url = button.dataset.url || location.href;
      const shareData = {
        title: `${title} | Yen May Vintage`,
        text: `${title} — ${phoneNumber}`,
        url,
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
          showToast(t().toastShared(title));
          return;
        }

        await copyText(`${title}\n${url}`);
        showToast(t().toastShareFallback(title));
      } catch {
        await copyText(`${title}\n${url}`);
        showToast(t().toastShareFallback(title));
      }
    };
  });
}

function setupLanguageToggle() {
  document.querySelectorAll(".lang-option").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = button.dataset.lang;
      if (!nextLang || nextLang === state.lang) return;
      state.lang = nextLang;
      localStorage.setItem("yen-may-lang", state.lang);
      updateStaticCopy();
      renderCollections();
    });
  });
}

function setupScrollSpy() {
  const sections = [...document.querySelectorAll("section[id]")];
  const links = [...document.querySelectorAll("[data-nav-link]")];
  if (!sections.length || !links.length) return;

  const linkMap = new Map(links.map((link) => [link.dataset.navLink, link]));
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (!visible) return;
      const id = visible.target.id;
      links.forEach((link) => link.classList.toggle("is-active", link.dataset.navLink === id));
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.2, 0.35, 0.55],
    }
  );

  sections.forEach((section) => {
    if (linkMap.has(section.id)) observer.observe(section);
  });
}

updateStaticCopy();
renderCollections();
setupHeader();
setupReveal();
setupParallax();
setupLanguageToggle();
setupScrollSpy();
