# Responsible AI Platform

**Version:** 1.0  
**Sector:** Finance  
**Use Case:** Loan Approval  
**Date:** October 2025

---

## Overview
The **Responsible AI Platform** is designed to evaluate AI models against Responsible AI principles (Fairness, Privacy, Safety) and regulatory compliance. The platform currently supports the **Loan Approval** use case in the **Finance sector**.

It helps organizations to:  
- Detect biases in models  
- Ensure privacy of sensitive data  
- Assess potential risks or harms  
- Map AI evaluations to sector-specific compliance standards (e.g., **EU AI Act**, **RBI IT Master Direction**)  

---

## Features
- User authentication and sector-based exploration  
- Model and dataset upload interface  
- Automated Responsible AI evaluation (**Fairness, Privacy, Safety**)  
- Compliance mapping to regulatory frameworks  
- Export reports in **JSON, CSV, PDF** format  
- Supports multiple ML models (**Linear Regression, XGBoost, Random Forest**)  
- LLM evaluation support (**GPT-2**) in progress  

---

## Installation

### Prerequisites
- Python 3.10+  
- Node.js 18+ (for frontend)  
- Git  

### Backend Setup
```bash
git clone https://github.com/<your-username>/responsible-ai-platform.git
cd responsible-ai-platform/backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
pip install -r requirements.txt
