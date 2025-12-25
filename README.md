# Boardshop

Простой статический MVP магазина горнолыжного и сноубордического снаряжения (RU/KG) без онлайн-оплаты. Включает каталог с фильтрами, корзину с промокодами, оформление заказа, историю заказов в браузере и простую "админку" для добавления товаров.

## Возможности
- Двухъязычный интерфейс (русский/кыргызский) с переключателем.
- Каталог с фильтрами по категории, бренду, размеру и цене; ростовки/размеры отображаются по товарам, где применимо.
- Карточки с ценами в KGS, добавление в корзину, промокоды со скидкой в процентах.
- Оформление без онлайн-оплаты: сбор контактов/адреса, выбор СДЭК или самовывоз; подсказка, что стоимость доставки уточняется по email.
- История заказов и корзина сохраняются локально (localStorage).
- Политика возврата на двух языках, контакты с адресом самовывоза, email, Telegram и картой.
- Лёгкая админка: добавление товаров в браузере + шаблон `import_template.csv` для подготовки данных из Google Sheets.

## Как запустить локально
```bash
# 1) открыть в браузере напрямую
python -m http.server 8000
open http://localhost:8000

# 2) или собрать статический nginx-образ
docker build -t boardshop .
docker run --rm -p 8080:80 boardshop
```

## Структура
- `index.html` — структура страниц, разделы каталога/корзины/админки/контактов.
- `styles.css` — тёмная тема, сетки карточек, формы и навигация.
- `app.js` — переводы RU/KG, моковые товары, фильтры, корзина, промокоды, сохранение в localStorage, форма заказа и админка.
- `import_template.csv` — пример строки для импорта из Google Sheets/CSV (разделитель размеров `|`).
- `IMPLEMENTATION_PLAN.md` — план реализации и требования из предыдущего шага.

## Импорт из Google Sheets
1. В Google Sheets подготовьте столбцы: `name_ru`, `name_ky`, `description_ru`, `description_ky`, `category`, `brand`, `price`, `sizes`, `image`.
2. Экспортируйте как CSV, замените разделитель размеров на `,` или `|` и откройте файл, чтобы скопировать данные в админку вручную (в текущей версии нет API).
3. При необходимости расширьте `app.js`, чтобы парсить загруженный CSV и сохранять в `localStorage` или отправлять на свой backend.

## Ограничения MVP
- Нет реальной авторизации и ролей; данные админки хранятся в браузере текущего пользователя.
- Нет интеграции с платёжными и логистическими сервисами; доставка подтверждается вручную.
- Для продакшена рекомендуется подключить API/Headless CMS и базу данных, вынести корзину/заказы на сервер и добавить аутентификацию.

## Как подключить Headless CMS и БД
MVP сейчас работает только в браузере (localStorage). Для продакшена нужен бэкенд с CMS и БД.

### Что поставить
- **Headless CMS**: Strapi в Docker (отдельный контейнер, ставится рядом с фронтом).
- **База**: бесплатный PostgreSQL в **Supabase** (Free tier хватает для прототипа). Альтернатива — Railway/Fly.io с Postgres free-tier.

### Минимальный стек в Docker Compose
Добавьте рядом с фронтом контейнеры CMS и БД. Для Supabase не требуется контейнер БД — используйте их Managed Postgres и выдаваемую строку подключения.

```yaml
services:
  frontend:
    image: nginx:alpine
    volumes:
      - ./index.html:/usr/share/nginx/html/index.html:ro
      - ./styles.css:/usr/share/nginx/html/styles.css:ro
      - ./app.js:/usr/share/nginx/html/app.js:ro
    ports:
      - "8080:80"

  strapi:
    image: strapi/strapi
    environment:
      DATABASE_CLIENT: postgres
      DATABASE_HOST: ${DB_HOST}
      DATABASE_PORT: 5432
      DATABASE_NAME: ${DB_NAME}
      DATABASE_USERNAME: ${DB_USER}
      DATABASE_PASSWORD: ${DB_PASSWORD}
      APP_KEYS: ${APP_KEYS}
      API_TOKEN_SALT: ${API_TOKEN_SALT}
      ADMIN_JWT_SECRET: ${ADMIN_JWT_SECRET}
      JWT_SECRET: ${JWT_SECRET}
    ports:
      - "1337:1337"
    depends_on: [] # Supabase Postgres — внешний, без контейнера
```

Создайте файл `.env` с доступами Supabase (см. Project Settings → Database):

```
DB_HOST=db.<project>.supabase.co
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=<database_password>
APP_KEYS=<random,comma-separated>
API_TOKEN_SALT=<random>
ADMIN_JWT_SECRET=<random>
JWT_SECRET=<random>
```

### Что сделать в Strapi
1. Создать коллекции: `products` (с локалями RU/KG, ценой, брендом, категориями, размерами, фото), `promocodes`, `orders`.
2. Включить i18n плагин и активировать локали `ru` и `ky`.
3. Настроить роли/permissions: публичному API разрешить `find`/`findOne` для товаров; `orders` — только создание.
4. Создать API Token (bearer) и использовать его в фронтенде для чтения каталога/отправки заказов.

### Как подружить фронт с API
- Заменить мок-данные в `app.js` на запросы к Strapi (`/api/products?locale=ru`/`ky`).
- Для заказов отправлять POST `/api/orders` с товарами, контактами и выбранной доставкой.
- Корзину можно оставить в localStorage, но при оформлении писать заказ в БД; историю заказов подтягивать с сервера по email/токену.

### Почему Supabase
- Бесплатный PostgreSQL + хранилище + UI для SQL/бекапов.
- Простые бэкапы/экспорты CSV; при росте можно перейти на платный тариф или вынести Postgres в отдельный VPS.
