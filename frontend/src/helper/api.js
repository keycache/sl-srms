import { BAD_RESPONSE } from "../constants";

export const get = async (url, signal = null) => {
  const abortSignal = signal ? { signal } : {};
  return fetch(url, abortSignal).catch((error) => {
    throw error;
  });
};
export const post = async (url, data, meta = {}) => {
  return fetch(url, {
    ...meta,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const handleResponse = (response) => {
  if (!response.ok) {
    let message = null;
    switch (response?.status) {
      case 400:
      case 500:
      default:
        message = BAD_RESPONSE;
    }
    return [message, response];
  }
  return ["", response];
};
