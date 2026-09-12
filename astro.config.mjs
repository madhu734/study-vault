import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://study.tmadhu.me',
  integrations: [
    starlight({
      title: 'Academic Study Vault',
      description: 'English Literature, ELT & Linguistics Knowledge Base',
      sidebar: [
        {
          label: 'Overview',
          link: '/',
        },
        {
          label: 'Courses',
          autogenerate: { directory: 'courses' },
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});