import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuth } from "src/context/AuthContext";
import history from "src/context/routerHistory";

const { getUser, login, register } = useAuth();
interface FetchUserDataPayload {}

interface FetchUserDataResult {
  data: any;
}

export const fetchUserData = createAsyncThunk<
  FetchUserDataResult,
  FetchUserDataPayload
>("auth/fetchUserData", async (_, { rejectWithValue }) => {
  let user = getUser();
  if (user != "") {
    return {
      data: user,
    };
  } else {
    return rejectWithValue("Error fetching user data");
  }
});

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResult {
  data: any;
}

export const loginThunk = createAsyncThunk<LoginResult, LoginPayload>(
  "auth/login",
  async (payload: LoginPayload) => {
    let response = await login(payload.username, payload.password);
    history.push("/home");
    return {
      data: response,
    };
  }
);

interface RegisterPayload {
  username: string;
  password: string;
}

interface RegisterResult {
  data: any;
}

export const registerThunk = createAsyncThunk<RegisterResult, RegisterPayload>(
  "auth/register",
  async (payload: RegisterPayload) => {
    history.push("/home");
    return {
      data: "response.data",
    };
  }
);
