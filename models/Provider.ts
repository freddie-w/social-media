import mongoose from "mongoose";

interface Props {
  id: string;
  name: string;
}

export const ProviderSchema = new mongoose.Schema<Props>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Provider =
  mongoose.models.Provider || mongoose.model("Provider", ProviderSchema);

export default Provider;
