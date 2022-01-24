import mongoose from 'mongoose';
import { app } from './src/app';

const uri = process.env.MONGODB_URI;
const port = process.env.PORT ?? 3000;

mongoose.connect(uri);
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
