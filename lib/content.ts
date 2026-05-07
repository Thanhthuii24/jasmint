import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface BaseContent {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

export interface BlogPost extends BaseContent {
  readTime: string;
  excerpt: string;
}

export interface Note extends BaseContent {}

function getMdxFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => 
    !file.startsWith('_') && (file.endsWith('.mdx') || file.endsWith('.md'))
  );
}

export function getPosts(): BlogPost[] {
  const postsDir = path.join(contentDir, 'blog');
  if (!fs.existsSync(postsDir)) return [];

  const files = getMdxFiles(postsDir);
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      readTime: data.readTime || '5 min read',
      excerpt: data.excerpt || '',
      content,
    } as BlogPost;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getPosts();
  return posts.find((post) => post.slug === slug);
}

export function getNotes(): Note[] {
  const notesDir = path.join(contentDir, 'notes');
  if (!fs.existsSync(notesDir)) return [];

  const files = getMdxFiles(notesDir);
  const notes = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(notesDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      content,
    } as Note;
  });

  return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNoteBySlug(slug: string): Note | undefined {
  const notes = getNotes();
  return notes.find((note) => note.slug === slug);
}
