import type { Access, FieldAccess } from 'payload';

export const isAdmin: Access = ({ req }) => req.user?.role === 'admin';

export const isAdminField: FieldAccess = ({ req }) => req.user?.role === 'admin';

export const isAuthenticated: Access = ({ req }) => Boolean(req.user);

export const isAdminOrSelf: Access = ({ req }) => {
  if (req.user?.role === 'admin') return true;
  return { id: { equals: req.user?.id } };
};

export const isPublic: Access = () => true;
