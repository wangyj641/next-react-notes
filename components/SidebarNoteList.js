import SidebarNoteListFilter from '@/components/SidebarNoteListFilter';
import SidebarNoteItem from '@/components/SidebarNoteItem';
import { getAllNotes } from '@/lib/redis';
import { sleep } from '@/lib/utils';

export default async function NoteList() {

  await sleep(2000)
  const notes = await getAllNotes()

  if (Object.entries(notes).length == 0) {
    return <div className="notes-empty">
      {'No notes created yet!'}
    </div>
  }

  return (
    <SidebarNoteListFilter>
      {Object.entries(notes).map(([noteId, note]) => {
        return <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
      })}
    </SidebarNoteListFilter>
  )
}
