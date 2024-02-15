import { useState } from "react";
import Controls from "./Controls";
import Progress from "./Progress";
import ArticleView from "./ArticleView";

export default function Reader({ items }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const visibleArticle = items[selectedIdx];
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === items.length - 1;
  const current = selectedIdx + 1;
  const total = items.length;

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
