export default function ClickTracker({ value, onTrack, children }) {
  return (
    <button onClick={onTrack}>
      {children}: {value}
    </button>
  );
}
