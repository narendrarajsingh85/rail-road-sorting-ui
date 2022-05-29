import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./destination/destination-landing";
import SelectedDestination from "./destination/destination-details";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Root(props) {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Route path="/destination" component={LandingPage}></Route>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
