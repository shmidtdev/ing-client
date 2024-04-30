﻿import React from "react";

export default function Container({children}:
  Readonly<{
    children: React.ReactNode;
  }>){
  return (
    <div className="px-14">
      {children}
    </div>
  )
}