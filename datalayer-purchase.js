{% comment %} Purchase data layer v2.1 - part of "Shopify GA4 Kit" by Analyzify
Visit https://analyzify.app/shopify-google-analytics/ga4 for complete tutorial 
{% endcomment %}

{% assign template_name = template.name %}

<script type="text/javascript">
window.dataLayer = window.dataLayer || [];

window.appStart = function(){
  window.allPageHandle = function(){
    window.dataLayer.push({
      event: "sh_info",
      contentGroup: "{{ template_name }}",
      {% if customer %}
      userType: "member",
      customer: {
        id: "{{- checkout.customer.id | json -}}",
        lastOrder: "{{- customer.last_order.created_at | date: '%B %d, %Y %I:%M%p' -}}",
        orderCount: "{{- checkout.customer.orders_count | json -}}",
        totalSpent: "{{- checkout.customer.total_spent | times: 0.01 | json -}}",
        tags: {{- checkout.customer.tags | json -}}
      }
      {% else %}
        userType: "visitor",
      {% endif %}
    });
  };
  allPageHandle();

{% if first_time_accessed and post_purchase_page_accessed != true %}

  var shippingPrice = "{{shipping_price | money_without_currency }}".replace(",", ".");
  var totalPrice = "{{checkout.total_price | money_without_currency }}".replace(",", ".");
  var taxPrice = "{{tax_price | money_without_currency }}".replace(",", ".");
  var orderItemsName = [];
  var orderItemsId = [];
  var orderItemsCategory = [];
  var orderItemsBrand = [];
  var orderItemsType = [];
  var orderItemsPrice = [];
  var orderItemsSku = [];
  var orderItemsvariantId = [];
  var orderItemsQuantity = [];
  var orderItemsvariantTitle = [];
  var totalQuantity = 0;

  {% for line_item in checkout.line_items %}  
      orderItemsName.push("{{ line_item.product.title | remove: "'" | remove: '"'}}");
      orderItemsId.push("{{ line_item.product_id }}");
      orderItemsPrice.push("{{ line_item.price | times: 0.01 }}");
      orderItemsSku.push("{{ line_item.sku | remove: "'" | remove: '"' }}");
      orderItemsQuantity.push("{{ line_item.quantity }}");
      orderItemsvariantId.push("{{ line_item.variant_id }}");
      orderItemsvariantTitle.push("{{ line_item.variant.title }}");
      orderItemsCategory.push("{{ line_item.product.collections.last.title | remove: "'" | remove: '"' }}");
      orderItemsBrand.push("{{ line_item.vendor | remove: "'" | remove: '"' }}");
      orderItemsType.push("{{ line_item.product.type | remove: "'" | remove: '"' }}");
      totalQuantity += {{ line_item.quantity }};
  {% endfor %}

  window.dataLayer.push({  
      page_type: "purchase",
      event: "analyzify_purchase",
      currency: "{{ shop.currency }}",
      totalValue: totalPrice,
      totalValueStatic: totalPrice,
      currencyRate: window.Shopify.currency.rate,
      shipping: shippingPrice,
      tax: taxPrice,
      payment_type: "{{order.transactions[0].gateway}}",
      {% if order.name %}
      transaction_id: "{{order.name | remove: "'" | remove: '"'}}",
      {% else %}
      transaction_id: "{{checkout.id | remove: "'" | remove: '"'}}",
      {% endif %}
      productName: orderItemsName,
      productId: orderItemsId,
      productBrand: orderItemsBrand,
      productCategory: orderItemsCategory,
      productVariantId: orderItemsvariantId,
      productVariantTitle: orderItemsvariantTitle,
      productSku: orderItemsSku,
      productType: orderItemsSku,
      productPrice: orderItemsPrice,
      productQuantity: orderItemsQuantity,
  });

{% endif %}

}
appStart();
</script>

