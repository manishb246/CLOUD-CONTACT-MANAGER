import { createContext, useContext, useEffect, useState } from "react";
import { useContactsApi } from "../api/contactsApi";

const ContactsContext = createContext();

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = useContactsApi();

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getAllContacts();
      setContacts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (form) => {
    const newContact = await api.createContact(form);
    setContacts((prev) => [...prev, newContact]);
  };

  const editContact = async (id, form) => {
    const updated = await api.updateContact(id, form);
    setContacts((prev) =>
      prev.map((c) => (c.id === parseInt(id) ? updated : c))
    );
  };

  const removeContact = async (id) => {
    await api.deleteContact(id);
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        loading,
        error,
        addContact,
        editContact,
        removeContact,
        refetch: fetchContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  return useContext(ContactsContext);
}