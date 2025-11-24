import { getPost } from "@/lib/posts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const post = await getPost(slug);
  
  return (
    <>
        <article>
            <h1>{post.postMatter.title}</h1>
            <p>{post.postMatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content}}></div>
        </article>

    </>
  )
}