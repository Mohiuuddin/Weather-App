# 🌦️ Dynamic Weather Forecast Dashboard

A sleek, responsive weather application built with vanilla JavaScript that leverages the **Visual Crossing API** to provide real-time weather data and a 7-day forecast. The UI dynamically adapts its aesthetics based on current weather conditions.

**🔗 [Live Preview](https://mohiuuddin.github.io/Weather-App/)**

---

## 🚀 Features

* **Global Search:** Search for any city worldwide to get instant weather updates.
* **7-Day Forecast:** Detailed outlook for the week ahead, including temperature highs/lows and conditions.
* **Dynamic Visuals:** The background image and UI theme change dynamically to match the weather (e.g., sunny, rainy, or cloudy backgrounds).
* **Asynchronous Logic:** Built using `async/await` and `Promises` for efficient API data fetching and error handling.
* **Optimized Data Processing:** Custom functions to parse complex JSON from Visual Crossing into clean, usable objects.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+)
* **API:** [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)
* **Tooling:** Fetch API, Git/GitHub for version control.

---

## 💡 Key Technical Implementation

### 1. The Data Pipeline
The app follows a strict modular structure:
1.  **Fetch:** Hits the API endpoint with the user-provided location.
2.  **Process:** A dedicated function cleans the JSON, extracting only the necessary 7-day forecast data.
3.  **Display:** DOM manipulation functions render the weather cards and update the background based on the `icon` or `condition` string.

### 2. Security Note
> [!IMPORTANT]
> This project currently uses a client-side API key for educational purposes. In a production environment, this would be handled via environment variables and a proxy server to "never trust the client" with sensitive secrets.

---

## ⚙️ How to Run Locally

1.  Clone the repository:
    ```bash
    git clone [https://github.com/Mohiuuddin/Weather-App.git](https://github.com/Mohiuuddin/Weather-App.git)
    ```
2.  Open `index.html` in your browser (or use Live Server in VS Code).
3.  Enter your API key in the configuration file/variable (if required).

---

## 👨‍💻 Author

**Mohiuuddin** *ICT Professional & Full-Stack Developer* [LinkedIn](https://www.linkedin.com/in/mohiuddin777) | [GitHub](https://github.com/Mohiuuddin)
