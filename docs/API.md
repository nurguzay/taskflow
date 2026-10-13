# TaskFlow API Dokümantasyonu

## Base URL

```text
http://localhost:3000/api
```

## GET /tasks

Tüm görevleri getirir.

Örnek Response:

```json
{
  "success": true,
  "total": 10,
  "page": 1,
  "limit": 10,
  "count": 10,
  "data": []
}
```

## GET /tasks/:id

Belirtilen ID değerine sahip görevi getirir.

```http
GET /api/tasks/5
```

Başarılı response:

```json
{
  "success": true,
  "data": {
    "id": 5,
    "title": "Logger middleware geliştir",
    "description": "API isteklerinin method, endpoint ve zaman bilgileri loglanacak.",
    "assignee": "Ali",
    "priority": "high",
    "status": "completed",
    "createdAt": "2026-10-05T14:10:00.000Z"
  }
}
```

Görev bulunamazsa:

```http
404 Not Found
```

```json
{
  "success": false,
  "message": "Görev bulunamadı."
}
```

## POST /tasks

Yeni görev oluşturur.

```json
{
  "title": "Yeni görev",
  "description": "Yeni görev açıklaması",
  "assignee": "Ali",
  "priority": "high",
  "status": "pending"
}
```

Başarılı sonuç:

```http
201 Created
```

## PUT /tasks/:id

Mevcut görevin bilgilerini günceller.

```json
{
  "status": "completed",
  "priority": "medium"
}
```

## DELETE /tasks/:id

Görevi sistemden siler.

## Query Parametreleri

```http
GET /tasks?status=completed
GET /tasks?priority=high
GET /tasks?assignee=Ali
GET /tasks?keyword=backend
GET /tasks?page=1&limit=5
GET /tasks?sort=-createdAt
```

Birleşik kullanım:

```http
GET /tasks?status=pending&priority=high&page=1&limit=5&sort=-createdAt
```

## Raporlama Endpointleri

```http
GET /reports/completed
GET /reports/pending
GET /reports/summary
```

Örnek summary:

```json
{
  "success": true,
  "data": {
    "totalTasks": 10,
    "statusSummary": {
      "completed": 3,
      "pending": 4,
      "inProgress": 3
    },
    "prioritySummary": {
      "high": 4,
      "medium": 4,
      "low": 2
    }
  }
}
```
