import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://study.tmadhu.me',
  integrations: [
    starlight({
      title: 'Academic Study Vault',
      description: 'Department of English, Jahangirnagar University — Final Year Study Portal',
      sidebar: [
        {
          label: 'Common Courses (E401 - E405)',
          autogenerate: { directory: 'courses/common' },
        },
        {
          label: 'Applied Linguistics & ELT (E410 - E413)',
          autogenerate: { directory: 'courses/linguistics' },
        },
        {
          label: 'Viva Voce (Comprehensive)',
          autogenerate: { directory: 'courses/viva' },
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});
