<!-- Chat.vue -->

<!-- <template>
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
   -->
  <!-- <script>
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
      console.log("lits", data);
      this.messages.push(`${data.username}: ${data.message}`);
    });

    // Xử lý sự kiện khi nhận được danh sách phòng từ server
    this.socket.on("roomList", (rooms) => {
      console.log("lits", rooms);
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
   -->


   <template>
  <div>
    <fieldset>
      <legend>Chat Realtime Vue.js Demo</legend>

      <label for="roomName">Room Name:</label>
      <input v-model="roomName" placeholder="Enter room name" />
      <button @click="joinRoom">Join Room</button>
      <button @click="leaveRoom">Leave Room</button>

      <label for="roomSelect">Select a Room:</label>
      <v-card elevation="4" class="pa-4">
        <select
          v-model="selectedRoom"
          style="background-color: aqua; width: 100px"
        >
          <option
            v-for="(e, i) in roomList"
            :key="i"
            v-bind:value="e"
            style="width: 10px"
          >
            {{ e }}
          </option>
          <option v-if="roomList.length < 1" value="">không có gì</option>
          <!-- <option value="s">s</option>
          <option value="">s</option>
          <option>s</option> -->
        </select>
      </v-card>

      <select class="input_select" v-model="chuyenmuccha">
        <option value="">chọn</option>
        <option value="Tin tức - sự kiện">Tin tức - sự kiện</option>
        <option value="Tin trong nước">Tin trong nước</option>
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
import {
  ref,
  //  onMounted
} from "vue";
import io from "socket.io-client";

export default {
  name: "DemoChat",
  setup() {
    const socket = ref(null);
    const roomName = ref("");
    const selectedRoom = ref("");
    const currentRoom = ref(null);
    const messageInput = ref("");
    const messages = ref([]);
    const roomList = ref([]);

    // onMounted(() => {
    //   // Kết nối tới máy chủ Socket.IO
    //   socket.value = io("http://192.168.0.102:3003");

    //   // Xử lý sự kiện khi nhận được tin nhắn từ máy chủ
    //   socket.value.on("message", (data) => {
    //     console.log("lits", data);
    //     messages.value.push(`${data.username}: ${data.message}`);
    //   });

    //   // Xử lý sự kiện khi nhận được danh sách phòng từ server
    //   socket.value.on("roomList", (rooms) => {
    //     console.log("lits", rooms);
    //     roomList.value = rooms;
    //   });
    // });

    // Kết nối tới máy chủ Socket.IO
    socket.value = io("http://192.168.0.102:3003");

    // Xử lý sự kiện khi nhận được tin nhắn từ máy chủ
    socket.value.on("message", (data) => {
      console.log("data");
      messages.value.push(`${data.username}: ${data.message}`);
    });

    // Xử lý sự kiện khi nhận được danh sách phòng từ server
    socket.value.on("roomList", (rooms) => {
      console.log("lits", rooms);
      roomList.value = rooms;
    });

    const joinRoom = () => {
      if (roomName.value !== "") {
        socket.value.emit("joinRoom", roomName.value);
        currentRoom.value = roomName.value;
      }
    };

    const leaveRoom = () => {
      if (currentRoom.value !== null) {
        socket.value.emit("leaveRoom", currentRoom.value);
        currentRoom.value = null;
      }
    };

    const sendMessage = () => {
      const username = "user"; // Bạn có thể thay đổi để lấy từ người dùng
      const message = messageInput.value;

      if (username !== "" && message !== "") {
        socket.value.emit("send", {
          username,
          message,
          room: currentRoom.value,
        });
        messageInput.value = "";
      } else {
        alert("Please enter name and message!!");
      }
    };

    return {
      socket,
      roomName,
      selectedRoom,
      currentRoom,
      messageInput,
      messages,
      roomList,
      joinRoom,
      leaveRoom,
      sendMessage,
    };
  },
};
</script>
<style scoped>
fieldset {
  border: 1px solid darkgrey;
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
}

legend {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select,
button {
  margin-bottom: 5px;
}

#content {
  border: 1px solid darkgrey;
  width: 400px;
  height: 300px;
  padding: 10px;
  overflow-y: scroll;
  margin-bottom: 10px;
}

#content p {
  margin: 5px;
}

.message {
  /* Thêm quy tắc cho tin nhắn nếu cần thiết */
}

input,
button {
  padding: 5px;
}

button {
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
}
</style>
