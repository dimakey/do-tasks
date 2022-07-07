import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import InboxPage from "../../pages/InboxPage";
import TodayPage from "../../pages/TodayPage";
import FeaturedPage from "../../pages/FeaturedPage";
import UpcomingPage from "../../pages/UpcomingPage";
import CompletedPage from "../../pages/CompletedPage";
import TagsPage from "../../pages/TagsPage";
import SearchPage from "../../pages/SearchPage";
import TestPage from "../../pages/TestPage";
import Page404 from "../../pages/Page404";

const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<InboxPage />} />
        <Route path="inbox" element={<InboxPage />} />
        <Route path="today" element={<TodayPage />} />
        <Route path="featured" element={<FeaturedPage />} />
        <Route path="upcoming" element={<UpcomingPage />} />
        <Route path="completed" element={<CompletedPage />} />
        <Route path="tag/:tagID" element={<TagsPage />} />

        <Route path="search/:searchValue" element={<SearchPage />} />
        <Route path="test" element={<TestPage />} />

        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
};
export default MainLayout;
