import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useAppStore = defineStore("AppStore", {
    state: () => ({
        account: null,
        accessToken: null,
      }),
      getters:{
        getAccount(){
            return state.account
        },
        getToken(){
            return state.token
        }
      },
      actions:{
       async register(account){
            const result = await axios.post("/api/public/sign-up", account);
            this.account = result.result.account;
            this.token = result.result.AccessToken;
            localStorage.put("refreshToken",result.result.refreshToken);
            console.log(result);
        }
      }

    })