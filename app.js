const translations = {
  ru: {
    tagline: 'Горнолыжное и сноубордическое снаряжение',
    'nav.catalog': 'Каталог',
    'nav.cart': 'Корзина',
    'nav.admin': 'Админка',
    'nav.policy': 'Возврат',
    'nav.contacts': 'Контакты',
    'sections.catalog.title': 'Каталог',
    'sections.catalog.subtitle': 'Выберите снаряжение под свой стиль',
    'sections.cart.title': 'Корзина',
    'sections.cart.subtitle': 'Без онлайн-оплаты. Оставьте контакты — мы подтвердим заказ и стоимость доставки.',
    'sections.admin.title': 'Админка',
    'sections.admin.subtitle': 'Быстрое добавление товаров и загрузка из Google Sheets',
    'sections.policy.title': 'Политика возврата',
    'sections.policy.subtitle': 'Мультиязычный текст на русском и кыргызском',
    'sections.contacts.title': 'Контакты',
    'sections.contacts.subtitle': 'Самовывоз и поддержка',
    'filters.category': 'Категория',
    'filters.brand': 'Бренд',
    'filters.size': 'Размер / ростовка',
    'filters.price': 'Цена, сом',
    'promo.label': 'Промокод',
    'promo.apply': 'Применить',
    'cart.subtotal': 'Сумма',
    'cart.discount': 'Скидка',
    'cart.total': 'Итого',
    'checkout.title': 'Оформление',
    'checkout.name': 'Имя',
    'checkout.email': 'Email',
    'checkout.phone': 'Телефон',
    'checkout.address': 'Адрес доставки',
    'checkout.delivery': 'Способ доставки',
    'delivery.cdek': 'СДЭК (уточним стоимость по email)',
    'delivery.pickup': 'Самовывоз',
    'checkout.notice': 'Мы свяжемся по email/телефону, подтвердим заказ и рассчитаем доставку.',
    'checkout.submit': 'Подтвердить заказ',
    'orders.title': 'История заказов',
    'admin.template': 'Скачать шаблон импорта',
    'admin.nameRu': 'Название (RU)',
    'admin.nameKy': 'Название (KG)',
    'admin.descRu': 'Описание (RU)',
    'admin.descKy': 'Описание (KG)',
    'admin.category': 'Категория',
    'admin.brand': 'Бренд',
    'admin.price': 'Цена, KGS',
    'admin.sizes': 'Размеры/ростовки',
    'admin.url': 'URL фото',
    'admin.add': 'Добавить товар',
    'admin.hint': 'Товары хранятся в Strapi (NAS). Добавляйте через админку.',
    'policy.ru.title': 'Политика возврата (RU)',
    'policy.ru.point1': 'Вы можете вернуть товар в течение 14 дней с даты получения.',
    'policy.ru.point2': 'Товар должен быть в новом состоянии, с бирками и упаковкой.',
    'policy.ru.point3': 'Расходы на пересылку оплачивает покупатель, кроме случаев брака.',
    'policy.ru.point4': 'Напишите на djdrewsha@gmail.com или в Telegram Andrei_outdoor_stuff с номером заказа.',
    'policy.ky.title': 'Товарды кайтаруу саясаты (KG)',
    'policy.ky.point1': 'Товарды алуу күнүнөн тартып 14 күн ичинде кайтара аласыз.',
    'policy.ky.point2': 'Товар жаңы абалда, белгичелери жана таңгактоосу менен болушу керек.',
    'policy.ky.point3': 'Жөнөтүү чыгымдарын сатып алуучу төлөйт, бирок кемчилик болгондо — дүкөн төлөйт.',
    'policy.ky.point4': 'djdrewsha@gmail.com дарегине же Telegram Andrei_outdoor_stuff аркылуу заказ номерин жазыңыз.',
    'contacts.pickup': 'Самовывоз',
    'contacts.hours': 'Ежедневно 09:00–18:00',
    'footer.note': 'Каталог хранится в Strapi (Postgres на NAS). Корзина пока локально в браузере.'
  },
  ky: {
    tagline: 'Тоонун лыжа жана сноуборд жабдуулары',
    'nav.catalog': 'Каталог',
    'nav.cart': 'Себет',
    'nav.admin': 'Админка',
    'nav.policy': 'Кайтаруу',
    'nav.contacts': 'Байланыш',
    'sections.catalog.title': 'Каталог',
    'sections.catalog.subtitle': 'Сиздин стилиңизге ылайык тандаңыз',
    'sections.cart.title': 'Себет',
    'sections.cart.subtitle': 'Онлайн төлөм жок. Байланыштарды калтырыңыз — заказды жана жеткирүүнү тастыктайбыз.',
    'sections.admin.title': 'Админка',
    'sections.admin.subtitle': 'Товарларды тез кошуу жана Google Sheetsтен импорт',
    'sections.policy.title': 'Кайтаруу саясаты',
    'sections.policy.subtitle': 'Орусча жана кыргызча текст',
    'sections.contacts.title': 'Байланыш',
    'sections.contacts.subtitle': 'Самовывоз жана колдоо',
    'filters.category': 'Категория',
    'filters.brand': 'Бренд',
    'filters.size': 'Өлчөм / ростовка',
    'filters.price': 'Баасы, сом',
    'promo.label': 'Промокод',
    'promo.apply': 'Колдонуу',
    'cart.subtotal': 'Жыйынтык',
    'cart.discount': 'Жеңилдик',
    'cart.total': 'Бардыгы',
    'checkout.title': 'Тастыктоо',
    'checkout.name': 'Аты-жөнү',
    'checkout.email': 'Email',
    'checkout.phone': 'Телефон',
    'checkout.address': 'Жеткирүү дареги',
    'checkout.delivery': 'Жеткирүү ыкмасы',
    'delivery.cdek': 'СДЭК (бааны email менен тактайбыз)',
    'delivery.pickup': 'Самовывоз',
    'checkout.notice': 'Email/телефон аркылуу байланышабыз, заказды жана жеткирүүнү тактайбыз.',
    'checkout.submit': 'Жөнөтүү',
    'orders.title': 'Заказ тарыхы',
    'admin.template': 'Импорт шаблону',
    'admin.nameRu': 'Аты (RU)',
    'admin.nameKy': 'Аты (KG)',
    'admin.descRu': 'Сыпаттама (RU)',
    'admin.descKy': 'Сыпаттама (KG)',
    'admin.category': 'Категория',
    'admin.brand': 'Бренд',
    'admin.price': 'Баасы, KGS',
    'admin.sizes': 'Өлчөмдөр/ростовкалар',
    'admin.url': 'Сүрөт URL',
    'admin.add': 'Товар кошуу',
    'admin.hint': 'Товарлар Strapi (NAS) ичинде сакталат. Админка аркылуу кошуңуз.',
    'policy.ru.title': 'Политика возврата (RU)',
    'policy.ru.point1': 'Вы можете вернуть товар в течение 14 дней с даты получения.',
    'policy.ru.point2': 'Товар должен быть в новом состоянии, с бирками и упаковкой.',
    'policy.ru.point3': 'Расходы на пересылку оплачивает покупатель, кроме случаев брака.',
    'policy.ru.point4': 'Напишите на djdrewsha@gmail.com или в Telegram Andrei_outdoor_stuff с номером заказа.',
    'policy.ky.title': 'Товарды кайтаруу саясаты (KG)',
    'policy.ky.point1': 'Товарды алуу күнүнөн тартып 14 күн ичинде кайтара аласыз.',
    'policy.ky.point2': 'Товар жаңы абалда, белгичелери жана таңгактоосу менен болушу керек.',
    'policy.ky.point3': 'Жөнөтүү чыгымдарын сатып алуучу төлөйт, бирок кемчилик болгондо — дүкөн төлөйт.',
    'policy.ky.point4': 'djdrewsha@gmail.com дарегине же Telegram Andrei_outdoor_stuff аркылуу заказ номерин жазыңыз.',
    'contacts.pickup': 'Самовывоз',
    'contacts.hours': 'Күн сайын 09:00–18:00',
    'footer.note': 'Каталог Strapi (Postgres) аркылуу сакталат. Себет азырынча браузерде сакталат.'
  }
};

