import type { Writable } from 'svelte/store'

const GITHUB_USER = 'marekvospel'

export type LangsArray = {
  [language: string]: number
}

export default async function getLanguages(): Promise<LangsArray> {
  return calcLangPercentage(await fetchLanguages())
}

export async function fetchLanguages(): Promise<LangsArray> {
  const body = await (
    await fetch(`https://api.github.com/users/${GITHUB_USER}/repos`)
  ).json()

  if (body.length <= 0) return {}

  const langArray: LangsArray = {}

  for (const repo of body) {
    const languages = await (await fetch(repo.languages_url)).json()

    if (Object.keys(languages).length <= 0) continue

    for (const lang of Object.keys(languages)) {
      if (!langArray[lang]) langArray[lang] = languages[lang]
      else langArray[lang] += languages[lang]
    }
  }

  return langArray
}

export async function updateLanguages(
  languagesStore: Writable<LangsArray>,
): Promise<void> {
  const body = await (
    await fetch(`https://api.github.com/users/${GITHUB_USER}/repos`)
  ).json()

  if (body.length <= 0) return

  languagesStore.set({})

  for (const repo of body) {
    const languages: LangsArray = await (await fetch(repo.languages_url)).json()

    if (Object.keys(languages).length <= 0) continue

    for (const lang of Object.entries(languages)) {
      languagesStore.update((storeLanguages) => {
        if (!storeLanguages[lang[0]]) storeLanguages[lang[0]] = lang[1]
        else storeLanguages[lang[0]] += lang[1]
        return storeLanguages
      })
    }
  }
}
export function calcLangPercentage(langs: LangsArray): LangsArray {
  const newLangs: LangsArray = {}
  let total = 0

  for (const lang of Object.entries(langs)) {
    total += lang[1]
  }

  for (const lang of Object.entries(langs)) {
    newLangs[lang[0]] = Math.floor((lang[1] / total) * 10000) / 100
  }

  return newLangs
}
