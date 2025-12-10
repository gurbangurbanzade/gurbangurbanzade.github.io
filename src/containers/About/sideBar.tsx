import React, { useState } from "react";
import "./style.scss";
function SideBar() {
  const [isSidebarOpened, setSidebarOpened] = useState(false);

  const handleBgDivClick = () => {
    const sidebar = document.querySelector(".aside");
    const upperCard = document.querySelector(".upper__card");

    if (!sidebar || !upperCard) return;

    if (isSidebarOpened) {
      (upperCard as HTMLElement).style.left = "0";
      sidebar.classList.remove("opened");
    } else {
      (upperCard as HTMLElement).style.left = "-150%";
      sidebar.classList.add("opened");
    }

    setSidebarOpened(!isSidebarOpened);
  };

  return (
    <div className="bg">
      <div onClick={handleBgDivClick}>Click me</div>
    </div>
  );
}

export default SideBar;
