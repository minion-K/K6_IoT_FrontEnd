import CollapsibleSection from '@/components/CollapsibleSection'
import React, { useEffect, useState } from 'react'
import A_CSS from './A_CSS';
import B_Module from './B_Module';

const IndexWrapper = ({ children }: { children: React.ReactNode }) => {
  const sectionCount = React.Children.count(children);
  const [sections, setSections] = useState<boolean[]>(
    Array(sectionCount).fill(false)
  );

  // 마지막 섹션만 열기
  useEffect(() => {
    setSections(
      Array(sectionCount)
        .fill(false)
        .map((_, i) => i === sectionCount - 1)
    );
  }, [sectionCount]);

  const toggleSection = (index: number) => {
    setSections((prev) => prev.map((_, i) => (i === index ? !prev[i] : false)));
  };

  // 각 children에 props 전달
  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              isOpen: sections[index],
              onToggle: () => toggleSection(index),
            })
          : child
      )}
    </>
  );
};

function Index() {
  return (
    <IndexWrapper>
      <CollapsibleSection title="1. 일반 CSS">
        <A_CSS />
      </CollapsibleSection>
      <CollapsibleSection title="2. Module CSS">
        <B_Module />
      </CollapsibleSection>

    </IndexWrapper>
  )
}

export default Index