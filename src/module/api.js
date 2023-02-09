export const signinFetch = async (obj) => {
  try {
    const responce = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    if (!responce.ok) {
      throw new Error("서버에 이상이 있습니다 status: " + responce.status);
    }
    const data = await responce.json();
    console.log(data);
    if (data.access_token) {
      localStorage.setItem("JWT", data.access_token);
      return true;
    }

    return false;
  } catch (e) {
    throw new Error(e);
  }
};

export const signupFetch = async (obj) => {
  try {
    const responce = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    if (!responce.ok) {
      throw new Error("서버에 이상이 있습니다 status: " + responce.status);
    }
    if (responce.status === 201) {
      return true;
    }
    return false;
  } catch (e) {
    throw new Error(e);
  }
};
