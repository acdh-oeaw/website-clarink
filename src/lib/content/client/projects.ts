import { keyByToMap } from "@acdh-oeaw/lib";
import type en from "@content/en-projects";

import type { CollectionClient } from "@/lib/content/types";
import type { IntlLanguage } from "@/lib/i18n/locales";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function createClient(locale: IntlLanguage) {
	const collection = await import(`@content/${locale}-projects/index.js`).then((module) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		return module.default as typeof en;
	});

	const ids = Array.from(collection.keys());

	const all = Array.from(collection.values())
		.map((entry) => {
			return entry.document;
		})
		// eslint-disable-next-line unicorn/no-array-sort
		.sort((a, z) => {
			return a.metadata.title.localeCompare(z.metadata.title);
		});

	const byId = keyByToMap(all, (item) => {
		return item.id;
	});

	const client = {
		ids() {
			return Promise.resolve(ids);
		},
		all() {
			return Promise.resolve(all);
		},
		byId() {
			return Promise.resolve(byId);
		},
		get(id: string) {
			return Promise.resolve(byId.get(id) ?? null);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} satisfies CollectionClient<any>;

	return client;
}

export type Project =
	Awaited<ReturnType<typeof createClient>> extends CollectionClient<infer T> ? T : never;
