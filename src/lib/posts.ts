import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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
    const allPostsData = fileNames.map((fileName) => {
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
    const processedContent = await remark().use(html).process(matterResult.content);

    return {slug, postMatter, content: processedContent.toString() }
}