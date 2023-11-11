<!-- Chat.vue -->

<template>
  <div>
    <fieldset>
      <legend>Chat Realtime Vue.js Demo</legend>

      <label for="roomName">Room Name:</label>
      <input v-model="roomName" placeholder="Enter room name" />
      <button @click="joinRoom">Join Room</button>
      <button @click="leaveRoom">Leave Room</button>

      <label for="roomSelect">Select a Room:</label>
      <select v-model="selectedRoom">
        <option v-for="room in roomList" :key="room" :value="room">
          {{ room }}
        </option>
      </select>

      <div id="content">
        <p v-for="(message, index) in messages" :key="index" class="message">
          {{ message }}
        </p>
      </div>

      <input v-model="messageInput" placeholder="Write something.." />
      <button @click="sendMessage">SEND</button>
    </fieldset>
  </div>
</template>
  
  <script>
import io from "socket.io-client";

export default {
  name: "DemoChat",
  data() {
    return {
      socket: null,
      roomName: "",
      selectedRoom: "",
      currentRoom: null,
      messageInput: "",
      messages: [],
      roomList: [],
    };
  },
  mounted() {
    // Kết nối tới máy chủ Socket.IO
    this.socket = io("http://192.168.0.102:3003");

    // Xử lý sự kiện khi nhận được tin nhắn từ máy chủ
    this.socket.on("message", (data) => {
      this.messages.push(`${data.username}: ${data.message}`);
    });

    // Xử lý sự kiện khi nhận được danh sách phòng từ server
    this.socket.on("roomList", (rooms) => {
      this.roomList = rooms;
    });
  },
  methods: {
    joinRoom() {
      if (this.roomName !== "") {
        this.socket.emit("joinRoom", this.roomName);
        this.currentRoom = this.roomName;
      }
    },
    leaveRoom() {
      if (this.currentRoom !== null) {
        this.socket.emit("leaveRoom", this.currentRoom);
        this.currentRoom = null;
      }
    },
    sendMessage() {
      const username = "user"; // Bạn có thể thay đổi để lấy từ người dùng
      const message = this.messageInput;

      if (username !== "" && message !== "") {
        this.socket.emit("send", { username, message, room: this.currentRoom });
        this.messageInput = "";
      } else {
        alert("Please enter name and message!!");
      }
    },
  },
};
</script>
  
  <style scoped>
/* Đặt các quy tắc CSS cần thiết cho giao diện của bạn */
</style>