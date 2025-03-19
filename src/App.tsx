import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";

// Lazy load components for better performance
const HomePage = lazy(() => import("./components/home/HomePage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const SymptomAssessment = lazy(
  () => import("./components/assessment/SymptomAssessment"),
);
const DiagnosisResults = lazy(
  () => import("./components/results/DiagnosisResults"),
);
const ManagementPlan = lazy(
  () => import("./components/management/ManagementPlan"),
);
const ChatSupport = lazy(() => import("./components/chat/ChatSupport"));
const Settings = lazy(() => import("./components/settings/Settings"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <p>Loading OvaCare...</p>
        </div>
      }
    >
      <>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/home"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/assessment"
            element={
              <Layout>
                <SymptomAssessment />
              </Layout>
            }
          />
          <Route
            path="/results"
            element={
              <Layout>
                <DiagnosisResults />
              </Layout>
            }
          />
          <Route
            path="/management"
            element={
              <Layout>
                <ManagementPlan />
              </Layout>
            }
          />
          <Route
            path="/chat"
            element={
              <Layout>
                <ChatSupport />
              </Layout>
            }
          />
          <Route
            path="/settings"
            element={
              <Layout>
                <Settings />
              </Layout>
            }
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
