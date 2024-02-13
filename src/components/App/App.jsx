import { useState } from "react";
import articles from "../../articles.json";
import Controls from "../Controls";
import Progress from "../Progress";
import ArticleView from "../ArticleView";

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const visibleArticle = articles[selectedIdx];
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === articles.length - 1;
  const current = selectedIdx + 1;
  const total = articles.length;

  return (
    <div>
      <Controls
        first={isFirst}
        last={isLast}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <Progress current={current} total={total} />
      <ArticleView article={visibleArticle} />
    </div>
  );
}

// import { useState } from "react";
// import ClickTracker from "../ClickTracker/ClickTracker";

// export default function App() {
//   const [clicks, setClicks] = useState({
//     a: 0,
//     b: 0,
//   });

//   const handleClick = (key) => {
//     setClicks({
//       ...clicks,
//       [key]: clicks[key] + 1,
//     });
//   };

//   return (
//     <div>
//       <ClickTracker value={clicks.a} onTrack={() => handleClick("a")}>
//         Clicks A
//       </ClickTracker>
//       <ClickTracker value={clicks.b} onTrack={() => handleClick("b")}>
//         Clicks B
//       </ClickTracker>
//       <p>Total clicks: {clicks.a + clicks.b}</p>
//     </div>
//   );
// }
