import React, { useState } from "react";
import SideMenu from "../sideMenu/SideMenu";

export default function TabButton(props) {
  const [visible, setVisible] = useState(false);

  const _onClick = e => {
    visible ? setVisible(false) : setVisible(true);
    // setVisible(!visible)
  };

  return (
    <>
      <div id="Top-tapMenu" onClick={_onClick}>
        {/* thre same components?? */}
        <div className="tap" />
        <div className="tap" />
        <div className="tap" />
      </div>
      <SideMenu visible={visible} onClick={_onClick} />
    </>
  );
}
