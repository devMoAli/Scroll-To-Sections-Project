import { useRef } from "react";
import useFetchCustomHook from "../components/useFetch/index";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetchCustomHook(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null);
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  if (pending) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error occured! please try again!</h2>;
  }

  return (
    <div>
      <h1>Scroll to Top & Bottom Feature</h1>
      <h3> Top Section</h3>
      <button onClick={handleScrollToBottom} style={{ cursor: "pointer" }}>
        Scroll to Bottom
      </button>

      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length > 0 ? (
          data.products.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No products found</li>
        )}
      </ul>

      <button
        onClick={handleScrollToTop}
        style={{ marginBottom: "20px", cursor: "pointer" }}
      >
        Scroll to Top
      </button>
      <div ref={bottomRef}></div>
      <h3>Bottom Section</h3>
    </div>
  );
}
