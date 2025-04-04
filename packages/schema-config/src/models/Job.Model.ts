import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    description: { type: String, required: true },
    applyLink: { type: String, required: true },
    status: { type: Boolean, requried: true, default: true },
  },
  { timestamps: true },
);

export const Jobs = mongoose.models.Job || mongoose.model('Job', JobSchema);
