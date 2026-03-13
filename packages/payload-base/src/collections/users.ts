import type { CollectionConfig } from 'payload';
import { isAdmin, isAdminField, isAdminOrSelf } from '../access';

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Utilisateur',
    plural: 'Utilisateurs',
  },
  auth: true,
  admin: {
    useAsTitle: 'email',
    hidden: ({ user }) => user?.role !== 'admin',
  },
  access: {
    create: isAdmin,
    delete: isAdmin,
    update: isAdminOrSelf,
    read: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nom',
    },
    {
      name: 'role',
      type: 'select',
      label: 'Rôle',
      defaultValue: 'editor',
      options: [
        { label: 'Administrateur', value: 'admin' },
        { label: 'Éditeur', value: 'editor' },
      ],
      access: {
        update: isAdminField,
      },
    },
  ],
};
