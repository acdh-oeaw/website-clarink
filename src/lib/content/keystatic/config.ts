import { withI18nPrefix } from "@acdh-oeaw/keystatic-lib";
import { config as createConfig } from "@keystatic/core";

import { env } from "@/config/env.config";
import { createPages } from "@/lib/content/keystatic/collections/pages";
import { createProjects } from "@/lib/content/keystatic/collections/projects";
import { createTools } from "@/lib/content/keystatic/collections/tools";
import { Logo } from "@/lib/content/keystatic/logo";
import { createIndexPage } from "@/lib/content/keystatic/singletons/index-page";
import { createMetadata } from "@/lib/content/keystatic/singletons/metadata";
import { createNavigation } from "@/lib/content/keystatic/singletons/navigation";

export const config = createConfig({
	collections: {
		[withI18nPrefix("pages", "de")]: createPages("de"),
		[withI18nPrefix("pages", "en")]: createPages("en"),
		[withI18nPrefix("projects", "de")]: createProjects("de"),
		[withI18nPrefix("projects", "en")]: createProjects("en"),
		[withI18nPrefix("tools", "de")]: createTools("de"),
		[withI18nPrefix("tools", "en")]: createTools("en"),
	},
	singletons: {
		[withI18nPrefix("index-page", "de")]: createIndexPage("de"),
		[withI18nPrefix("index-page", "en")]: createIndexPage("en"),

		[withI18nPrefix("metadata", "de")]: createMetadata("de"),
		[withI18nPrefix("metadata", "en")]: createMetadata("en"),

		[withI18nPrefix("navigation", "de")]: createNavigation("de"),
		[withI18nPrefix("navigation", "en")]: createNavigation("en"),
	},
	storage:
		env.PUBLIC_KEYSTATIC_MODE === "github" &&
		env.PUBLIC_KEYSTATIC_GITHUB_REPO_OWNER != null &&
		env.PUBLIC_KEYSTATIC_GITHUB_REPO_NAME != null
			? {
					kind: "github",
					repo: {
						owner: env.PUBLIC_KEYSTATIC_GITHUB_REPO_OWNER,
						name: env.PUBLIC_KEYSTATIC_GITHUB_REPO_NAME,
					},
					branchPrefix: "content/",
				}
			: {
					kind: "local",
				},
	ui: {
		brand: {
			mark: Logo,
			name: "ACDH Website",
		},
		navigation: {
			Pages: [
				withI18nPrefix("index-page", "de"),
				withI18nPrefix("index-page", "en"),

				withI18nPrefix("pages", "de"),
				withI18nPrefix("pages", "en"),
				withI18nPrefix("projects", "de"),
				withI18nPrefix("projects", "en"),
				withI18nPrefix("tools", "de"),
				withI18nPrefix("tools", "en"),
			],
			Settings: [
				withI18nPrefix("navigation", "de"),
				withI18nPrefix("navigation", "en"),

				withI18nPrefix("metadata", "de"),
				withI18nPrefix("metadata", "en"),
			],
		},
	},
});
