/** @jsxRuntime automatic  */
/** @jsxImportSource react */

/* eslint-disable @eslint-react/prefer-read-only-props */

import { createAssetOptions, createComponent } from "@acdh-oeaw/keystatic-lib";
import { fields } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";
import { LinkIcon } from "lucide-react";

import { ImageLinkPreview } from "@/lib/content/keystatic/components/image-link/preview";
import { createLinkSchema } from "@/lib/content/keystatic/utils/create-link-schema";

export const createImageLink = createComponent((paths, locale) => {
	return {
		ImageLink: block({
			label: "Image link",
			description: "An image-only link.",
			icon: <LinkIcon />,
			schema: {
				link: createLinkSchema(paths.downloadPath, locale),
				src: fields.image({
					label: "Image",
					validation: { isRequired: true },
					...createAssetOptions(paths.assetPath),
				}),
				alt: fields.text({
					label: "Image description for screen readers",
					validation: { isRequired: false },
				}),
				text: fields.text({
					label: "Link text (invisible)",
					validation: { isRequired: true },
				}),
			},
			ContentView(props) {
				const { value } = props;

				return (
					<ImageLinkPreview alt={value.alt} link={value.link} src={value.src} text={value.text} />
				);
			},
		}),
	};
});
