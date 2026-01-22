import { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor"; //editable box
import prism from "prismjs"; //us editable box me colorful syntax highlight
import Markdown from "react-markdown"; //react-markdown ka kaam hai Markdown text ko HTML me badalna aur browser me dikhana.
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // ya koi aur theme
import axios from "axios";
import "./App.css";

const App = () => {
const [count, setcount] = useState(0);
const [code, setcode] = useState(`Write your code here...`);
const [review, setreview] = useState(``)


  useEffect(() => {
    prism.highlightAll(); //<pre><code> tags me jo code hai usko highlight karta hai
  });


  const handleReview = async()=>{

   const response = await axios.post("http://localhost:3000/ai/get-review", {code});
   console.log(response.data)
   setreview(response.data)

  }

  return (
    <main>
      {/* Left Panel */}
      <div className="left">
        <div className="header">✍️ Write Your Code</div>
        <hr />
        <div className="code">
           <Editor
           value={code}
           onValueChange={(code) => setcode(code)}
           highlight={(code) => prism.highlight(code, prism.languages.js, 'js')}
           padding={10}
           style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
           }}
         >
           </Editor>
       
        </div>
        <div onClick={handleReview} className="review-btn">Review Code</div>
      </div>

      {/* Right Panel */}
      <div className="right">
        <div className="header">📝 Code Review</div>
        <hr />
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  );
};




export default App;
