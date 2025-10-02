// frontend/src/lib/api.js
export const API_BASE =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_API_BASE_URL) ||
  "http://localhost:5000";

// Optional helper function for axios
import axios from "axios";

export const apiFetch = (endpoint, options = {}) => {
  // Automatically prepends API_BASE to all endpoints
  return axios({
    url: `${API_BASE}${endpoint}`,
    ...options,
  });
};
