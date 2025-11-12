import React, { useEffect, useState } from "react";
import A_Context from "./A_Context";
import CollapsibleSection from "@/components/CollapsibleSection";
import B_Zustand from "./B_Zustand";
import SignIn from "./SignIn";
import GlobalData from "./GlobalData";
import TruckReservationList from "../../components/TruckReservationList";
import TruckDetailPage from "./truckDetailPage";

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
    <div>
      <h1 style={{ backgroundColor: "black", color: "white", padding: "8px" }}>
        === 리액트 전역 상태 관리 ===
      </h1>
      <IndexWrapper>
        <CollapsibleSection title="1. Context API">
          <A_Context />
        </CollapsibleSection>

        <CollapsibleSection title="2. Zustand">
          <B_Zustand />
        </CollapsibleSection>

        <CollapsibleSection title="3. SignIn Page">
          <SignIn />
        </CollapsibleSection>

        <CollapsibleSection title="4. Zustand Practice(GlobalData)">
          <GlobalData />
        </CollapsibleSection>
        <CollapsibleSection title="5. Zustand Practice(Reservation)">
          <TruckDetailPage />
        </CollapsibleSection>
      </IndexWrapper>
    </div>
  );
}

export default Index;
