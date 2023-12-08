import * as dotenv from 'dotenv'
dotenv.config()

import { z } from 'zod'

export const APP = z
  .object({
    PORT: z.number(),
    NODE_ENV: z.string(),
    CORES_ENABLED: z.boolean(),
  })
  .parse({
    PORT: Number(process.env.APP_PORT),
    NODE_ENV: process.env.NODE_ENV,
    CORES_ENABLED:
      process.env.CORES_ENABLED?.toLowerCase() === 'true' ? true : false,
  })

export const LIGHTHOUSE = z
  .object({
    API_KEY: z.string(),
  })
  .parse({
    API_KEY: process.env.LIGHTHOUSE_API_KEY,
  })
