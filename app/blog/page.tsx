import { getPosts } from '@/lib/content';
import BlogList from './BlogList';

export default function BlogPage() {
  const posts = getPosts();
  return <BlogList posts={posts} />;
}
