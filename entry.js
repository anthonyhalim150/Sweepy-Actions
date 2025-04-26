import { execSync } from 'child_process'

async function main() {
  const args = process.env.INPUT_ARGS
  const command = args ? `npx sweepy ${args}` : 'npx sweepy'

  console.log(`Running: ${command}`)

  try {
    execSync(command, { stdio: 'inherit' })
  } catch (err) {
    console.error('Sweepy found issues or failed to run.')
    process.exit(1)
  }
}

main()
