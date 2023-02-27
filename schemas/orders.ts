export const orders = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'user_email',
      type: 'string',
    },
    {
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product',
              type: 'reference',
              to: [{ type: 'product' }],
            },
            {
              name: 'quantity',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      name: 'created_at',
      type: 'datetime',
      options: {
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'string',
      options: {
        list: [
          { value: 'ordered', title: 'Ordered' },
          { value: 'shipped', title: 'Shipped' },
          { value: 'delivered', title: 'Delivered' },
        ],
      },
    },
    {
      name: 'total',
      type: 'number',
    },
    {
      name: 'telephone',
      type: 'string',
    },
    {
      name: 'address',
      type: 'string',
    },
    {
      name: 'city',
      type: 'string',
    },
    {
      name: 'zip',
      type: 'string',
    },
  ],
}
