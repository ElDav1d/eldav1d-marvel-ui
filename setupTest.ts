import '@testing-library/jest-dom';

import { beforeEach } from 'vitest';

beforeEach(() => {
  document.head.innerHTML = '<title>Test</title>';
});
