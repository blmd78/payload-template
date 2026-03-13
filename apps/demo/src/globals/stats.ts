import type { GlobalConfig } from 'payload';
import { revalidateGlobal } from '@payload-template/base/hooks';
import { isAuthenticated, isPublic } from '@payload-template/base/access';

export const Stats: GlobalConfig = {
  slug: 'stats',
  label: 'Section Chiffres',
  access: {
    read: isPublic,
    update: isAuthenticated,
  },
  hooks: revalidateGlobal('/'),
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Chiffres',
      required: true,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Valeur',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Libellé',
          required: true,
        },
      ],
      defaultValue: [
        { value: '150+', label: 'Clients accompagnés' },
        { value: '99%', label: 'Satisfaction' },
        { value: '24/7', label: 'Support' },
        { value: '3x', label: 'Plus rapide' },
      ],
    },
  ],
};
