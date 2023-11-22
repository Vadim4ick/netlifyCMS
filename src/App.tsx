import postlist from "./posts.json";

function App() {
  return (
    <div className="container">
      {postlist.map((post) => {
        return (
          <article key={post.id}>
            <p>{post.author}</p>
            <span>{post.title}</span>
            <img src={post.thumbnail} alt="" />
          </article>
        );
      })}
    </div>
  );
}

export default App;
