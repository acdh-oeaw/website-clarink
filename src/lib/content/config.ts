import { createConfig } from "@acdh-oeaw/content-lib";

import { pages } from "@/lib/content/collections/pages";
import { projects } from "@/lib/content/collections/projects";
import { tools } from "@/lib/content/collections/tools";
import { indexPage } from "@/lib/content/singletons/index-page";
import { navigation } from "@/lib/content/singletons/navigation";

export const config = createConfig({
	collections: [
		pages.de,
		pages.en,
		projects.de,
		projects.en,
		tools.de,
		tools.en,
		indexPage.de,
		indexPage.en,
		navigation.de,
		navigation.en,
	],
});
