import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./UI/AppLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Project from "./pages/Project";
import Projects from "./pages/Projects";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        {/* owner pages */}
        <Route path="/owner" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
