import { getPosts, getNotes } from '@/lib/content';
import HomeClient from './HomeClient';

export default function HomePage() {
  const recentPosts = getPosts().slice(0, 3);
  const recentNotes = getNotes().slice(0, 3);

  return <HomeClient recentPosts={recentPosts} recentNotes={recentNotes} />;
}
