import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeToken, setToken } from "../../utils/tokenStorage";
import api from "src/middleware/api";
import history from "../../utils/history";

interface FetchUserDataPayload {}

interface FetchUserDataResult {
  data: any;
}

const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/auth/getUserData");
      return {
        data: response.data,
      };
    } catch (e) {
      removeToken();
      return rejectWithValue("");
    }
  },
  {
    loading: true,
    error: true,
  }
);

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResult {
  data: any;
}

const login = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload) => {
    const response = await api.post("/auth/login", payload);
    setToken(response.data.accessToken);
    history.push("/home");
    return {
      data: response.data,
    };
  },
  {
    loading: true,
    error: true,
  }
);

interface RegisterPayload {
  username: string;
  password: string;
}

interface RegisterResult {
  data: any;
}

const register = createAsyncThunk(
  "auth/register",
  async (payload: RegisterPayload) => {
    const response = await api.post("/auth/register", payload);
    history.push("/home");
    return {
      data: response.data,
    };
  },
  {
    loading: true,
    error: true,
  }
);

const signOut = createAsyncThunk("auth/signOut", async () => {
  removeToken();
});

export default {
  fetchUserData,
  login,
  register,
  signOut,
};
