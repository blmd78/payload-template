import type { GlobalConfig } from 'payload';
import { revalidateGlobal } from '@payload-template/base/hooks';
import { isAuthenticated, isPublic } from '@payload-template/base/access';

export const About: GlobalConfig = {
  slug: 'about',
  label: 'Section À propos',
  access: {
    read: isPublic,
    update: isAuthenticated,
  },
  hooks: revalidateGlobal('/'),
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Sur-titre',
      defaultValue: 'À propos',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titre',
      required: true,
      defaultValue: 'Créé pour performer.',
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Paragraphes',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Texte',
          required: true,
        },
      ],
      defaultValue: [
        {
          text: "Ce template Payload CMS est conçu pour accélérer le développement de vos projets web. Architecture moderne, performance optimale et expérience d'édition intuitive — tout est pensé pour que vous puissiez vous concentrer sur ce qui compte.",
        },
        {
          text: "Construit avec Next.js, TypeScript et PostgreSQL, il offre une base solide et extensible pour des applications de toute envergure.",
        },
      ],
    },
  ],
};
