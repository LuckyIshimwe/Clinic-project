import bcrypt from 'bcrypt';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';

const signup = async (req, res) => {
  let { name, email, password, role } = req.body;
  console.log('Signup data:', req.body);
    if (!name || !email || !password ) {
    return res.status(400).json({ message: 'Please enter all required fields' });
    }
    try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists.\nPlease login!' });
    const hashedPassword = await bcrypt.hash(password, 10);
    if(role && role !== 'doctor' && role !== 'receptionist') {
      return res.status(400).json({ message: 'Invalid role specified' });
    }
    if (!role) {
      role = 'receptionist';
    }
    user = new User({
      name,
        email,
        password: hashedPassword,
        role
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.log('Server error from signup', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  const {  name, email, password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'Please enter password' });
  }

  if (!email && !name) {
    return res.status(400).json({ message: 'Please provide email or name' });
  }

  try {
    const identifier = email || name;
    const user = await User.findOne({ $or: [{ email: identifier }, { name: identifier }] });
    console.log('user', user);
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or name' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '3d' }
    );

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.log('Server error from login', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export { signup, login };