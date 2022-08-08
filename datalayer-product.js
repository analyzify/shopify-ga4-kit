{% comment %} Product view data layer v2.1 - part of "Shopify GA4 Kit" by Analyzify
Visit https://analyzify.app/shopify-google-analytics/ga4 for complete tutorial 
{% endcomment %}

{% assign template_name = template.name %}

<script type="text/javascript">
window.dataLayer = window.dataLayer || [];

window.appStart = function(){
  window.productPageHandle = function(){

    var productName = "{{ product.title | remove: "'" | remove: '"' }}";
    var productId = "{{ product.id }}";
    var productPrice = "{{ product.price | money_without_currency }}";
    var productBrand = "{{ product.vendor | remove: "'" | remove: '"' }}";
    var productCollection = "{{ product.collections.first.title | remove: "'" | remove: '"' }}";
    var productType = "{{ product.type | remove: "'" | remove: '"' }}";
    var productSku = "{{ product.selected_or_first_available_variant.sku | remove: "'" | remove: '"' }}";
    var productVariantId = "{{ product.selected_variant.id | default: product.variants[0].id }}";
    var productVariantTitle = "{{ product.selected_variant.title | default: product.variants[0].title }}";

    window.dataLayer.push({
      event: "analyzify_productDetail",
      productId: productId,
      productName: productName,
      productPrice: productPrice,
      productBrand: productBrand,
      productCategory: productCollection,
      productType: productType,
      productSku: productSku,
      productVariantId: productVariantId,
      productVariantTitle: productVariantTitle,
      currency: "{{ shop.currency }}",
    });
  };

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
      
  {% case template_name %}
  {% when "product" %}
    productPageHandle();
  {% endcase %}

}
appStart();
</script>
