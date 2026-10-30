import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'mode',
      type: 'select',
      options: ['online', 'inPerson'],
    },
  ],
}
