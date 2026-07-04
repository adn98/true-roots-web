import axios from "axios";

/**
 * Base Axios instance. Points at an env-configurable API base URL.
 * No live backend exists for this build, so service functions in this
 * folder mock their responses — swap the mock logic for real calls
 * against this client once an API is available.
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
