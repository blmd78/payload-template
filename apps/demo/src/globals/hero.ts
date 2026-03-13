import type { GlobalConfig } from 'payload';
import { revalidateGlobal } from '@payload-template/base/hooks';
import { isAuthenticated, isPublic } from '@payload-template/base/access';

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Section',
  access: {
    read: isPublic,
    update: isAuthenticated,
  },
  hooks: revalidateGlobal('/'),
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titre',
      required: true,
      defaultValue: 'Votre titre ici',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Sous-titre',
      defaultValue: 'Une description courte de votre activité.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image de fond',
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Bouton d\'action',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Texte du bouton',
          defaultValue: 'Nous contacter',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Lien',
          defaultValue: '/contact',
        },
      ],
    },
  ],
};
