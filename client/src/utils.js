async function send(endpoint, method, body) {
  //const token = localStorage.getItem("token");
  //if (token) {
  const response = await fetch(`http://localhost:3000/api${endpoint}`, {
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
    //}
  });
  // const data = method === "GET" ? response.json() : response.text();
  return response;
  //}
}

export async function apiReg(endpoint, method = "GET", body) {
  const response = await fetch(`http://localhost:3000/api${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await (method === "GET" ? response.json() : response.text());
  return data;
}

export const api = {
  get: (endpoint) => send(endpoint, "GET"),
  post: (endpoint, body) => send(endpoint, "POST", body),
  put: (endpoint, body) => send(endpoint, "PUT", body),
  delete: (endpoint) => send(endpoint, "DELETE"),
};
