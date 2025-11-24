import { getAllPosts } from '@/lib/posts';
   import Link from 'next/link';

   export default function Blog() {
     const posts = getAllPosts();
     
     return (
       <div>
         <h1>Blog</h1>
         {posts.map((post) => (
           <article key={post.slug}>
             <Link href={`/blog/${post.slug}`}>
               <h2>{post.title}</h2>
             </Link>
             <p>{post.date}</p>
             <p>{post.excerpt}</p>
           </article>
         ))}
       </div>
     );
   }