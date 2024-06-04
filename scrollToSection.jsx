import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "800px",
        background: "#bbbebf",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "800px",
        background: "#8cb8d1",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "800px",
        background: "#dec4a6",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "800px",
        background: "pink",
      },
    },
    {
      label: "fifth Card",
      style: {
        width: "100%",
        height: "800px",
        background: "orange",
      },
    },
  ];
  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <h1>Scroll to particular section</h1>
      <button style={{ cursor: "pointer" }} onClick={handleScrollToSection}>
        Click to Scroll
      </button>
      {data.map((dataItem, index) => (
        <div ref={index === 1 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
