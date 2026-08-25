import express from "express";
import contactsRoutes from "./routes/contactRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", contactsRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
