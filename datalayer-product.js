{% comment %} Product view data layer v2.0 - part of "Shopify GA4 Kit" by Analyzify
Visit https://analyzify.app/shopify-google-analytics/ga4 for complete tutorial 
{% endcomment %}

<script type="text/javascript">
  window.dataLayer = window.dataLayer || [];

  window.appStart = function(){
    {% assign template_name = template.name %} 

    window.productPageHandle = function(){
      var productName = "{{ product.title | remove: "'" | remove: '"' }}";
      var productId = "{{ product.id }}";
      var productPrice = "{{ product.price | money_without_currency }}";
      var productBrand = "{{ product.vendor | remove: "'" | remove: '"' }}";
      var productCollection = "{{ product.collections.first.title | remove: "'" | remove: '"' }}"

      window.dataLayer.push({
        event: 'analyzify_productDetail',
        productName: productName,
        productId: productId,
        productPrice: productPrice,
        productBrand: productBrand,
        productCategory: productCollection,
      });
    };

    {% case template_name %}
    {% when 'product' %}
    	productPageHandle()
    {% endcase %}
  }

  appStart();
</script>
