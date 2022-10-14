import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

import { VideoCall } from "../pages/VideoCall";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/video-call" element={<VideoCall />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
