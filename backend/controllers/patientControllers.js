import Patient from '../models/Patient.js';

exports.register = async (req, res) => {
  const { name, contact, status,condition, lastvisit,nextappointment} = req.body;

  try {
    const patient = await Patient.findOne({ contact });
    if (patient) return res.status(400).json({ message: 'Patient already exists' });

    

     patient = new Patient({ name, contact, status,condition, lastvisit,nextappointment });
    await patient.save();

    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (err) {
      
    res.status(500).json({ message: 'Server error' });
  }
};