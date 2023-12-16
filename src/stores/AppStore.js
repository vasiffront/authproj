import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("appStore", {
  state: () => ({
    account: null,
    accessToken: null,
    isAuthenticated: false,
  }),
  actions: {
    async register(account) {
      const result = await axios.post("/api/public/sign-up", account);
      this.account = result.data.result.account;
      this.accessToken = result.data.result.accessToken;
      this.isAuthenticated = true;
      localStorage.setItem(
        "refreshToken",
        result.data.result.refreshToken.tokenValue
      );
    },

    async auth(authData) {
      const res = await axios.post("/api/public/sign-in", authData);
      this.account = res.data.result.account;
      this.accessToken = res.data.result.accessToken;
      this.isAuthenticated = true;
    },

    async refresh() {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        this.account = null;
        this.accessToken = null;
        this.isAuthenticated = false;
        return false;
      }

      try {
        const res = await axios.get("/api/public/refresh", {
          headers: {
            Authorization: "Bearer " + refreshToken,
          },
        });

        this.account = res.data.result.account;
        this.accessToken = res.data.result.accessToken;
        this.isAuthenticated = true;
        localStorage.setItem(
          "refreshToken",
          res.data.result.refreshToken.tokenValue
        );
        
        return true;
      } catch (error) {
        localStorage.removeItem("refreshToken");
        this.account = null;
        this.accessToken = null;
        this.isAuthenticated = false;
        console.log(error);
        return false;
      }
    },

    async getCurrentAccount() {
      const res = await axios.get("/api/v1/accounts/current");
      this.account = res.data.result.account;
      return this.account;
    },
  },
});
