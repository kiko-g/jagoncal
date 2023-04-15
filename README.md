# Website for José Gonçalves

This is the source code for José Gonçalves personal website, [hosted in Vercel](https://jagoncal.vercel.app).

## Website content

To edit the website content follow these instructions:

- **Projects**: edit the `pages/projects.tsx` file. There is a `projects` variable which conveys an array of objects. Each object represents a project and has the following properties:

  - `title`: the project title
  - `description`: the project description
  - `url`: the link to an outside resource of the project
  - `domain`: the domain of the url

- **Articles**: these are basically **journal pages** or **blog posts**. To edit them go to the `pages/articles` folder and edit the markdown (`.mdx`) files. The files are named after the name or title of the article. Inside you can write in Markdown and also use React components. Read about [Markdown Syntax](https://www.markdownguide.org/cheat-sheet/) and also about [MarkdownX](https://mdxjs.com/guides/gfm/) to be proficient in editing the content. The articles are ordered by date, so the most recent article is the first one.

- **Teaching**: edit the `pages/teaching.tsx` file. There is a `teaching` variable which conveys an array of objects which represents groups of teaching, grouped by institution. Each object represents a teaching activity and has the following properties:

  - `title`: the teaching activity title
  - `course`:
    - `name`: Name of the course
    - `timeSpan`: Span of time the teacher has been active
    - `description`: Description of the course and its main objectives
    - `url`: Link to the course website
