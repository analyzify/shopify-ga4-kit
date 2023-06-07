{% comment %} Product view data layer v2.1 - part of "Shopify GA4 Kit" by Analyzify
Visit https://analyzify.app/shopify-google-analytics/ga4 for complete tutorial 
{% endcomment %}

{% assign template_name = template.name %}

<script type="text/javascript">
window.dataLayer = window.dataLayer || [];

window.appStart = function(){
  window.productPageHandle = function(){

    var productName = {{ product.title | json }};
    var productId = {{ product.id | json }};
    var productPrice = parseFloat(Number({{ product.price | money_without_currency }}).toFixed(2));
    var productBrand = {{ product.vendor | json }};
    var productCollection = {{ product.collections.first.title | json }};
    var productType = {{ product.type | json }};
    var productSku = {{ product.selected_or_first_available_variant.sku | json }};
    var productVariantId = {{ product.selected_variant.id | default: product.variants[0].id | json }};
    var productVariantTitle = {{ product.selected_variant.title | default: product.variants[0].title | json }};

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