const promoCodes = [{ code: 'POWDER10', discount: 10 }, { code: 'SNOW5', discount: 5 }];
const STRAPI_BASE_URL = `https://strapi.shop.anekrasov.hopto.org`;
const STRAPI_PRODUCTS_URL = `${STRAPI_BASE_URL}/api/products?pagination%5BpageSize%5D=200`;

const state = {
  lang: 'ru',
  products: [],
  loadingProducts: true,
  cart: loadFromStorage('cart', []),
  promo: null,
  orders: loadFromStorage('orders', [])
};

function mapStrapiProduct(entry) {
  const attrs = entry.attributes || entry;
  const sizesRaw = attrs.sizes || '';
  const sizes = Array.isArray(sizesRaw)
    ? sizesRaw
    : sizesRaw
        .split(/[|,]/)
        .map((s) => s.trim())
        .filter(Boolean);
  return {
    id: entry.documentId || entry.id?.toString() || attrs.slug || attrs.sku || `product-${Date.now()}`,
    name: { ru: attrs.name_ru || attrs.name || '', ky: attrs.name_ky || attrs.name_ru || attrs.name || '' },
    description: {
      ru: attrs.description_ru || '',
      ky: attrs.description_ky || attrs.description_ru || ''
    },
    category: attrs.category || 'Категория',
    brand: attrs.brand || '',
    price: Number(attrs.price) || 0,
    sizes,
    image: attrs.image_url || attrs.image
  };
}

