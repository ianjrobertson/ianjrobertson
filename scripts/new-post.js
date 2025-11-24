/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const date = new Date().toISOString().split('T')[0];
const title = process.argv[2] ?? `Untitled Post ${date}`
const slug = title.toLowerCase(/\s+/g, '-').replaceAll(' ', '-');

const postContent = `---
title: "${title}"
date: "${date}"
excerpt: "Add your excerpt here"
---
`;

const postDir = path.join(process.cwd(), 'posts');
const filePath = path.join(postDir, `${slug}.md`);

fs.writeFileSync(filePath, postContent);
console.log(`Created Post: ${filePath}`);