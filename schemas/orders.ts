export const orders = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
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
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'created_at',
      type: 'datetime',
      options: {
        readOnly: true,
      },
    },
  ],
}
