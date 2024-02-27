export default function ArticleList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
