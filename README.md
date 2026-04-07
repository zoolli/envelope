# Envelope Math Paint | Interactive String Art

Mathematical beauty in motion. This interactive web application visualizes **Envelopes** (String Art) through two distinct modes: **Axes** and **Circle**, allowing users to explore the curves formed by straight line intersections.

![Preview](https://via.placeholder.com/1200x600.png?text=Envelope+Math+Paint+-+Premium+Light+Mode)
*(Replace with your actual screenshot)*

## ✨ Features

- **🎨 Premium Light Mode**: A clean, minimal off-white aesthetic (`#fcfcfd`) with high-DPI canvas support.
- **📈 Axes Mode**: Create parabolic envelopes using linear interpolation between two axes.
- **⭕ Circle Mode**: Modular arithmetic patterns (modular envelopes) on a circular frame.
- **⏱️ Sequential Drawing**: Lines are drawn one by one in real-time for a meditative visual experience.
- **🎛️ Granular Controls**: 
    - Adjust **Line Width** and **Opacity**.
    - Control **Animation Speed** and **Scale**.
    - Tweak **Base Color (Hue)** and **Subdivisions**.
- **☁️ Google Apps Script Ready**: Optimized structure for easy deployment as a Google Apps Script Web App.

## 🚀 Getting Started

### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/zoolli/envelope.git
   ```
2. Open `index.html` in any modern web browser.

### Google Apps Script (GAS) Deployment
The project includes a dedicated `gas/` directory for Google Apps Script deployment:
1. Create a new Apps Script project at [script.google.com](https://script.google.com/).
2. Copy the contents of `gas/Code.gs` into the script editor.
3. Create three HTML files named `index`, `styles`, and `script`, then copy the respective contents from the `gas/` folder.
4. Deploy as a **Web App**.

## 🔢 Math Background

This application visualizes the **Envelope** of a family of curves. In the simplest **Axes** mode, the lines $(x/a + y/b = 1)$ where $a+b$ is constant form a **Parabola** as their envelope.

In **Circle** mode, connecting points $P(i)$ to $P(i \times \text{step} \pmod N)$ produces **Cardioids**, **Nephroids**, and other higher-order epicycloids depending on the jump step.

## 📄 License
MIT License. Created by [zoolli](https://github.com/zoolli).
