import app from "./app";
import { connectDb } from "./config/db";
const PORT = 5000;

connectDb()
  .then((res) => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
