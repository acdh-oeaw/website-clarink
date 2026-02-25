/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Embed from "@/components/content/embed.astro";
import Figure from "@/components/content/figure.astro";
import Grid from "@/components/content/grid.astro";
import GridItem from "@/components/content/grid-item.astro";
import ImageLink from "@/components/content/image-link.astro";
import Image from "@/components/content/img.astro";
import ContentLink from "@/components/content/link.astro";
import Link from "@/components/link.astro";

export const components = {
	a: Link,
	Embed,
	Figure,
	Grid,
	GridItem,
	img: Image,
	ImageLink,
	Link: ContentLink,
};

export function useMDXComponents(): MDXProvidedComponents {
	return components;
}
