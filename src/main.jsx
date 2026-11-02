import reactDom from "react-dom/client";
import Counter from "./Counter";
import "./main.css"

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<Counter />)