import { getNotes } from '@/lib/content';
import NotesList from './NotesList';

export default function NotesPage() {
  const notes = getNotes();
  return <NotesList notes={notes} />;
}
