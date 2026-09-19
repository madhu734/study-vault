import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://study.tmadhu.me',
  devToolbar: {
    enabled: false,
  },
  redirects: {
    '/courses/common/e403-critical-and-cultural-theory': '/courses/common/e403_master_study_guide',
    '/courses/common/e403': '/courses/common/e403_master_study_guide',
    '/courses/common/e401-20th-century-english-lit-1': '/courses/common/e401_master_study_guide',
    '/courses/common/e401': '/courses/common/e401_master_study_guide',
  },
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
      pagefind: false,
      components: {
        Search: './src/components/EmptySearch.astro',
      },
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
        {
          label: 'Course-wise Question Banks',
          autogenerate: { directory: 'question-banks' },
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});
