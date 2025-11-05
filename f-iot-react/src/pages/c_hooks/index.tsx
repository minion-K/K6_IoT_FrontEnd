import React, { useEffect, useState } from "react";
import CollapsibleSection from "@/components/CollapsibleSection";
import State01 from "./a_useState/State01";
import State02 from "./a_useState/State02";
import State03 from "./a_useState/State03";
import State04 from "./a_useState/State04";
import State05 from "./a_useState/State05";
import State06 from "./a_useState/State06";
import Ref01 from "./b_useRef/Ref01";
import Ref02 from "./b_useRef/Ref02";
import Ref_Practice01 from "./b_useRef/Practice01";
import Ref_Practice02 from "./b_useRef/Practice02";
import Effect01 from "./c_useEffect/Effect01";
import Effect02 from "./c_useEffect/Effect02";
import Effect_Practice01 from "./c_useEffect/Practice01";
import A_useCallback from "./d_callback_memo/A_useCallback";
import B_useMemo from "./d_callback_memo/B_useMemo";
import Reducer01 from "./e_useReducer/Reducer01";
import Reducer02 from "./e_useReducer/Reducer02";

export default function Index() {
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

  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white", padding: "8px" }}>
        === 리액트 Hooks ===
      </h1>

      <IndexWrapper>
        <CollapsibleSection title="1. 리액트 Hooks - useState">
          <State01 /> <hr />
          <State02 /> <hr />
          <State03 /> <hr />
          <State04 /> <hr />
          <State05 /> <hr />
          <State06 /> <hr />
        </CollapsibleSection>

        <CollapsibleSection title="2. 리액트 Hooks - useRef">
          <Ref01 /> <hr />
          <Ref02 /> <hr />
          <Ref_Practice01 /> <hr />
          <Ref_Practice02 /> <hr />
        </CollapsibleSection>

        <CollapsibleSection title="3. 리액트 Hooks - useEffect">
          <Effect01 /> <hr />
          <Effect02 /> <hr />
          <Effect_Practice01 /> <hr />
        </CollapsibleSection>

        <CollapsibleSection title="4. 리액트 Hooks - useCallback & useMemo">
          <A_useCallback /> <hr />
          <B_useMemo />
        </CollapsibleSection>

        <CollapsibleSection title="5. 리액트 Hooks - useReducer">
          <Reducer01 /> <hr />
          <Reducer02 /> <hr />
        </CollapsibleSection>
      </IndexWrapper>
    </div>
  );
}
