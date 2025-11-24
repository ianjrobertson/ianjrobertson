import { getPost } from "@/lib/posts";
import Link from "next/link";
import PageAnimation from "@/components/PageAnimation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="flex-1 flex flex-col max-w-5xl w-full p-5">
        <main className="flex-1 flex flex-col px-8 py-20">
          <PageAnimation key={slug}>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
            >
              ← Back to blog
            </Link>

            <article className="space-y-6">
              <header className="space-y-2 pb-6 border-b border-border">
                <h1 className="text-4xl font-bold">{post.postMatter.title}</h1>
                <p className="text-sm text-muted-foreground">
                  {post.postMatter.date}
                </p>
              </header>

              <div
                className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary hover:prose-a:underline prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </PageAnimation>
        </main>
      </div>
    </div>
  );
}
