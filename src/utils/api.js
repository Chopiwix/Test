class Api {
  constructor({ baseUrl, groupId }) {
    this.baseUrl = baseUrl;
    this.groupId = groupId;
  }

  async _fetchApi(method, path = "", body = undefined) {
    const response = await fetch(`${this.baseUrl}/${this.groupId}/${path}`, {
      method,
      headers: {
        authorization: `9731b001-57b1-4a17-816b-941eccd0a24a`,
        "Content-Type": body ? "application/json" : undefined,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!response.ok) {
      return Promise.reject(`Error: ${response.status}`);
    }
    const json = await response.json();
    return json;
  }

  getInitialCards() {
    return this._fetchApi("GET", "/cards");
  }

  getUserInfo() {
    return this._fetchApi("GET", "users/me");
  }

  setUserInfo({ name, about }) {
    return this._fetchApi("PATCH", "users/me", { name, about });
  }

  setUserImage(imageURL) {
    return this._fetchApi("PATCH", "users/me/avatar", { avatar: imageURL });
  }

  setNewCard({ title, imageURL }) {
    return this._fetchApi("POST", "cards", {
      name: title,
      link: imageURL,
    });
  }

  deleteCard(cardId) {
    return this._fetchApi("DELETE", `cards/${cardId}`);
  }

  setLike(cardId) {
    return this._fetchApi("PUT", `cards/likes/${cardId}`);
  }

  removeLike(cardId) {
    return this._fetchApi("DELETE", `cards/likes/${cardId}`);
  }
}

const api = new Api({
  groupId: "web_es_09",
  baseUrl: "https://around.nomoreparties.co/v1",
});

export default api;
