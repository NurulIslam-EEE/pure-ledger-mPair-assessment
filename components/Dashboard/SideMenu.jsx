"use client";
import React, { useEffect, useState } from "react";
import styles from "./sideMenu.module.css";
import {
  HomeOutlined,
  VideoCameraOutlined,
  EditOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Item from "antd/es/list/Item";
import { usePathname, useRouter } from "next/navigation";

function SideMenu({ pathname }) {
  const [item, selectItem] = useState(1);
  const menuItems = [
    {
      icon: <HomeOutlined style={{ marginRight: "8px" }} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <VideoCameraOutlined style={{ marginRight: "8px" }} />,
      label: "Accounting",
      path: "/dashboard/accounting",
    },
    {
      icon: <EditOutlined style={{ marginRight: "8px" }} />,
      label: "Reports",
      path: "/dashboard/reports",
    },
  ];

  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    selectItem(path);
  }, [path]);
  // console.log("pppp", path);

  return (
    <div>
      {menuItems.map((itm, index) => {
        return (
          <div
            key={itm.label}
            className={
              itm.path === item ? styles.menu_item_select : styles.menu_item
            }
            onClick={() => router.push(itm.path)}
          >
            <div className={styles.icon_text}>
              {/* <HomeOutlined style={{ marginRight: "5px" }} /> */}
              {itm.icon}
              <p>{itm.label}</p>
            </div>
            <RightOutlined />
          </div>
        );
      })}
    </div>
  );
}

export default SideMenu;
