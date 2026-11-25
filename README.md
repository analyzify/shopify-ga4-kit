# shopify-ga4-kit

> **Status: Archived on 2026-11-25**. Free Shopify + GA4 kit by Analyzify: theme data layers for product view and purchase, and a Google Ads enhanced conversions snippet (2022).

## What it is

Three JavaScript/Liquid snippets for Shopify themes: `datalayer-product.js` (product view data layer), `datalayer-purchase.js` (purchase data layer for the order status page) and `enhanced-conversions.js` (Google Ads enhanced conversions). Paired with a pre-built Google Tag Manager container that merchants requested by email from analyzify.com. Licensed GPL-3.0.

## Why it existed

Before GA4 had good native Shopify support, Analyzify gave away this kit (data layers v2.1, a GTM container and tutorials) as a free lead magnet for the paid Analyzify app. The analyzify.com page for the kit now says the Shopify GA4 Kit has been deprecated and points merchants to the Analyzify app instead.

## Status

Archived on 2026-11-25 as part of the analyzify GitHub org cleanup. The kit is marked deprecated on https://analyzify.com/shopify-ga4-kit; the code has not changed since 2023-06-27. The repo stays read-only for reference.

## Where it ran

| What | Value |
|---|---|
| Domains / URLs | Kit page: https://analyzify.com/shopify-ga4-kit (serves 200 on 2026-11-25, shows a deprecation warning). Old repo homepage https://analyzify.com/shopify-google-analytics/ga4 now redirects to https://analyzify.com/guidebooks/shopify-google-analytics. |
| Hosting | None. The snippets run inside the merchant's Shopify theme and checkout. |
| DNS zone | None (no domain of its own). |
| Database | None. |
| Storage | None. The GTM container was sent by email from analyzify.com, not stored here. |
| Deploy | None. Merchants copy-paste the snippets into their theme. |

## Tech stack

JavaScript + Shopify Liquid, Google Tag Manager dataLayer, GA4, Google Ads enhanced conversions.

## History

- First commit: 2022-08-07 (initial commit); last commit: 2023-06-27 (README update); 17 commits (14 without merges).
- Authors: the Analyzify team.
- 2022-08-07: existing data layers added; PRs #1, #2, #3 (customer object, new product and transaction variables, enhanced conversions) opened and merged 2022-08-08 as v2.1.
- 2022-08-10 to 2022-08-17: README and download instructions written.
- 2023-06-07: PRs #6 and #7 (product data layer updates) closed; PR #8 left open.
- 2023-06-27: last README update.
- Open at archive time: PR #5 (enhanced purchase data layer, 2023-01-06), PR #8 (2023-06-07), issue #4 (download not working, 2022-09-20), issue #9 (uncaught exception in datalayer-product.js, 2024-05-13).
- Kit later marked deprecated on analyzify.com; 2026-11-25: archived.

## Related repos

- https://github.com/analyzify/shopify-pixels: the Customer Events (Shopify Pixels) variant from October 2022.
- https://github.com/analyzify/GTM-Kit: the 2024-2025 successor based on Shopify Customer Events and GTM.
- https://github.com/analyzify/ads-enhanced-conversion: a later standalone version of the enhanced conversions snippet.

## Who to ask

The Analyzify team (via https://analyzify.com).

## Original README

### Shopify GA4 Kit 
A complete kit to integrate Shopify with GA4. Purchase &amp; product view data layers, pre-built Google Tag Manager container, in-depth tutorials. 


#### Analyzify Shopify Data Layers v2.1 change history (open-source) 

1. Code improved, and minor issues related to the item object were fixed.
2. User type, content type, customer id, last order date, total order quantity, total expenditure, and customer tag fields were added with the sh_info event.
3. New product variables were added; productSku, productType, productVariantId, productVariantTitle and currency.
4. New transaction variables were added; orderItemsSku, orderItemsvariantId, orderItemsvariantTitle, orderItemsCategory, orderItemsBrand, orderItemsType
5. Currency rate and static order amount variables were added for multi-currency stores; totalValueStatic, currencyRate.
6. Depending on the Shopify Checkout process, if the OrderID field was empty, the transaction_id field was adjusted to transmit the Checkout ID.
7. Item data (line_item) was modified with the checkout object.

#### Download updated Google Tag Manager container

Visit https://analyzify.com/shopify-ga4-kit and request the latest Google Tag Manager container. You'll receive an email from us soon.
