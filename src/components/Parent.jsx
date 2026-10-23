import Child from "./Child";

function Parent() {
  const books = [
    { id: 1, name: "React Guide", author: "John Doe" },
    { id: 2, name: "Clean Code", author: "Robert Martin" },
    { id: 3, name: "JavaScript Basics", author: "Jane Smith" },
  ];

  return (
    <section>
      <h2>Books</h2>
      <Child books={books} />
    </section>
  );
}

export default Parent;