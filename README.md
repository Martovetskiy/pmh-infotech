[![wakatime](https://wakatime.com/badge/user/10da1549-bcdb-4af9-9da3-6acda43316a1/project/a3911eee-7f6a-490d-9e91-ce317134fdcc.svg)](https://wakatime.com/badge/user/10da1549-bcdb-4af9-9da3-6acda43316a1/project/a3911eee-7f6a-490d-9e91-ce317134fdcc)

# Установка
1. Клонирование репо 
    ```bash
    git clone <https://github.com/Martovetskiy/pmh-infotech.git>
    cd pmh-infotech    
    ```
2. Установка зависимостей
    ```bash
   npm install
    ```
3. Запуск
    ```bash
    npm run dev
   ```
4. Замечание: Для работы web-приложения необходимо в корне проекта создать `.env` файл со ссылками на WebApi с приставкой VITE_. Примерное содержимое:
    ```.env
   VITE_URL_WEBAPI_CERT = "https://localhost:7007/api"
    VITE_URL_WEBAPI_MAIN = "https://localhost:7298/api"
    VITE_URL_WEBAPI_ADD = "https://localhost:7162/api" 
   ```
   
# Структура проекта

* `src/` - исходный код приложения
  * `components/` - React компоненты
  * `layouts/` - компоненты-контейнеры и макеты страниц
  * `model/` - типы и интерфейсы данных
  * `store/` - веб-апи
  * `lib/` - вспомогательные функции и утилиты
  * `assets/` - статические ресурсы (изображения и т.д.)

# Работа с данными
Приложение использует React для управления состоянием и отображения данных. Данные, загружаются с 3 разных Web-API с использованием API-запросов (с помощью библиотеки `Axios`, которая указана в зависимостях).

![Media](https://raw.githubusercontent.com/Martovetskiy/pmh-infotech/refs/heads/master/media/main.gif?raw=true)

### Навигация
* `/` - Страница приветствия
* `/user/{id}` - Страница просмотра сертификата с параметром id
* `/404` - Страница обозначающая, что сертификат не найден или прочие ошибки

# Оптимизация запросов
Для оптимизации запросов используется `REDIS` на стороне сервера для кэширования данных.

# Генерация PDF с QR-кодом

![Pdf](https://github.com/Martovetskiy/pmh-infotech/blob/master/media/pdf_work.gif?raw=true)

### Генерация PDF с QR-кодом
Для генерации PDF-сертификатов с QR-кодом используется комбинация нескольких библиотек:
1. `react-to-pdf` для преобразования React-компонентов в PDF.
2. `qrcode.react` для генерации QR-кода.

### Процесс создания PDF:
1. Компонент `PdfComponent` содержит всю необходимую информацию для сертификата.
2. QR-код генерируется с помощью `QRCodeSVG` и содержит URL для доступа к сертификату онлайн.
3. При нажатии на кнопку "Скачать PDF-сертификат" в компоненте `Footer`, либо на кнопку "Скачать PDF" в компоненте `Header`, вызывается функция pdfAction, которая, использует `react-to-pdf` для создания PDF-файла.


# Дополнительно
1. Приложение использует `TypeScript` для статической типизации, что повышает надежность кода.
2. Стили компонентов реализованы с использованием `CSS-модулей` для изоляции стилей.
3. Для маршрутизации используется `react-router-dom`.


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Martovetskiy/pmh-infotech&type=Date)](https://www.star-history.com/#Martovetskiy/pmh-infotech&Date)
