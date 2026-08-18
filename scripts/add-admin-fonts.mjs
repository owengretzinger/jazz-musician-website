import { readFile, writeFile } from 'node:fs/promises';

const adminStyles = new URL('../public/admin/main.css', import.meta.url);
const fonts = `@import url("https://fonts.googleapis.com/css2?family=Changa:wght@200..800&family=Dancing+Script:wght@400..700&display=swap");

:root {
  --font-changa: "Changa", sans-serif;
  --font-dancing: "Dancing Script", cursive;
}

`;

const styles = await readFile(adminStyles, 'utf8');
await writeFile(adminStyles, fonts + styles);
