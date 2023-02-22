import React from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home-page";

export function RootCmp() {
    return (
      <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            </Routes>
      </div>
    )
  }