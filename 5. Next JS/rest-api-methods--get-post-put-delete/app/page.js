
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
            {post.id}
            <br />
            <br />
            <hr />
          </>
        )
      })}
    </>
  )
}
export default Page