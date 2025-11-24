import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import PageAnimation from '@/components/PageAnimation';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="flex-1 flex flex-col max-w-5xl w-full p-5">
        <main className="flex-1 flex flex-col px-8 py-20">
          <PageAnimation>
            <h1 className="text-4xl font-bold mb-12">Ian Robertson</h1>
          </PageAnimation>

          <div className="flex flex-col gap-8">
            {posts.map((post, index) => (
              <PageAnimation key={post.slug} delay={index * 0.1}>
                <article className="border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                  <p className="text-foreground/80">{post.excerpt}</p>
                </article>
              </PageAnimation>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}