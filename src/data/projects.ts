export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  focus: string;
  icon: string;
  productHref: string;
  productStatus: string;
  caseStudyStatus: string;
  caseStudyHref?: string;
}

// Confirmed projects only. Add others after Alex supplies their scope and role.
export const projects: Project[] = [
  {
    id: 'easypaste',
    title: 'EasyPaste',
    category: 'macOS app',
    description: 'Clipboard history and reusable text for Mac. Keep earlier copies in History and save text cards in Note.',
    focus: 'A compact utility for keeping, finding, and reusing text across apps.',
    icon: '/images/easypaste/icon.png',
    productHref: '/apps/easypaste/',
    productStatus: 'In final testing',
    caseStudyStatus: 'Case study draft',
    caseStudyHref: '/work/easypaste/',
  },
  {
    id: 'textselect',
    title: 'Text Select .click',
    category: 'Browser extension',
    description: 'Select text across hyphens and symbols. Copy selected text and select words inside links in Chrome, Edge, and Firefox.',
    focus: 'A browser extension for more control over text selection.',
    icon: '/images/textselect/icon.svg',
    productHref: 'https://textselect.click/',
    productStatus: 'Available browser extension',
    caseStudyStatus: 'Case study in preparation',
  },
];
