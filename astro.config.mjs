import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://study.tmadhu.me',
  integrations: [
    starlight({
      title: 'Apun Ka Study',
      description: 'Apun Ka Study — সব নোটস, সিলেবাস আর মেটেরিয়াল এক ছাদের নিচে!',
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
