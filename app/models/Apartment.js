import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const apartmentSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    rooms: String,
    progress: Number,
    status: String,
    active: Boolean,
    img: String,
    price: String,
  },
  {
    timestamps: true,
  }
);

const Apartment =
  mongoose.models.Apartment || mongoose.model("Apartment", apartmentSchema);

export default Apartment;
