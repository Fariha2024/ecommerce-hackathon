import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token:
  "skdANltIRjH50WOPhovfioEvL5vHFxWgOd8S0RHrUchmwY3T7qQ6PlaLaWZJktkwvIzkr2JZEVa367wy2NnX5V8Gl2BgArhJoKszLMoTgfsT0pizYESJtw0KIR8Da2X61XfN94uqccLryjnJUE2lOe43G14sqflWJByF8gcRgqIm55Ec8wvj",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
