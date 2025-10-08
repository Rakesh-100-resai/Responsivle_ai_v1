const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const path = require('path');
// const pythonPath = 'C:\\Users\\IFOCUS\\AppData\\Local\\Programs\\Python\\Python310\\python.exe';
const pythonPath = process.env.PYTHON_EXEC || 'python3';


router.get('/run-compliance-check', (req, res) => {
  const scriptPath = path.join(__dirname, '..', 'map_rbi_compliance.py');

  const process = spawn(pythonPath, [scriptPath]);
  

  let output = '';
  process.stdout.on('data', data => output += data.toString());
  process.stderr.on('data', data => console.error(data.toString()));

  process.on('close', code => {
    if (code === 0) {
      res.json({ success: true, message: 'Compliance check completed', output });
    } else {
      res.status(500).json({ error: 'Compliance check failed' });
    }
  });
});

module.exports = router;

const fs = require('fs');

router.get('/api/run-compliance-check', (req, res) => {
  const scriptPath = path.join(__dirname, 'map_rbi_compliance.py');
  const evalPath = path.join(__dirname, 'evaluation_report.json');
  const requirementsPath = path.join(__dirname, 'proxy_updated_rbi_requirements.json');

  // 1. Ensure required files exist
  if (!fs.existsSync(evalPath) || !fs.existsSync(requirementsPath)) {
    return res.status(400).json({ error: 'Required input files not found. Please run Responsible AI Assessment first.' });
  }

  // 2. Run Python script
  const pythonProcess = spawn( pythonPath, [scriptPath]);

  let output = '';
  let error = '';

  pythonProcess.stdout.on('data', data => {
    output += data.toString();
  });

  pythonProcess.stderr.on('data', data => {
    error += data.toString();
    console.error('Compliance error:', error);
  });

  pythonProcess.on('close', code => {
    if (code === 0) {
      res.json({ success: true, message: '✅ Compliance Check Completed', output });
    } else {
      res.status(500).json({ error: '❌ Compliance script failed', details: error });
    }
  });
});

