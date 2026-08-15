const { readJSON, writeJSON } = require('../utils/jsonStore');
const { v4: uuidv4 } = require('uuid');

exports.getInfo = async (req, res) => {
  try {
    const data = await readJSON('contact.json');
    res.json({ info: data.info, faq: data.faq });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.submit = async (req, res) => {
  try {
    const data = await readJSON('contact.json');
    const submission = {
      id: uuidv4(),
      ...req.body,
      submittedAt: new Date().toISOString()
    };
    if (!data.submissions) data.submissions = [];
    data.submissions.push(submission);
    await writeJSON('contact.json', data);
    res.status(201).json({ message: 'Message sent successfully', submission });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
