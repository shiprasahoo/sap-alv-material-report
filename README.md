# 📦 SAP Custom ALV Material Report
**Capstone Project | SAP ABAP / Fiori Development Track**

![SAP](https://img.shields.io/badge/SAP-Fiori-0a6ed1?style=for-the-badge&logo=sap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES5-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📌 Project Overview

A SAP Fiori-style **Material Stock Report** web application that simulates
the behavior of a real **ABAP ALV (ABAP List Viewer) Grid Report** —
one of the most common reports built in SAP enterprise environments.

Built using HTML5, CSS3, JavaScript and SAP OpenUI5 design principles,
this app demonstrates how SAP ABAP developers create data reporting
interfaces in modern Fiori applications.

---

## ❗ Problem Statement

In large manufacturing organizations:
- Tracking material stock across multiple plants is **manual and slow**
- Identifying low stock or out-of-stock items **takes time**
- There is **no quick way** to filter or export material data

---

## ✅ Solution

A clean Fiori-style report app that lets users:
- View all materials across plants in one screen
- Filter by ID, description, plant, category and status
- See live stock summary at a glance
- Export filtered data to CSV instantly

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 Smart Filter | Filter by Material ID, Description, Plant, Category, Status |
| 📊 Summary Tiles | Live count — Available / Low Stock / Out of Stock |
| 🚦 Status Badges | Color-coded — Green / Orange / Red |
| ⬇️ CSV Export | Download current filtered data as `.csv` |
| 📱 Responsive | Works on desktop, tablet and mobile |
| ⚡ Offline Ready | No internet/CDN required to run |

---
---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI | HTML5, CSS3, JavaScript (ES5) |
| Design System | SAP Fiori / OpenUI5 guidelines |
| Architecture | MVC (Model-View-Controller) |
| Data | JSON (simulates SAP OData service) |
| Tools | VS Code, Node.js, Git, GitHub |

---

## 🧠 SAP Concepts Demonstrated

| SAP Concept | How it's shown here |
|---|---|
| ABAP ALV Grid Report | Filterable data table with export |
| ABAP Internal Table | `data.json` material dataset |
| ABAP CASE Statement | `formatter.js` status function |
| SAP Traffic Light (Ampel) | Green / Orange / Red badges |
| ALV Download | CSV export with dated filename |
| SAP Fiori UX | Blue header, tiles, typography |
| MVC Pattern | Component → View → Controller |

---

## 📊 Sample Data

10 material records across 3 plants (PL01, PL02, PL03):

| Material ID | Description | Plant | Status |
|---|---|---|---|
| MAT-001 | Steel Plate 10mm | PL01 | ✅ Available |
| MAT-003 | Hydraulic Pump A4 | PL02 | ⚠️ Low Stock |
| MAT-004 | Safety Helmet IS | PL02 | ❌ Out of Stock |
| MAT-006 | Electric Motor 5HP | PL03 | ⚠️ Low Stock |
| MAT-008 | Drill Bit Set 13pc | PL02 | ❌ Out of Stock |

---

## 🔮 Future Scope

- 🔗 Connect to real SAP OData backend via SAP Gateway
- 📈 Add bar/pie charts for stock distribution
- 🔔 Auto reorder alerts when stock hits threshold
- 👤 Role-based access (Manager vs Warehouse Staff)
- 🌍 Multi-language support (SAP i18n)

---



