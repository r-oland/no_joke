import 'server-only';

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api';
import {
  aboutQuery,
  illustrationQuery,
  pageQuery,
  workQuery,
} from 'lib/sanity.queries';
import { createClient } from 'next-sanity';

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export const client = createClient({ projectId, dataset, apiVersion, useCdn });

export async function getWork(): Promise<WorkEntity[]> {
  if (!client) return [];
  return client.fetch(workQuery);
}

export async function getIllustrations(): Promise<IllustrationEntity[]> {
  if (!client) return [];
  return client.fetch(illustrationQuery);
}

export async function getAbout(): Promise<AboutEntity | undefined> {
  if (!client) return undefined;
  return client.fetch(aboutQuery);
}

export async function getPage(page: Page): Promise<PageEntity | undefined> {
  if (!client) return undefined;
  return client.fetch(pageQuery(page));
}
