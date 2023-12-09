<script lang="ts" setup>
import { storeToRefs } from 'pinia';
const { userInfo } = storeToRefs(useWeb3Store())

interface ChatMessage {
  text: string;
  from: string;
}

const messages = ref<ChatMessage[]>([]);
const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({ text: newMessage.value, from: userInfo.value.walletAddress });
    newMessage.value = '';
    receiveMessage('Hello there!', '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512');
  }
};

// Mock function to simulate receiving a message
// In a real app, this would come from your chat service
const receiveMessage = (text: string, sender: string) => {
  messages.value.push({ text, from: sender });
};
</script>

<template>
  <div class="chat-room">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" class="message" :class="[ (message.from === userInfo.walletAddress) ? 'from-me' : 'from-others' ]">
        <!-- <div class="font-bold text-sm">{{ (message.from === userInfo.walletAddress) ? 'Me' : ` ${userInfo.walletAddress?.slice(0, 6) }...${ userInfo.walletAddress?.slice(-4)}` }}: </div> -->
        <ACard
      :subtitle="(message.from === userInfo.walletAddress) ? 'Me' : ` ${userInfo.walletAddress?.slice(0, 6) }...${ userInfo.walletAddress?.slice(-4)}`"
      :text="message.text"
      variant="light"
      class="w-fit min-w-300px max-w-500px shadow-none"
      :color="(message.from === userInfo.walletAddress)  ? 'primary' : 'warning'"
    />
        <!-- <div border border-primary p-3 max-w-500px> {{ message.text }}</div> -->
      </div>
    </div>
    <div class="send-message">
      <AInput v-model="newMessage" placeholder="Type a message" />
      <ABtn class="rounded-full px-6 font-bold" color="primary" @click="sendMessage">
        Send
        <ALoadingIcon icon="i-bx-chevron-right" />
      </ABtn>
    </div>
  </div>
</template>

<style scoped>
.chat-room {
  @apply flex flex-col m-auto h-[80vh];
}

.messages {
  @apply flex-grow overflow-auto border-b border-gray-300 mb-4 p-4;
}

.message {
  @apply mb-2;
}

.from-me {
  @apply text-right flex flex-col justify-start items-end;
}

.from-others {
  @apply text-left;
}

.send-message {
  @apply flex justify-between items-center space-x-4;
}
</style>
