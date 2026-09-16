import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://study.tmadhu.me',
  server: {
    host: '0.0.0.0',
    port: 80,
    allowedHosts: ['study.tmadhu.me', '.tmadhu.me', 'localhost', '127.0.0.1'],
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['study.tmadhu.me', '.tmadhu.me', 'localhost', '127.0.0.1'],
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
    preview: {
      allowedHosts: ['study.tmadhu.me', '.tmadhu.me', 'localhost', '127.0.0.1'],
    },
  },
  integrations: [
    starlight({
      title: 'Apun Ka Study',
      description: 'Apun Ka Study — Academic notes, syllabi, and study resources.',
      favicon: '/favicon.png',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Apun Ka Study Logo',
        replacesTitle: false,
      },
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
