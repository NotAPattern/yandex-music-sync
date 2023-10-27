import {YMApi} from "ym-api";
const api = new YMApi();

export const getAccountStatus = async () => {
  try {
    await api.init({username: "example@yandex.ru", password: "password"});
    const result = await api.getAccountStatus();
    console.log({result});
  } catch (e) {
    console.log(`api error ${e.message}`);
  }
};
