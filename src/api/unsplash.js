import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 758Sy2838xHtQr1gubpD7Tz8N-vWM_Gz2ZnU3HVGbbE",
  },
});
