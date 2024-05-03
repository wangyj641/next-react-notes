export default function NoteListSkeleton() {
  const numberOfItems = 5; // Number of skeleton items to render

  return (
    <div>
      <ul className="notes-list skeleton-container">
        {[...Array(numberOfItems)].map((index) => (
          <li key={index} className="v-stack">
            <div
              className="sidebar-note-list-item skeleton"
              style={{ height: '5em' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
