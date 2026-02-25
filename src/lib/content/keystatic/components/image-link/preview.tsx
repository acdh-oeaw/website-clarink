/** @jsxRuntime automatic  */
/** @jsxImportSource react */

import { useObjectUrl, type UseObjectUrlParams } from "@acdh-oeaw/keystatic-lib/preview";
import { NotEditable } from "@keystatic/core";
import type { ReactNode } from "react";

interface ImageLinkPreviewProps {
	alt?: string;
	link: unknown;
	src: UseObjectUrlParams | null;
	text: string;
}

export function ImageLinkPreview(props: Readonly<ImageLinkPreviewProps>): ReactNode {
	const { alt = "", link: _link, src, text: _text } = props;

	const url = useObjectUrl(src);

	if (url == null) return null;

	return (
		<NotEditable>
			<img alt={alt} className="overflow-hidden rounded-md" src={url} />
		</NotEditable>
	);
}
