{% comment %} Purchase data layer v2.0 - part of "Shopify GA4 Kit" by Analyzify
Visit https://analyzify.app/shopify-google-analytics/ga4 for complete tutorial 
{% endcomment %}

	<script>    
			window.dataLayer = window.dataLayer || [];                                            
			var shipping_price = '{{shipping_price | money_without_currency }}';
			shipping_price  = shipping_price.replace(",", ".");
			var total_price = '{{total_price | money_without_currency }}';
			total_price  = total_price.replace(",", ".");
			var tax_price = '{{tax_price | money_without_currency }}';
			tax_price  = tax_price.replace(",", ".");
		  var orderItemsName = []            
		  var orderItemsPrice = []
		  var orderItemsQuantity = []
			var orderItemsId = []
		  var totalQuantity = 0;

	  {% for line_item in line_items %}
	      orderItemsName.push( '{{ line_item.product.title | remove: "'" | remove: '"'}}')
	      orderItemsPrice.push('{{ line_item.price | times: 0.01 }}');
	      orderItemsQuantity.push('{{ line_item.quantity }}');
	      orderItemsId.push('{{ line_item.product_id }}');
	     totalQuantity +=  {{ line_item.quantity }};
	  {% endfor %}

	  {% if first_time_accessed %} 
					window.dataLayer.push({
					'page_type': 'purchase',
					'event': 'analyzify_purchase',
					'currency': "{{ shop.currency }}",
					'totalValue': total_price,
					'shipping': shipping_price,
					'tax': tax_price,
					'payment_type': '{{order.transactions[0].gateway}}',
					'transaction_id': "{{order.name}}",
				  'productName': orderItemsName,
				  'productPrice': orderItemsPrice,
				  'productQuantity': orderItemsQuantity,
				'productId': orderItemsId,
					});
		{% endif %}
 	</script> 
 
