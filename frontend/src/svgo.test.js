/** @jest-environment node */
const { optimize } = require('svgo');

// GHSA-w27v-7q3p-w38r: exercise the opt-in plugin, including both bypasses.
test.each([
  '<svg:a href="javascript:alert(1)">link</svg:a>',
  '<a href="java&#9;script:alert(1)">link</a>',
  '<a href="java&#10;script:alert(1)">link</a>',
  '<a href="java&#13;script:alert(1)">link</a>',
  '<svg:a xlink:href="java&#9;script:alert(1)">link</svg:a>',
])('removes an executable SVG link: %s', (anchor) => {
  const input = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${anchor}</svg>`;
  const result = optimize(input, { plugins: ['removeScriptElement'] });
  expect(result.data).not.toContain('alert(1)');
});

test('preserves a harmless HTTPS SVG link', () => {
  const result = optimize(
    '<svg xmlns="http://www.w3.org/2000/svg"><a href="https://example.com">link</a></svg>',
    { plugins: ['removeScriptElement'] }
  );
  expect(result.data).toContain('https://example.com');
});
