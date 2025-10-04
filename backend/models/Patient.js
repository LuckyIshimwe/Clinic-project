import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: Number, required: true},
  status: {  type: String,
    enum: ["active", "inactive", "critical"], 
    default: "active" },
    condition: { type: String, required: true },
    lastvisit: { type: Date, required: true},
    nextappointment: { type: Date},

});

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
