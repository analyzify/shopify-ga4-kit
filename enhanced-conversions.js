customer: {
  id: "{{- checkout.customer.id | json -}}",
  email: "{{- checkout.email -}}",
  email_eh: "{{- checkout.email | sha1 -}}",
  lastOrder: "{{- customer.last_order.created_at | date: "%B %d, %Y %I:%M%p" -}}",
  firstName: {{- checkout.billing_address.first_name | json -}},
  lastName: {{- checkout.billing_address.last_name | json -}},
  city: {{- checkout.billing_address.city | json -}},
  zip: {{- checkout.billing_address.zip | json -}},
  address1: {{- checkout.billing_address.address1 | json -}},
  address2: {{- checkout.billing_address.address2 | json -}},
  country: {{- checkout.billing_address.country | json -}},
  province: {{- checkout.billing_address.province | json -}},
  provinceCode: {{- checkout.billing_address.province_code | json -}},
  orderCount: "{{- checkout.customer.orders_count | json -}}",
  totalSpent: "{{- checkout.customer.total_spent | times: 0.01 | json -}}",
  tags: {{- checkout.customer.tags | json -}}
}
