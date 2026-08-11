# Widberz Website Audit

Date: 11 August 2026

This audit records the current static export before restructuring. It implements Phase 1 of `master_plan.txt`; no production pages or assets have been changed.

## Current implementation

- 19 public HTML documents are present, of which 16 are listed in `page-sitemap.xml`.
- The site is a WordPress static export. Public pages contain WordPress, Elementor, Astra, WooCommerce, WPForms, and HT Mega assets.
- `wp-content` is approximately 212 MB and `wp-includes` approximately 35 MB. These are the principal reduction candidates, subject to an asset-use manifest and visual regression checks.
- Current header navigation: Home, About Us, Our Services, Bookkeeping Services, Brand & Digital Services, IT & Business Consulting, Web Hosting, Zoho Services, Contact Us.
- WCPS does not appear in any current Widberz public page. The separately deployed app at `https://wcps.widberz.com` is a Flutter web application, not a public marketing site.
- Verified WCPS public metadata: **“WCPS | Your Clinic. Simplified.”**; it is described as a **Clinic Practice System for modern healthcare providers** that manages **patients, billing, and clinic operations in one system**.

## Route and content decisions

| Current route | Current purpose | Master-plan decision | Recommended action |
| --- | --- | --- | --- |
| `/` | Broad SME/support positioning | Restructure | Rewrite homepage around business technology; add WCPS feature and compact Zoho partner section. |
| `/services/` | Broad services, including brand and bookkeeping | Restructure | Retain as the services hub for Web & App Development, IT & Business Consulting, Business Systems & Automation, and Infrastructure & Deployment. |
| `/it-business-consulting/` | IT, business consulting, and Zoho material | Keep / rewrite | Retain URL; refocus on technology, systems, implementation, and transformation. Move duplicate Zoho detail to the Zoho page. |
| `/brand-digital-services/` | Brand work and website packages | Consolidate | Reuse relevant web/digital delivery content in Web & App Development; redirect after its replacement page is live. |
| `/website-by-the-month/` | Website-rental packages | Consolidate or retire | Do not retain rental/package positioning. Reuse only relevant website delivery content, then redirect to Web & App Development or retire. |
| `/web-hosting/` | Traditional hosting packages | Replace | Replace with Infrastructure & Deployment; preserve the old URL by redirecting to the replacement route. |
| `/zoho-services/` | Zoho partner/services page | Retain / reposition | Create a focused Zoho Partner page; preserve this URL through redirect or canonical migration. Link individual products to official Zoho pages. |
| `/bookkeeping-services/` | Bookkeeping packages | Remove | Remove from navigation and services. Redirect to `/services/` only if a relevant visitor journey remains; otherwise retire after SEO review. |
| `/abo/` | Detailed About content | Consolidate | Use as the likely source for the new About page, then redirect to `/about/`. |
| `/about/` | Short About page | Keep / rewrite | Retain canonical About route; merge useful content from `/abo/`. |
| `/contact-us/` | Contact details and WPForms | Keep | Retain route and contact details. Replace/export the non-functional WordPress form implementation only after its delivery destination is confirmed. |
| `/projects/` | Portfolio/projects | Retire | The exported page contained no project content. Redirect to `/services/`. |
| `/future-ready-strategy-session/` | Strategy programme | Consolidate | Retained as the Future-Ready Strategy System™ guide at `/resources/guides/future-ready-strategy-system/`; redirect the legacy URL. |
| `/form-handler/` | Form bridge | Technical review | Confirm whether this route is still used before removal. It is not a planned public offering. |
| `/10-2/` | Untitled page | Retire candidate | Inspect content/traffic before retirement; do not expose in the new navigation. |
| `/sample-page/` | WordPress sample content | Retire candidate | Remove from sitemap and retire after redirect/SEO decision. |
| `/hello-world/` | WordPress sample post | Retire candidate | Remove from sitemap and retire after redirect/SEO decision. |
| `/author/widadmin/` | Author archive | Retire candidate | Remove from sitemap and retire after SEO decision. |
| `/category/uncategorized/` | Category archive | Retire candidate | Remove from sitemap and retire after SEO decision. |

## Required new information architecture

Primary navigation should become:

1. Home
2. Services
   - Web & App Development
   - IT & Business Consulting
   - Business Systems & Automation
   - Infrastructure & Deployment
3. WCPS
4. Zoho Partner
5. About
6. Contact

The WCPS hierarchy in the master plan is appropriate. The public app confirms the core positioning above, but does not provide a public marketing page from which to source approved feature-page copy or screenshots. Its feature claims, clinic-audience copy, and screenshots must be supplied or approved before implementation. **Explore WCPS** should link to `https://wcps.widberz.com/`; **Request a Demo** should link to the verified public demo destination, `https://demo.wcps.widberz.com/`.

## SEO and routing risks

- Preserve existing live routes until replacement pages and redirects are deployed.
- Existing static links include broken or non-exported targets: `/contact`, `/home`, `/services/bookkeeping-services`, `/services/brand-digital-services`, and `/services/it-business-consulting`.
- Regenerate `sitemap.xml`, `robots.txt`, canonical tags, page titles, meta descriptions, and structured data after route decisions are final.
- Retired routes need platform-level redirects. A static HTML repository cannot perform HTTP redirects by itself; the Cloudflare Pages redirect configuration must be added during the implementation phase.

## Functional and technical risks

- The contact page posts to a WordPress/WPForms URL (`/contact-us/?simply_static_page=5097`) with export-time tokens. It will not function on a plain static deployment without a replacement or retained backend.
- The contact page includes a Cognito-related dependency. Its intended role and working delivery path must be verified before changing the form.
- `static-server.ps1` serves every file as `text/html` and does not resolve nested directory routes to `index.html`. It is unsuitable as a static-site verification server.
- No analytics provider was identified in the home page. Confirm the production analytics requirement before adding or removing tracking.

## Safe implementation sequence

1. Obtain WCPS source copy/assets for the feature and clinic-audience pages. The product and demo destinations are confirmed.
2. Confirm the route decisions marked **Review**, and approve the final URLs for the three new/repositioned service pages, WCPS, and Zoho.
3. Capture visual baselines for all retained routes at desktop and mobile widths.
4. Build the shared static page shell and revised navigation using the existing design language.
5. Implement rewritten retained pages, then new WCPS and service pages using approved material only.
6. Add Cloudflare Pages redirects, repair internal links, replace the contact-form delivery path, and update SEO files.
7. Produce a precise asset-use manifest, visual comparison, link check, and only then remove unreferenced WordPress export material.
