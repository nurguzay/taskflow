# TaskFlow — Proje Tanıtım Dokümanı

## 1. Projenin Amacı

TaskFlow, Node.js ve Express.js kullanılarak geliştirilen REST API tabanlı bir görev ve proje yönetim sistemidir. Projenin amacı; Node.js, Express.js, REST API, routing, middleware, CRUD ve JSON veri yönetimi konularını tek bir uygulama üzerinde birleştirmektir.

Sistem; görev oluşturma, listeleme, detay görüntüleme, güncelleme ve silme işlemlerini destekler. Buna ek olarak filtreleme, arama, sayfalama, sıralama, validation ve raporlama özellikleri geliştirilmiştir.

## 2. Proje Senaryosu

Bir yazılım şirketi ekip içerisindeki görevleri ve çalışanların sorumluluklarını takip etmek istemektedir. TaskFlow API, görevlerin oluşturulmasını, çalışanlara atanmasını, durumlarının ve önceliklerinin takip edilmesini sağlar.

Her görev şu alanları içerir:

- ID
- Başlık
- Açıklama
- Atanan kişi
- Öncelik
- Durum
- Oluşturulma tarihi

Öncelikler:

- low
- medium
- high

Durumlar:

- pending
- in-progress
- completed

## 3. Kullanılan Teknolojiler

- Node.js
- Express.js
- JavaScript
- REST API
- JSON
- Postman
- Nodemon
- Git / GitHub

## 4. Sistem Mimarisi

```text
Client / Postman
       ↓
Express Application
       ↓
Middleware
       ↓
Route
       ↓
Controller
       ↓
Task Data
       ↓
JSON Response
```

## 5. Temel Özellikler

### CRUD
- görev oluşturma
- listeleme
- detay görüntüleme
- güncelleme
- silme

### Logger Middleware
API istekleri method, endpoint, HTTP status code ve işlem süresiyle loglanır.

### Validation Middleware
Zorunlu alanlar ve geçerli priority/status değerleri kontrol edilir. Hatalı veri için `400 Bad Request` döndürülür.

### Filtreleme ve Arama
Görevler durum, öncelik ve atanan kişiye göre filtrelenebilir. Başlık ve açıklama üzerinde anahtar kelime araması yapılabilir.

### Sayfalama ve Sıralama
`page`, `limit` ve `sort` query parametreleri desteklenir.

### Raporlama
Tamamlanan görevler, bekleyen görevler, toplam görev sayısı, durum dağılımı ve öncelik dağılımı raporlanır.

## 6. Test Süreci

TaskFlow API, Postman ile CRUD, filtreleme, arama, sayfalama, sıralama, validation ve raporlama açısından test edilmiştir.

Test ekran görüntüleri `docs/screenshots/` klasörüne eklenmiştir.

## 7. Sonuç

TaskFlow projesi ile Node.js ve Express.js kullanılarak çalışan bir REST API geliştirilmiştir. Proje, temel CRUD işlemlerinin yanında middleware, validation, filtreleme, arama, sayfalama, sıralama ve raporlama gibi temel API geliştirme yeteneklerini de içermektedir.
