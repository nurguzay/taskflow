# TaskFlow — Test Dokümantasyonu

## Test Ortamı

- Araç: Postman
- Base URL: `http://localhost:3000`
- API Base URL: `http://localhost:3000/api`

## Test Senaryoları

### 1. Tüm Görevleri Listeleme

```http
GET /api/tasks
```

Beklenen: `200 OK`

### 2. Görev Detayı

```http
GET /api/tasks/1
```

Beklenen: `200 OK`

Olmayan görev:

```http
GET /api/tasks/999
```

Beklenen: `404 Not Found`

### 3. Görev Oluşturma

```http
POST /api/tasks
```

```json
{
  "title": "Postman test görevi",
  "description": "POST endpoint testi",
  "assignee": "Ali",
  "priority": "high",
  "status": "pending"
}
```

Beklenen: `201 Created`

### 4. Görev Güncelleme

```http
PUT /api/tasks/1
```

```json
{
  "status": "completed"
}
```

Beklenen: `200 OK`

### 5. Görev Silme

```http
DELETE /api/tasks/1
```

Beklenen: `200 OK`

### 6. Validation

```json
{
  "title": "Eksik görev",
  "priority": "high"
}
```

Beklenen: `400 Bad Request`

### 7. Filtreleme

```http
GET /api/tasks?status=completed
GET /api/tasks?priority=high
GET /api/tasks?assignee=Ali
```

### 8. Arama

```http
GET /api/tasks?keyword=backend
```

### 9. Sayfalama

```http
GET /api/tasks?page=1&limit=5
```

### 10. Sıralama

```http
GET /api/tasks?sort=-createdAt
```

### 11. Raporlama

```http
GET /api/reports/completed
GET /api/reports/pending
GET /api/reports/summary
```

## Ekran Görüntüleri

Postman test ekran görüntüleri `docs/screenshots/` klasörüne eklenmiştir..
