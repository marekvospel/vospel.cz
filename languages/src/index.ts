import getLanguages from "./utils/languages.js";
import * as fs from "fs";

const fetchLangs = async () => {
  const langs = await getLanguages()

  const langFile: { [string: string]: number } = {}

  for (const lang of Object.entries(langs)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)) {

    langFile[lang[0]] = lang[1]

  }

  fs.writeFileSync('../languages.json', JSON.stringify(langFile), { encoding: 'utf-8' })
}

setInterval(fetchLangs, 2 * 60 * 60 * 1000)

fetchLangs().then()
