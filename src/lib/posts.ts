import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

const postDirectory = path.join(process.cwd(), 'posts');

export interface PostMatter {
    title: string,
    date: string, 
    excerpt: string
}

export interface Post {
    slug: string,
    postMatter: PostMatter,
    content: string,
}

export function getAllPosts() {
    const fileNames = fs.readdirSync(postDirectory);
    const allPostsData = fileNames.filter(fileName => fileName.includes('.md')).map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const {data} = matter(fileContents);

        return {slug, ...data as PostMatter}
    })

    return allPostsData.sort((a,b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post> {
    const fileName = `${slug}.md`
    const fullPath = path.join(postDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const postMatter = matterResult.data as PostMatter;
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(matterResult.content);

    return {slug, postMatter, content: processedContent.toString() }
}