function loadFromStorage(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    console.warn('Storage unavailable', e);
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('Storage unavailable', e);
  }
}

const sectionButtons = document.querySelectorAll('.nav__item');
const sections = document.querySelectorAll('main > section');
const langButtons = document.querySelectorAll('.lang-btn');

function switchSection(target) {
  sections.forEach((sec) => sec.classList.add('hidden'));
  document.getElementById(target).classList.remove('hidden');
  sectionButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.section === target));
}

sectionButtons.forEach((btn) => btn.addEventListener('click', () => switchSection(btn.dataset.section)));
switchSection('catalog');

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    state.lang = btn.dataset.lang;
    langButtons.forEach((b) => b.classList.toggle('active', b.dataset.lang === state.lang));
    translate();
    render();
  });
});
langButtons[0].classList.add('active');

function t(key) {
  return translations[state.lang][key] || translations.ru[key] || key;
}

function translate() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  document.documentElement.lang = state.lang;
}

function currency(value) {
  return new Intl.NumberFormat('ru-RU').format(value);
}

const categorySelect = document.getElementById('filter-category');
const brandSelect = document.getElementById('filter-brand');
const sizeSelect = document.getElementById('filter-size');
const priceRange = document.getElementById('filter-price');
const priceValue = document.getElementById('price-value');

function buildFilters() {
  const categories = ['all', ...new Set(state.products.map((p) => p.category))];
  const brands = ['all', ...new Set(state.products.map((p) => p.brand))];
  const sizes = ['all', ...new Set(state.products.flatMap((p) => p.sizes || []))];

  const allLabel = state.lang === 'ky' ? 'Баары' : 'Все';
  categorySelect.innerHTML = categories.map((c) => `<option value="${c}">${c === 'all' ? allLabel : c}</option>`).join('');
  brandSelect.innerHTML = brands.map((b) => `<option value="${b}">${b === 'all' ? allLabel : b}</option>`).join('');
  sizeSelect.innerHTML = sizes.map((s) => `<option value="${s}">${s === 'all' ? allLabel : s}</option>`).join('');
  priceRange.addEventListener('input', () => {
    priceValue.textContent = `≤ ${currency(priceRange.value)} KGS`;
    renderProducts();
  });
  priceValue.textContent = `≤ ${currency(priceRange.value)} KGS`;
}

[categorySelect, brandSelect, sizeSelect].forEach((sel) => sel.addEventListener('change', renderProducts));

function getProductName(product) {
  return product.name[state.lang] || product.name.ru;
}

