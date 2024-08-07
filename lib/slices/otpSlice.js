import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  otp: ["", "", "", "", "", ""],
  resendTimer: 30
};

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    decrementResendTimer: (state) => {
      if (state.resendTimer > 0) {
        state.resendTimer -= 1;
      }
    },
    resetResendTimer: (state) => {
      state.resendTimer = 30;
    }
  }
});

export const { setOtp, decrementResendTimer, resetResendTimer } = otpSlice.actions;
export default otpSlice.reducer;
