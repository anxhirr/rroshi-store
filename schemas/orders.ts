export const orders = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'user_email',
      title: 'User Email',
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
      title: 'Created At',
      type: 'datetime',
      options: {
        readOnly: true,
      },
    },
    {
      name: 'telephone',
      title: 'Telephone',

      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'zip',
      title: 'ZIP',
      type: 'string',
    },
  ],
}
