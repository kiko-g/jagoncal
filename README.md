# Website for José Gonçalves

This is the source code for José Gonçalves personal website, [hosted in Vercel](https://jagoncal.vercel.app).

## Editing website content

All the information on the website that is meant to be updated is inside `*.mdx` folders. The `*.mdx` files are written in Markdown with some React components. These files have been configured so that the user only needs to edit:

- The `meta` variable: There is a variable in every `*.mdx` file called `meta` that exports metadata related to the page.
- The **actual markdown content**: Below every `export const meta = { ... }` line, there is a markdown text that is meant to be edited.

The existing `*.mdx` files are:

- `index.mdx`: The home page.
- `about.mdx`: The about page.
- `projects.mdx`: The projects page - each project card is defined inside the `meta` variable of this file.
- `projects.mdx`: The teaching page - each teaching entry is defined inside the `meta` variable of this file.
- `blog/*.mdx`: The blog posts - inside the `blog` folder each folder or `.mdx` file is a blog post and possibly contains images related to the blogpost.
