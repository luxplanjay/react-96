export default function ArticleView({ article }) {
  return (
    <article>
      <h1>{article.topic}</h1>
      <p>{article.text}</p>
    </article>
  );
}
