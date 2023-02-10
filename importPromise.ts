/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import axios from "axios";

export const promiseTest = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise succeeded");
    reject("Promise error");
  },5000);
});

export const wait2Seconds = (showResolve = true) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => showResolve ? resolve("Promise succeeded") : reject("Promise error"),2000);
  });
  return promise;
};

export const wait2SecondsAsync = async (showResolve = true) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => showResolve ? resolve("Promise succeeded") : reject("Promise error"),2000);
  });
  return promise;
};

export const reqAPI = axios.create({
  baseURL: 'https://reqres.in/api',
});
