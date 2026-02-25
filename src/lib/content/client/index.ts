import { log } from "@acdh-oeaw/lib";

import { createClient as createIndexPageClient } from "@/lib/content/client/index-page";
import { createClient as createNavigationClient } from "@/lib/content/client/navigation";
import { createClient as createPagesClient } from "@/lib/content/client/pages";
import { createClient as createProjectsClient } from "@/lib/content/client/projects";
import { createClient as createToolsClient } from "@/lib/content/client/tools";
import type { Client } from "@/lib/content/types";
import type { IntlLanguage } from "@/lib/i18n/locales";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function createClient(locale: IntlLanguage) {
	try {
		const [pages, projects, tools, indexPage, navigation] = await Promise.all([
			createPagesClient(locale),
			createProjectsClient(locale),
			createToolsClient(locale),
			createIndexPageClient(locale),
			createNavigationClient(locale),
		]);

		const client = {
			collections: {
				pages,
				projects,
				tools,
			},
			singletons: {
				indexPage,
				navigation,
			},
		} satisfies Client;

		return client;
	} catch (error) {
		log.error(
			'Failed to create content client. Did you run "pnpm content:build" or "pnpm content:dev"?',
		);
		throw error;
	}
}
