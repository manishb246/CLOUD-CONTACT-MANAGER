import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import LandingPage from "./pages/LandingPage";
import UserNavbar from "./components/dashboard/UserNavbar";
import PhoneDirectory from "./pages/PhoneDirectory";
import CreateContact from "./pages/CreateContact";
import ViewContact from "./pages/ViewContact";
import UpdateContact from "./pages/UpdateContact";
import { ContactsProvider } from "./context/ContactsContext";

const ProtectedRoute = ({ children }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

const ProtectedLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-100">
    <UserNavbar />
    <div className="pt-16 sm:pt-20">{children}</div>
  </div>
);

export default function App() {
  return (
    <ContactsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <PhoneDirectory />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/contacts/create"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <CreateContact />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/contacts/:id"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <ViewContact />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/contacts/:id/edit"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <UpdateContact />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ContactsProvider>
  );
}