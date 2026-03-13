import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { Users, Media } from '@payload-template/base/collections';
import { Hero } from './globals/hero';
import { About } from './globals/about';
import { Stats } from './globals/stats';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export default buildConfig({
  serverURL,
  cors: [serverURL, 'http://admin.localhost:3000'],
  csrf: [serverURL, 'http://admin.localhost:3000'],
  graphQL: {
    disable: true,
  },
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' — Demo',
    },
    livePreview: {
      url: serverURL,
      globals: ['hero', 'about', 'stats'],
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  collections: [Users, Media],
  globals: [Hero, About, Stats],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'CHANGE-ME-IN-PRODUCTION',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
});
