import type { CollectionConfig } from 'payload';
import { isAuthenticated, isPublic } from '../access';

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Média',
    plural: 'Médias',
  },
  access: {
    read: isPublic,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  upload: {
    mimeTypes: ['image/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 576,
        position: 'centre',
      },
      {
        name: 'full',
        width: 1920,
        height: undefined,
        position: 'centre',
      },
    ],
  },
  admin: {
    useAsTitle: 'alt',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Texte alternatif',
      required: true,
    },
  ],
};
