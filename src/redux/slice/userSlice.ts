import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the user state
interface UserState {
  userId: string | null;
  password: string | null;
  confirmPassword: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  email: string | null;
  gender: string | null;
  faculty: string | null;
  level: string | null;
  role: string | null;
  description: string | null;
  imageUrl: string | null;
  verified: boolean;
}

// Define the initial state
const initialState: UserState = {
  userId: null,
  password: null,
  confirmPassword: null,
  firstName: null,
  lastName: null,
  phone: null,
  email: null,
  gender: null,
  faculty: null,
  level: null,
  role: null,
  description: null,
  imageUrl: null,
  verified: false,
};

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
