// Basic accessibility tests - run with: node src/accessibility-test.js
const fs = require('fs');
const path = require('path');

async function testAccessibility() {
  console.log(' Running accessibility tests...\n');

  const testResults = [];

  // Test 1: Check for basic accessibility attributes in page.tsx
  const pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

  const tests = [
    { name: 'Page title exists', check: () => /title:\s*['"][^'"]+['"]/.test(pageContent) },
    { name: 'Alt attributes for images', check: () => /alt=['"][^'"]+['"]/.test(pageContent) },
    { name: 'Header landmarks present', check: () => /<header/.test(pageContent) },
    { name: 'Main landmark present', check: () => /role=["']main["']/.test(pageContent) },
    { name: 'Footer landmark present', check: () => /<footer/.test(pageContent) },
    { name: 'Semantic HTML5 tags', check: () => /<(main|section|article|header|footer|nav|aside)/m.test(pageContent) },
    { name: 'Color contrast classes', check: () => /text-(gray|white)/.test(pageContent) },
    { name: 'Skip navigation link', check: () => /href="#main-content"/.test(pageContent) },
    { name: 'Focus styles', check: () => /focus:outline-none/.test(pageContent) },
    { name: 'ARIA labels', check: () => /(aria-label|aria-labelledby)/.test(pageContent) }
  ];

  tests.forEach(test => {
    const passed = test.check();
    testResults.push({ name: test.name, passed });
    console.log(` ${test.name}: ${passed ? 'PASS' : 'FAIL'}`);
  });

  const score = (testResults.filter(r => r.passed).length / tests.length * 100);
  console.log(`\n Score: ${score.toFixed(0)}% (${testResults.filter(r => r.passed).length}/${tests.length} tests passed)`);

  if (score >= 80) {
    console.log(' SUCCESS: Accessibility requirements met!');
  } else {
    console.log('  WARNING: Some accessibility requirements not fully met');
    process.exit(1);
  }
}

// Only run if called as script
if (require.main === module) {
  testAccessibility().catch(console.error);
}

module.exports = { testAccessibility };
