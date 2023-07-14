export const fetch2 = async (api, body) => {
  const res = await fetch(api, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};

export const fetch3 = async (api, body) => {
  const res = await fetch(api, {
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body,
  });
  return await res.json();
};
