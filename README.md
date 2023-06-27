# Shopify GA4 Kit 
A complete kit to integrate Shopify with GA4. Purchase &amp; product view data layers, pre-built Google Tag Manager container, in-depth tutorials. 


## Analyzify Shopify Data Layers v2.1 change history (open-source) 

1. Code improved, and minor issues related to the item object were fixed.
2. User type, content type, customer id, last order date, total order quantity, total expenditure, and customer tag fields were added with the sh_info event.
3. New product variables were added; productSku, productType, productVariantId, productVariantTitle and currency.
4. New transaction variables were added; orderItemsSku, orderItemsvariantId, orderItemsvariantTitle, orderItemsCategory, orderItemsBrand, orderItemsType
5. Currency rate and static order amount variables were added for multi-currency stores; totalValueStatic, currencyRate.
6. Depending on the Shopify Checkout process, if the OrderID field was empty, the transaction_id field was adjusted to transmit the Checkout ID.
7. Item data (line_item) was modified with the checkout object.

## Download updated Google Tag Manager container

Visit https://analyzify.com/shopify-ga4-kit and request the latest Google Tag Manager container. You'll receive an email from us soon. 
