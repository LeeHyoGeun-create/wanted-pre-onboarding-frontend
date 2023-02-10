export const signinFetch = async (obj) => {
  try {
    const responce = await fetch(
      `${process.env.REACT_APP_API_URL_TEST}/auth/signin`,
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
      `${process.env.REACT_APP_API_URL_TEST}/auth/signup`,
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

export const createTodoFetch = async (todo) => {
  try {
    const token = localStorage.getItem("JWT");
    const responce = await fetch(
      `${process.env.REACT_APP_API_URL_TEST}/todos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(todo),
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

export const getTodosFetch = async () => {
  try {
    const token = localStorage.getItem("JWT");
    const responce = await fetch(
      `${process.env.REACT_APP_API_URL_TEST}/todos`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!responce.ok) {
      throw new Error("서버에 이상이 있습니다 status: " + responce.status);
    }
    const todos = await responce.json();
    return todos;
  } catch (e) {
    throw new Error(e);
  }
};
