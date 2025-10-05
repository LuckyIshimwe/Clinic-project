import Patient from '../models/Patient.js';

const register = async (req, res) => {
  const { name, contact, status, condition, lastVisit, nextAppointment } = req.body;
  if (!name || !contact || !status || !condition || !lastVisit) {
    return res.status(400).json({ message: 'Please enter all required fields' });
  }
  const lastvisitDate = new Date(lastVisit);
  let nextappointmentDate = null;
    nextappointmentDate = new Date(nextAppointment);
  try {
    let patient = await Patient.findOne({ contact });
    if (patient) return res.status(400).json({ message: 'Patient already exists' });

   
    patient = new Patient({
      name,
      contact: Number(contact),
      status,
      condition,
      lastvisit: lastvisitDate,
      nextappointment: nextappointmentDate, 
    });
    await patient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (err) {
    console.log('Server error from register patient', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export default register;