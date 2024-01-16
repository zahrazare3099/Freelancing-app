import http from "./httpService";

export function getOtp(data) {
  //data: {phoneNumber}
  return http.post("/user/get-otp", data).then((data) => data.data);
}

export function checkOtp(data) {
  // data : {phoneNumber, otp code}
  return http.post("/user/check-otp", data).then((data) => data.data);
}

export function completeProfile(data) {
  // data : {name,email,role}
  return http.post("/user/complete-profile", data).then((data) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then((data) => data.data);
}

export function logoutApi() {
  return http.post("/user/logout").then((data) => data.data);
}
