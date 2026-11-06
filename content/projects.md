# Page: Projects
Route: `/projects/` · Title: `Projects – TIMES`
Images folder: `public/images/times/projects/`

---

## 1. Page Header / Stats Hero
**Layout:** Banner with eyebrow, H1, subline, then a **4-item stats counter row** (use counter animation from your template).

- **Eyebrow:** Project Portfolio
- **H1:** Building India's Water Infrastructure
- **Subline:** Trusted by India’s leading EPC contractors for critical pipeline infrastructure across 6 states

**Counters (4):**
| Value | Label |
|-------|-------|
| 50+ | Projects & Orders |
| 223K+ | MT Delivered |
| 15+ | Trusted Clients |
| 8 | States Covered |

> Source says "6 states" in the subline but "8 States Covered" in the counter. Confirm with client.

---

## 2. Major Completed Projects — data table
**Layout:** H3 + responsive table (horizontal scroll on mobile). 13 rows.

- **H3:** Major Completed Projects
- **Table columns:** Sl No. | Client Name | Project | Diameter (mm) | Thickness (mm) | Qty. in MT | Scope of Work

| Sl No. | Client Name | Project | Diameter (mm) | Thickness (mm) | Qty. in MT | Scope of Work |
|---|---|---|---|---|---|---|
| 1 | KEC International Limited | Satna Bansagar 2 Multi - village Scheme | 600 - 1700 | 5 - 22 | 49935 | Fabrication with ICML and Guniting |
| 2 | Dilip Buildcon Limited | Rewa Bansagar Multi Village Scheme | 1000 - 1600 | 8.8 - 14.2 | 17000 | Fabrication |
| 3 | GVPR Engineers Limited | Binjalwara & Jawar Micro Lift Irrigation Schemes | 306 - 808 | 3 - 4 | 11990 | Fabrication with FGE, PU & Guniting |
| 4 | JWIL Infra Limited | Pirtand Project (WRD) | 1200 - 2000 | 8.4 - 12.1 | 10583 | Fabrication |
| 5 | Larsen & Toubro Limited, Construction | Mandya RWS | 500 - 700 | 5 - 8 | 4595 | Fabrication with ICML and Guniting |
| 6 | LC Infra Projects Private Limited | WATCO -Odisha | 600 | 12 | 1648 | Fabrication with FGE and PU Coating |
| 7 | BAC Infratech Private Limited | Tura Water Supply Scheme | 650 | 10 | 900 | Fabrication |
| 8 | LC Infra Projects Private Limited | MP JAL Nigam Machagora | 1200 | 10 | 746 | Fabrication with FGE and PU Coating |
| 9 | Venser Constructions Company Limited | Mansaur Project | 700 | 4 | 404 | Fabrication with FGE and PU Coating |
| 10 | Larsen & Toubro Limited, Construction | Ballia Water Supply Scheme | 1200 | 8 | 350 | Fabrication |
| 11 | Larsen & Toubro Limited, Construction | Water Supply Project Khordha | 406 - 700 | 5.4 - 10 | 390 | Fabrication with FGE and PU Coating |
| 12 | Traders & Engineers Private Limited | 65 MLD GRSTP | 900 | 10 | 378 | Fabrication |
| 13 | NCC Limited | WSS Firozabad Project | 500 - 2200 | 5.6 - 22 | 245 | Fabrication with Painting |

- **Footer line under table (H2-style note):** ...and more completed small orders

---

## 3. Ongoing Major Projects — data table
**Layout:** Same table component as above. 4 rows.

- **H3:** Ongoing Major Projects
- **Columns:** same 7 columns

| Sl No. | Client Name | Project | Diameter (mm) | Thickness (mm) | Qty. in MT | Scope of Work |
|---|---|---|---|---|---|---|
| 1 | Larsen & Toubro Limited, Construction | Sahibganj RWSS | 1100 - 1800 | 12 | 39151 | Fabrication with FGE and PU Coating |
| 2 | Gaja Engineering Pvt Ltd. | Niwali Micro Lift Irrigation | 500 - 2400 | 4 - 14 | 35878 | Fabrication |
| 3 | Larsen & Toubro Limited, Construction | Kekri Sarwar Package 2 | 1821.8 | 10.9 | 17038 | Fabrication with FGE and PU Coating |
| 4 | Vensar Constructions Company Limited | Hanumana Sitapur | 600 - 1600 | 5 - 8 | 8142 | Fabrication with FGE and PU Coating |

- **Footer line under table:** ...and more ongoing small orders

> Table suggestion: a single reusable `<ProjectTable rows={...} />`. Optionally a Completed/Ongoing **tab switcher** instead of two stacked tables (source shows them stacked).

---

## 4. Trusted Partners — logo cards + logo marquee
**Layout:** Eyebrow, H2, subline. Then a grid of partner name cards (name + "EPC Partner" label), and a continuously scrolling **logo marquee/slider** (source repeats the logo list twice = infinite loop).

- **Eyebrow:** Trusted Partners
- **H2:** India's Leading Infrastructure Companies
- **Subline:** Partnering with the nation’s top EPC contractors to deliver critical water infrastructure

**Partner cards (12), each with label "EPC Partner":**
1. L&T
2. KEC
3. DILIP BUILDCON LTD
4. JWIL INFRA LTD
5. VENSAR CONSTRUCTION
6. GAJA ENGINEERING
7. KALPATRU PROJECT INT LTD
8. NCC
9. GVPR
10. LC INFRA
11. BAC INFRA
12. KARAN

**Logo images (12, same order):** `partner-logo-01.png` … `partner-logo-12.png` → `/images/times/projects/` (12 = Karan logo; the source logo order differs slightly from the name list, so match logos to names when you download them)

---

## 5. CTA Band
**Layout:** Full-width call-to-action with H2, paragraph and 2 buttons.

- **H2:** Ready to Start Your Project?
- **Paragraph:** Partner with us for your next pipeline infrastructure project. Our team is ready to deliver excellence.
- **Button 1:** Get in Touch ➔ → `/contact-us/`
- **Button 2:** Email Us → `mailto:marketing@times.net.in`
