# TaskFlow API

TaskFlow, Node.js ve Express.js kullanılarak geliştirilmiş REST API tabanlı bir görev ve proje yönetim sistemidir.

Bu proje kapsamında görev oluşturma, listeleme, güncelleme, silme, filtreleme, arama, sayfalama, sıralama, validation middleware ve raporlama servisleri geliştirilmiştir.

## Kullanılan Teknolojiler

- Node.js
- Express.js
- JavaScript
- REST API
- Postman
- Nodemon

## Kurulum

```bash
git clone PROJE_GITHUB_URL
cd taskflow-api
npm install
npm run dev
```

Normal çalıştırma:

```bash
npm start
```

API varsayılan olarak:

```text
http://localhost:3000
```

adresinde çalışır.

## API Endpointleri

### Görev Listeleme

```http
GET /api/tasks
```

### Görev Detayı

```http
GET /api/tasks/:id
```

### Görev Oluşturma

```http
POST /api/tasks
```

Örnek Body:

```json
{
  "title": "Yeni görev",
  "description": "Görev açıklaması",
  "assignee": "Ali",
  "priority": "high",
  "status": "pending"
}
```

### Görev Güncelleme

```http
PUT /api/tasks/:id
```

### Görev Silme

```http
DELETE /api/tasks/:id
```

## Filtreleme

```http
GET /api/tasks?status=completed
GET /api/tasks?priority=high
GET /api/tasks?assignee=Ali
```

## Arama

```http
GET /api/tasks?keyword=backend
```

## Sayfalama

```http
GET /api/tasks?page=1&limit=5
```

## Sıralama

```http
GET /api/tasks?sort=createdAt
GET /api/tasks?sort=-createdAt
```

## Birleşik Sorgu

```http
GET /api/tasks?status=pending&priority=high&page=1&limit=5&sort=-createdAt
```

## Raporlama Servisleri

```http
GET /api/reports/completed
GET /api/reports/pending
GET /api/reports/summary
```

Summary endpoint'i toplam görev sayısı, durum dağılımı ve öncelik dağılımını döndürür.

## Validation

Yeni görev oluştururken şu alanlar zorunludur:

- title
- description
- assignee
- priority

Priority:

```text
low
medium
high
```

Status:

```text
pending
in-progress
completed
```

Geçersiz verilerde:

```http
400 Bad Request
```

döndürülür.

## Logger Middleware

Tüm API istekleri loglanır.

Örnek:

```text
[2026-10-13T18:50:10.255Z] GET /api/tasks 200 - 3ms
```

## Proje Yapısı

```text
taskflow-api/
├── src/
│   ├── controllers/
│   │   ├── taskController.js
│   │   └── reportController.js
│   ├── routes/
│   │   ├── taskRoutes.js
│   │   └── reportRoutes.js
│   ├── middlewares/
│   │   ├── logger.js
│   │   └── validateTask.js
│   ├── data/
│   │   └── tasks.js
│   └── app.js
├── docs/
│   ├── API.md
│   ├── project-introduction.md
│   ├── TESTS.md
│   └── screenshots/
├── package.json
├── package-lock.json
└── README.md
```

## Test

API endpointleri Postman kullanılarak test edilmiştir.

- CRUD
- filtreleme
- arama
- sayfalama
- sıralama
- validation
- raporlama
