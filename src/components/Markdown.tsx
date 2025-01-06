import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "mdx/types";
import { HTMLAttributes, PropsWithChildren } from "react";

import MarkdownPreview from "@uiw/react-markdown-preview";

// const dummyMarkDown = `
// # A demo of react-markdown

// react-markdown is a markdown component for React.

// 👉 Changes are re-rendered as you type.

// 👈 Try writing some markdown on the left.

// ## Overview

// * Follows [CommonMark](https://commonmark.org)
// * Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
// // * Renders actual React elements instead of using dangerouslySetInnerHTML
// // * Lets you define your own components (to render MyHeading instead of h1)
// * Has a lot of plugins

// ## Table of contents

// ## Syntax highlighting

// Pretty neat, eh?

// ## GitHub flavored markdown (GFM)

// For GFM, you can *also* use a plugin:
// ["remark-gfm"](https://github.com/remarkjs/react-markdown#use).
// It adds support for GitHub-specific extensions to the language:
// tables, strikethrough, tasklists, and literal URLs.

// These features **do not work by default**.
// 👆 Use the toggle above to add the plugin.

// | Feature    | Support              |
// | ---------: | :------------------- |
// | CommonMark | 100%                 |
// | GFM        | 100% w/ "remark-gfm" |

// ~~strikethrough~~

// * [ ] task list
// * [x] checked item

// https://example.com

// ## HTML in markdown

// ⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
// use ["rehype-raw"](https://github.com/rehypejs/rehype-raw).
// You should probably combine it with
// ["rehype-sanitize"](https://github.com/rehypejs/rehype-sanitize).

// <blockquote>
//   👆 Use the toggle above to add the plugin.
// </blockquote>

// ## Components

// You can pass components to change things:

// ## More info?

// Much more info is available in the
// [readme on GitHub](https://github.com/remarkjs/react-markdown)!

// ***

// A component by [Espen Hovlandsdal](https://espen.codes/)

// | Feature    | Support              |
// | ---------: | :------------------- |
// | CommonMark | 100%                 |
// | GFM        | 100% w/ "remark-gfm" |
// `;

const components: Readonly<MDXComponents> | null | undefined = {
  em(properties) {
    return <i {...properties} />;
  },
};

export default function Markdown({
  type = "mdx",
  markdown,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  type: "md" | "mdx";
  markdown?: string;
} & PropsWithChildren) {
  if (type === "md") return <MarkdownPreview source={markdown} {...props} />;

  return <MDXProvider components={components}>{children}</MDXProvider>;
}
