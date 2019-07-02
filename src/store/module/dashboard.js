import http from "@/http/";
const state = {
  articleList: ""
};

const mutations = {
  setArticleList(state, data) {
    state.articleList = data;
  }
};

//demo 获取玩Android的API接口，仅供参考
const actions = {
  getAricle({ commit }) {
    return new Promise(resolve => {
      http
        .get("wxarticle/list/408/1/json")
        .then(res => {
          console.log("-->>", res);
          commit("setArticleList", res.data.datas);
          resolve();
        })
        .catch(() => {});
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
