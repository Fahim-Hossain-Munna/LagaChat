import { defineStore } from "pinia";

export const useChatStore = defineStore("chat", {
  state: () => ({
    currentUser: null, // Simulated logged-in user
    selectedUser: null,
    messages: [],
  }),
  getters: {
    filteredMessages(state) {
      return state.selectedUser
        ? state.messages.filter(
            (m) =>
              (m.sender === state.currentUser.name &&
                m.receiver === state.selectedUser.name) ||
              (m.receiver === state.currentUser.name &&
                m.sender === state.selectedUser.name)
          )
        : [];
    },
  },
  actions: {
    selectUser(user) {
      this.selectedUser = user;
    },
    sendMessage(text) {
      if (!this.selectedUser) return;
      this.messages.push({
        id: Date.now(),
        sender: this.currentUser.name,
        receiver: this.selectedUser.name,
        text,
      });
    },
  },
  persist: true,
});
