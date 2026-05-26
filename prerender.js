import { Prerenderer } from '@prerenderer/prerenderer';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    const prerenderer = new Prerenderer({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'],
        renderer: new PuppeteerRenderer(),
    });

    console.log('Starting pre-rendering pass for perfect SEO...');
    await prerenderer.initialize();
    await prerenderer.render();
    await prerenderer.destroy();
    console.log('Pre-rendering complete! Static HTML generated.');
}

run().catch(err => {
    console.error('Pre-render failed:', err);
    process.exit(1);
});