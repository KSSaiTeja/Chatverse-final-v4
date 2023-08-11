import { Redis } from '@upstash/redis'

export const db = new Redis({
  // @ts-ignore
  url: process.env.UPSTASH_REDIS_REST_URL,
  // @ts-ignore
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})
