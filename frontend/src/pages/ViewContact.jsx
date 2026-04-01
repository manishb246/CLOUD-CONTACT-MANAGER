import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContactsApi } from "../api/contactsApi";

export default function ViewContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = useContactsApi();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadContact() {
      try {
        const data = await api.getContactById(id);
        setContact(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadContact();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !contact) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-14 text-center text-gray-500">
        <p className="text-lg">Error loading contact: {error || "Contact not found"}</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold text-sm px-6 py-2.5 rounded transition-colors"
        >
          Back to Directory
        </button>
      </main>
    );
  }

  const avatarSrc =
    contact.url ||
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.name || "contact"}`;

  const infoItems = [
    { label: "Phone Number", value: contact.mobileNo },
    { label: "Email Address", value: contact.email },
    { label: "Company", value: contact.companyName },
    { label: "Job Title", value: contact.title },
    { label: "Group", value: contact.group },
  ];

  return (
    <main className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 animate-in slide-in-from-top-4 fade-in duration-500">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-extrabold text-yellow-500 mb-2">View Contact</h1>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl">
          Review contact details below.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-50">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-yellow-100 to-orange-100 p-1.5 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white border-4 border-white shadow-inner overflow-hidden ring-1 ring-gray-100">
                <img
                  src={avatarSrc}
                  alt={contact.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.name || "contact"}`;
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
              {contact.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
                >
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    {item.value || "-"}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-8">
              <button
                type="button"
                onClick={() => navigate(`/contacts/${id}/edit`)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-2xl transition-all active:scale-95"
              >
                Edit Contact
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-2xl transition-all active:scale-95"
              >
                Back to Directory
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}