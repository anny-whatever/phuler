// src/contexts/ToastContext.jsx
import React, { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success", duration = 3000) => {
    const id = Date.now();

    // Prevent duplicate toasts
    const isDuplicate = toasts.some(
      (toast) => toast.message === message && toast.type === type
    );

    if (!isDuplicate) {
      setToasts((prevToasts) => [
        ...prevToasts,
        { id, message, type, duration },
      ]);
      return id;
    }
    return null;
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-center p-4 space-y-3 pointer-events-none">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
