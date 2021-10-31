import { writable } from 'svelte/store';

export const skills = writable([
  {
    name: 'Linux',
    value: '100'
  },
  {
    name: 'JavaScript',
    value: '90'
  },{
    name: 'HTML',
    value: '90'
  },{
    name: 'CSS',
    value: '80'
  },{
    name: 'Vue',
    value: '75'
  },{
    name: 'Svelte',
    value: '50'
  },
])