function getProductDescription(product) {
  return product.description[state.lang] || product.description.ru;
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (state.loadingProducts) {
    grid.innerHTML = `<div class="muted">${state.lang === 'ky' ? 'Жүктөлүүдө…' : 'Загружаем каталог…'}</div>`;
    return;
  }
  if (!state.products.length) {
    grid.innerHTML = `<div class="muted">${state.lang === 'ky' ? 'Товарлар жок' : 'Нет товаров'}</div>`;
    return;
  }
  const filterCategory = categorySelect.value;
  const filterBrand = brandSelect.value;
  const filterSize = sizeSelect.value;
  const maxPrice = Number(priceRange.value);

  const products = state.products.filter((p) => {
    const categoryOk = filterCategory === 'all' || p.category === filterCategory;
    const brandOk = filterBrand === 'all' || p.brand === filterBrand;
    const sizeOk = filterSize === 'all' || (p.sizes || []).includes(filterSize);
    const priceOk = p.price <= maxPrice;
    return categoryOk && brandOk && sizeOk && priceOk;
  });

  grid.innerHTML = products
    .map((p) => {
      const sizeOptions = (p.sizes || []).map((s) => `<option value="${s}">${s}</option>`).join('');
      const sizeSelectHtml = sizeOptions
        ? `<label class="muted">${t('filters.size')}<select data-size-for="${p.id}">${sizeOptions}</select></label>`
        : '';
      const image = p.image || '';
      const imageHtml = image
        ? `<img class="card__image" src="${image}" alt="${getProductName(p)}" />`
        : '';
      return `<div class="card">
        ${imageHtml}
        <div class="card__meta">${p.category} <span class="badge">${p.brand}</span></div>
        <div class="card__title">${getProductName(p)}</div>
        <div class="muted">${getProductDescription(p)}</div>
        <div class="card__meta"><strong>${currency(p.price)}</strong> <span class="currency">KGS</span></div>
        ${sizeSelectHtml}
        <button class="button" data-add="${p.id}">${state.lang === 'ky' ? 'Себетке' : 'В корзину'}</button>
      </div>`;
    })
    .join('');

  document.querySelectorAll('[data-add]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const id = btn.dataset.add;
      const product = state.products.find((p) => p.id === id);
      if (!product) return;
      const sizeSelector = document.querySelector(`[data-size-for="${id}"]`);
      const chosenSize = sizeSelector ? sizeSelector.value : null;
      addToCart(product, chosenSize);
    })
  );
}

