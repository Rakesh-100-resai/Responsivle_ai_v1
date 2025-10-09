Overview
The Responsible AI Platform is designed to evaluate AI models against Responsible AI principles (Fairness, Privacy, Safety) and regulatory compliance. The platform currently supports the Loan Approval use case in the Finance sector.
It helps organizations:
Detect biases in models


Ensure privacy of sensitive data


Assess potential risks or harms


Map AI evaluations to sector-specific compliance standards (e.g., EU AI Act, RBI IT Master Direction)



Features
User authentication and sector-based exploration


Model and dataset upload interface


Automated Responsible AI evaluation (Fairness, Privacy, Safety)


Compliance mapping to regulatory frameworks


Export reports in JSON, CSV, PDF format


Supports multiple ML models (Linear Regression, XGBoost, Random Forest)


LLM evaluation support (GPT-2) in progress



Installation
Prerequisites
Python 3.10+


Node.js 18+ (for frontend)


Git


Backend Setup
git clone https://github.com/<your-username>/responsible-ai-platform.git
cd responsible-ai-platform/backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
pip install -r requirements.txt

Frontend Setup
cd ../frontend
npm install
npm start

The platform should now be accessible at http://localhost:3000 (or your configured port).

Usage
Login


Username: admin


Password: ifocus@123


Explore Sectors


Currently active: Finance


Loan Approval Use Case


Upload model file (.pkl or .joblib)


Upload test dataset (.csv)


(Optional) Upload model description (.pdf or .txt)


Select Responsible AI Principles


Fairness, Privacy, Safety


Run Assessment


View detailed scores, notes, and summary report


Compliance Check


Cross-check evaluation results against regulatory principles


View compliant, partially compliant, and non-compliant items


Export Report


JSON, CSV, PDF formats



Responsible AI Evaluation
Fairness: Checks for potential bias against groups (e.g., gender, age).


Privacy: Assesses risk of exposing personal data.


Safety: Evaluates potential harm from incorrect predictions.



Compliance Check
Maps evaluation results to sector-specific regulations.


Currently supports:


EU AI Act


RBI IT Master Direction
