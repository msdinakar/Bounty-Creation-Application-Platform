# 🎯 Bounty Wizard – 3-Step Bounty Creation Flow

A fully functional **3-step Bounty Creation Wizard** built using **React + Vite + TypeScript + Tailwind + shadcn/ui**.

This project simulates a real-world bounty creation system including:
- Step 1: Basic Details  
- Step 2: Criteria / Rewards / Backers  
- Step 3: Preview & Confirmation  
- Final Success Page showing submitted bounty details  

The solution focuses on clean UI, reusable components, strong folder structure, and an intuitive wizard flow as required in the assignment.

---

## 🚀 Live Demo  
🔗 **Live URL:** _Add your Vercel / Netlify link here_  
Example:  
https://bounty-wizard.vercel.app

---

## 📦 GitHub Repository  
🔗 **Repository:** _Add your GitHub repo link here_  
Example:  
https://github.com/msdinakar/Bounty-Creation-Application-Platform

---

## 🧭 Project Overview

This project implements a **multi-step wizard** that guides the user through creating a bounty:

### **Step 1 – Brief**
- Bounty title  
- Description  
- Problem statement  
- Expected Deliverables  

### **Step 2 – Criteria**
- Submission criteria  
- Guidelines  
- Evaluation methods  

### **Step 3 – Rewards / Backers**
- Total reward  
- Reward split  
- Backers (name, contribution, optional details)

### **Final – Success Page**
- Displays complete summary of submitted bounty

The app maintains internal state, validates all input fields, and ensures a smooth step-by-step submission process.

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
|------|--------------------|
| **Frontend** | React, TypeScript, Vite |
| **UI Framework** | Tailwind CSS, shadcn/ui Components |
| **Icons** | Lucide React |
| **Routing** | React Router (optional; depends on your implementation) |
| **State Management** | React Context + Hooks |
| **Build Tool** | Vite |
| **Deployment** | Vercel / Netlify |

---

## 📁 Folder Structure
/src
/components
/ui # reusable UI components (Button, Input, Card, Toast etc)
/bounty # bounty-related components (Sidebar, StepIndicator, etc)
/context # form context providers for wizard state
/hooks # custom hooks (useToast, useMobile)
/pages # Step pages (BountyWizard, Success, NotFound)
/utils # helpers, validators
/styles # global styles
main.tsx
App.tsx


### 🔹 Benefits of this structure:
- Clear separation of concerns  
- Reusability for UI & logic components  
- Easy to scale  
- Clean folder organization for reviewers  

---

## ⚙️ Setup & Running Locally

### **1. Clone the repo**
```bash
git clone https://github.com/your-username/bounty-wizard.git
cd bounty-wizard

2. Install dependencies
npm install

3. Start development server
npm run dev


The app will open at:
http://localhost:5173

🏗️ Build & Production
Build project
npm run build

Preview production build
npm run preview

Deployment

This project can be deployed easily on:

Vercel (recommended)

Netlify

GitHub Pages

Render

Example Vercel configuration:

Build Command: npm run build

Output Directory: dist

📌 Assumptions / Limitations

No backend API is used — all data is stored in React state only.

File uploads (if any) are not stored on a server.

Wizard resets on page refresh (unless extended with localStorage).

UI is optimized for modern browsers only.