function addToCart(product, size) {
  const existing = state.cart.find((item) => item.id === product.id && item.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: product.id, size, qty: 1 });
  }
  saveToStorage('cart', state.cart);
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  if (!state.cart.length) {
    container.innerHTML = `<div class="muted">${state.lang === 'ky' ? 'Себет бош' : 'Корзина пуста'}</div>`;
  } else {
    container.innerHTML = state.cart
      .map((item) => {
        const product = state.products.find((p) => p.id === item.id);
        const name = product ? getProductName(product) : item.id;
        const price = product ? product.price : 0;
        const line = price * item.qty;
        return `<div class="cart-item">
            <div>
              <div>${name}</div>
              <div class="cart-item__meta">${item.size || ''}</div>
            </div>
            <div class="cart-item__actions">
              <button class="button ghost" data-dec="${item.id}" data-size="${item.size || ''}">−</button>
              <span>${item.qty}</span>
              <button class="button ghost" data-inc="${item.id}" data-size="${item.size || ''}">+</button>
              <div><strong>${currency(line)}</strong> <span class="currency">KGS</span></div>
            </div>
          </div>`;
      })
      .join('');
  }

  container.querySelectorAll('[data-inc]').forEach((btn) =>
    btn.addEventListener('click', () => changeQty(btn.dataset.inc, btn.dataset.size, 1))
  );
  container.querySelectorAll('[data-dec]').forEach((btn) =>
    btn.addEventListener('click', () => changeQty(btn.dataset.dec, btn.dataset.size, -1))
  );

  const subtotal = state.cart.reduce((sum, item) => {
    const product = state.products.find((p) => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  const discount = state.promo ? Math.round((subtotal * state.promo.discount) / 100) : 0;
  const total = subtotal - discount;

  document.getElementById('cart-subtotal').textContent = currency(subtotal);
  document.getElementById('cart-discount').textContent = currency(discount);
  document.getElementById('cart-total').textContent = currency(total);
}

function changeQty(id, size, delta) {
  const item = state.cart.find((i) => i.id === id && (i.size || '') === (size || ''));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter((i) => !(i.id === id && (i.size || '') === (size || '')));
  saveToStorage('cart', state.cart);
  renderCart();
}

function applyPromo() {
  const code = document.getElementById('promo-code').value.trim().toUpperCase();
  const promo = promoCodes.find((p) => p.code === code);
  const status = document.getElementById('promo-status');
  if (promo) {
    state.promo = promo;
    status.textContent = `${promo.discount}% ${state.lang === 'ky' ? 'жеңилдик колдонулду' : 'скидка применена'}`;
  } else {
    state.promo = null;
    status.textContent = state.lang === 'ky' ? 'Промокод табылган жок' : 'Промокод не найден';
  }
  renderCart();
}

document.getElementById('apply-promo').addEventListener('click', applyPromo);

function renderOrders() {
  const container = document.getElementById('order-history');
  if (!state.orders.length) {
    container.textContent = state.lang === 'ky' ? 'Тарых бош' : 'История пуста';
    return;
  }
  container.innerHTML = state.orders
    .map((order) => {
      const items = order.items
        .map((i) => `${i.name}${i.size ? ` (${i.size})` : ''} ×${i.qty} — ${currency(i.price * i.qty)} KGS`)
        .join('<br/>');
      return `<div class="order-card">
        <div class="order-card__header">
          <span>#${order.id}</span>
          <span>${order.date}</span>
        </div>
        <div class="order-card__items">${items}</div>
        <div class="cart-item__meta">${order.delivery} · ${order.email}</div>
      </div>`;
    })
    .join('');
}

function handleCheckout(e) {
  e.preventDefault();
  if (!state.cart.length) return;
  const name = document.getElementById('customer-name').value.trim();
  const email = document.getElementById('customer-email').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  const address = document.getElementById('customer-address').value.trim();
  const delivery = document.getElementById('delivery-method').value;
  const subtotal = state.cart.reduce((sum, item) => {
    const product = state.products.find((p) => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  const discount = state.promo ? Math.round((subtotal * state.promo.discount) / 100) : 0;
  const total = subtotal - discount;
  const items = state.cart.map((item) => {
    const product = state.products.find((p) => p.id === item.id);
    return {
      name: product ? getProductName(product) : item.id,
      price: product ? product.price : 0,
      size: item.size,
      qty: item.qty
    };
  });
  const order = {
    id: Date.now().toString().slice(-6),
    date: new Date().toLocaleString(),
    name,
    email,
    phone,
    address,
    delivery,
    subtotal,
    discount,
    total,
    items
  };
  state.orders.unshift(order);
  state.cart = [];
  state.promo = null;
  saveToStorage('orders', state.orders);
  saveToStorage('cart', state.cart);
  document.getElementById('checkout-status').textContent = state.lang === 'ky'
    ? 'Заказ сакталды. Email аркылуу тастыктайбыз.'
    : 'Заказ сохранён. Подтвердим по email.';
  document.getElementById('promo-code').value = '';
  document.getElementById('promo-status').textContent = '';
  renderCart();
  renderOrders();
}

document.getElementById('checkout-form').addEventListener('submit', handleCheckout);

function handleAdmin(e) {
  e.preventDefault();
  const product = {
    name: document.getElementById('admin-name-ru').value.trim(),
    brand: document.getElementById('admin-brand').value.trim(),
    price: document.getElementById('admin-price').value.trim(),
    sizes: document.getElementById('admin-sizes').value.trim(),
    image: document.getElementById('admin-image').value.trim()
  };

  const note =
    state.lang === 'ky'
      ? `Товарларды Strapi админкасы аркылуу кошуңуз: ${STRAPI_BASE_URL}/admin`
      : `Добавляйте товары через Strapi админку: ${STRAPI_BASE_URL}/admin`;
  document.getElementById('admin-status').textContent = note;
  console.log('Готовые данные для Strapi:', product);
}

document.getElementById('admin-form').addEventListener('submit', handleAdmin);

function render() {
  buildFilters();
  renderProducts();
  renderCart();
  renderOrders();
}

async function loadProductsFromStrapi() {
  try {
    const res = await fetch(STRAPI_PRODUCTS_URL);
    if (!res.ok) throw new Error(`Strapi ${res.status}`);
    const payload = await res.json();
    const data = payload.data || [];
    state.products = data.map(mapStrapiProduct);
  } catch (e) {
    console.error('Failed to load products from Strapi, fallback to empty list', e);
    state.products = [];
  } finally {
    state.loadingProducts = false;
    render();
  }
}

translate();
loadProductsFromStrapi();
