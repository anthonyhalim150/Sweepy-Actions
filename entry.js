import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

async function main() {
  const args = process.env.INPUT_ARGS;
  const command = args ? `npx sweepy ${args}` : 'npx sweepy';

  console.log(`Running: ${command}`);

  try {
    execSync(command, { stdio: 'inherit' });

    const workspace = process.env.GITHUB_WORKSPACE || process.cwd();
    const files = fs.readdirSync(workspace);

    let foundUnused = false;
    for (const file of files) {
      const fullPath = path.join(workspace, file);
      if (fs.statSync(fullPath).isFile()) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('Unused ')) {
          foundUnused = true;
          break;
        }
      }
    }

    if (foundUnused) {
      console.error('❌ Sweepy detected unused files!');
    } else {
      console.log('✅ No unused files detected.');
    }

  } catch (err) {
    console.error('Sweepy failed to run.');
    process.exit(1);
  }
}

main();
