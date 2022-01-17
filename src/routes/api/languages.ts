import type { EndpointOutput } from '@sveltejs/kit'
import * as fs from 'fs'

export async function get(): Promise<EndpointOutput> {
  const languages = JSON.parse(
    fs.readFileSync('languages.json', { encoding: 'utf-8' }),
  )
  return { body: languages }
}
