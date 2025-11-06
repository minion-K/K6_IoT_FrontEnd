import CollapsibleSection from '@/components/CollapsibleSection'
import React, { useEffect, useState } from 'react'
import B_Axios from './B_Axios'

const IndexWrapper = ({ children }: { children: React.ReactNode }) => {
    const sectionCount = React.Children.count(children);
    const [sections, setSections] = useState<boolean[]>(Array(sectionCount).fill(false));

    // 마지막 섹션만 열기
    useEffect(() => {
      setSections(Array(sectionCount).fill(false).map((_, i) => i === sectionCount - 1));
    }, [sectionCount]);

    const toggleSection = (index: number) => {
      setSections(prev => prev.map((_, i) => (i === index ? !prev[i] : false)));
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
    <div>
      <h1 style={{ backgroundColor: "black", color: "white", padding: "8px" }}>
        === 리액트 HTTP 통신 ===
      </h1>
      <IndexWrapper>
        <CollapsibleSection title="1. Axios">
          <B_Axios />
        </CollapsibleSection>
      </IndexWrapper>
    </div>
  )
}

export default Index