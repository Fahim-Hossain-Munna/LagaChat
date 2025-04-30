import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useChatStore = defineStore("chat", () => {
  const currentUser = ref({ id: 999, name: "me" }); // Simulated logged-in user
  const selectedUser = ref(null);
  const messages = ref([]);

  const selectUser = (user) => {
    selectedUser.value = user;
  };

  const sendMessage = (text) => {
    if (!selectedUser.value) return;
    messages.value.push({
      id: Date.now(),
      sender: currentUser.value.name,
      receiver: selectedUser.value.name,
      text,
    });
  };

  const filteredMessages = computed(() =>
    selectedUser.value
      ? messages.value.filter(
          (m) =>
            (m.sender === currentUser.value.name &&
              m.receiver === selectedUser.value.name) ||
            (m.receiver === currentUser.value.name &&
              m.sender === selectedUser.value.name)
        )
      : []
  );

  return {
    currentUser,
    selectedUser,
    messages,
    filteredMessages,
    selectUser,
    sendMessage,
  };
});
