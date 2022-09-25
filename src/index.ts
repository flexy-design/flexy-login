import chalk from 'chalk'
import { readFileSync, writeFileSync } from 'fs'
import inquirer from 'inquirer'
import path from 'path'

export {}

void (async () => {
  console.log(
    chalk.blueBright(`    ________    _______  ____  __
    / ____/ /   / ____/ |/ /\\ \/  \/
   / /_  / /   / __/  |   /  \\  /
  / __/ / /___/ /___ /   |   / /
 /_/   /_____/_____//_/|_|  /_/`)
  )

  const moduleJsonPath = path.resolve(__dirname, '../package.json')
  const packageJson = JSON.parse(String(readFileSync(moduleJsonPath)))

  console.log(
    chalk.blueBright(`\nWelcome to Flexy CLI! (${packageJson.version})`)
  )
  console.log(chalk.blueBright(`Please type figma token to continue.\n`))

  console.log(chalk.blueBright(`You can get your token here:`))

  console.log(
    chalk.bgBlueBright(` https://www.figma.com/developers/api#access-tokens \n`)
  )

  console.log(
    chalk.blueBright(
      `Click on the link above and click (and copy)
on the ${chalk.bgBlueBright(' + Get personal access token ')}\n`
    )
  )

  const { personalAccessToken } = await inquirer.prompt([
    {
      type: 'password',
      name: 'personalAccessToken',
      message: 'Figma token:'
    }
  ])

  const { betaTesterToken } = await inquirer.prompt([
    {
      type: 'password',
      name: 'betaTesterToken',
      message: 'Beta Tester Token:'
    }
  ])

  writeFileSync(
    path.join(process.cwd(), 'flexy.secret.json'),
    JSON.stringify(
      {
        personalAccessToken,
        betaTesterToken
      },
      null,
      2
    )
  )

  console.log(
    chalk.blueBright(
      `\nSuccess! You can now use the ${chalk.bgBlueBright(
        ' npx flexy-init '
      )} command.\n`
    )
  )
})()
