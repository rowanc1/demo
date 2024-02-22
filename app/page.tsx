'use client';

import { ThemeProvider } from '@myst-theme/providers';
import { FrontmatterBlock } from '@myst-theme/frontmatter';
import { MyST, DEFAULT_RENDERERS, Details } from 'myst-to-react';
import { quantumMechanics } from '../components/myst';

export default function MySTComponent() {
  return (
    <article className="min-w-full mt-10 article article-grid">
      <ThemeProvider renderers={DEFAULT_RENDERERS}>
        <FrontmatterBlock
          frontmatter={{
            title: 'Welcome to MyST',
            authors: [
              {
                name: 'Rowan Cockett',
                email: 'rowan@curvenote.com',
                github: 'rowanc1',
                corresponding: true,
              },
            ],
          }}
        />
        <MyST ast={quantumMechanics} />
        <Details title="Title" open>
          Some text
        </Details>
      </ThemeProvider>
    </article>
  );
}

MySTComponent;
