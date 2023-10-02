
const fetchPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts", { cache: 'no-cache' });
  const posts = await res.json();
  return posts
}
const Page = async () => {

  const posts = await fetchPosts();

  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <br />
            <h1>{post.id}</h1>
            <h2>{post.title} </h2>
            <p>{post.description}</p>
            <img src={post.image} alt="" />
            <br />
            <hr />
          </>
        )
      })}
    </>
  )
}
export default Page