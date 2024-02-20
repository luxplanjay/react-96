export default function LangSwitcher({ lang, onSelect }) {
  return (
    <select value={lang} onChange={(e) => onSelect(e.target.value)}>
      <option value="uk">UK</option>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  );
}
