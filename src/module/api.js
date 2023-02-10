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

export const createTodoFetch = async (todo) => {
  try {
    const token = localStorage.getItem("JWT");
    const responce = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ todo }),
    });
    if (!responce.ok) {
      throw new Error("서버에 이상이 있습니다 status: " + responce.status);
    }
    if (responce.status === 201) {
      return true;
    }
  } catch (e) {
    throw new Error(e);
  }
};

export const getTodosFetch = async () => {
  try {
    const token = localStorage.getItem("JWT");
    const responce = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!responce.ok) {
      throw new Error("서버에 이상이 있습니다 status: " + responce.status);
    }
    const todos = await responce.json();
    return todos;
  } catch (e) {
    throw new Error(e);
  }
};

export const updateTodosFetch = async (id, boolean, todo) => {
  try {
    const token = localStorage.getItem("JWT");
    const responce = await fetch(
      `${process.env.REACT_APP_API_URL}/todos/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCompleted: boolean, todo }),
      }
    );
    if (!responce.ok) {
      throw new Error("서버에 이상이 있습니다 status: " + responce.status);
    }
    if (responce.status === 201) {
      return true;
    }
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteTodosFetch = async (id) => {
  try {
    const token = localStorage.getItem("JWT");
    const responce = await fetch(
      `${process.env.REACT_APP_API_URL}/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!responce.ok) {
      throw new Error("서버에 이상이 있습니다 status: " + responce.status);
    }
    if (responce.status === 204) {
      return true;
    }
  } catch (e) {
    throw new Error(e);
  }
};
