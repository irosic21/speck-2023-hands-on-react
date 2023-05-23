import { apiOrigin } from "./api";

export const registerUser = (user) => {
  return fetch(`${apiOrigin}/api/users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) throw res;
    return res.json();
  });
};

export const loginUser = (user) => {
  return fetch(`${apiOrigin}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) throw res;
    return res.json();
  });
};

export const getUsers = (jwt) => {
  return fetch(`${apiOrigin}/api/users?size=191`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then((res) => {
    if (!res.ok) throw res;
    return res.json();
  });
};
