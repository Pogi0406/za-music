import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import Search from "pages/Home/Search";
import Error from "pages/Error";
import { ErrorBoundary } from "react-error-boundary";
import Genre from "pages/Genre";
import Home from "pages/Home";

function AppRouter() {
  return (
    <ErrorBoundary fallback={<Error isErrorPage />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genres/:genreId" element={<Genre />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default AppRouter;
