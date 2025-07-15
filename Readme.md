## 🧠 ChatGPT + Notion Integration Bot

A Node.js-based backend service that enables full CRUD operations on Notion databases via API — because real devs don’t click buttons, they call endpoints. 🚀

---

### 📂 Project Structure

```
📆 ChatGPT-Notion-Bot
👤 src/
│   💼 controllers/
│   ├── notion.controller.js  # Notion CRUD logic
│   💼 routes/
│   ├── notion.routes.js      # Route definitions
│   💼 services/
│   ├── notion.service.js     # Axios config for Notion API
│   💼 utils/
│       └── response.util.js    # Standardized API response
└── .env                         # Notion credentials
└── package.json
└── README.md                    # You're reading it 😉
```

---

### 🔧 Features Implemented

* ✅ Fetch all pages from your Notion database
* ✅ Create a new page with:

  * 🏷️ Title (Name)
  * 📌 Status (status property)
  * 🔥 Priority (select property)
  * 📝 Description (rich\_text)
* ✅ ES6 Module support (`type: module`)

---

### 🛠️ Tech Stack

* Node.js
* Express.js
* Axios
* Notion API v2022-06-28
* Dotenv

---

### 🧪 How to Run Locally

1. **Clone this repo**

   ```bash
   git clone https://github.com/your-username/chatgpt-notion-bot.git
   cd chatgpt-notion-bot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create ****`.env`**** file**

   ```
   NOTION_TOKEN=your_integration_token
   NOTION_DATABASE_ID=your_database_id
   ```

4. **Run the app**

   ```bash
   npm run dev
   ```

---

### 📬 API Endpoints

| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| `GET`  | `/api/notion` | Fetch all pages          |
| `POST` | `/api/notion` | Create a new Notion page |

---

### 🧠 Notion DB Schema (Sample)

| Name      | Status      | Priority | Description           |
| --------- | ----------- | -------- | --------------------- |
| `title`   | `status`    | `select` | `rich_text`           |
| Build MVP | In Progress | `P1`     | Setup Notion API CRUD |

Make sure these properties exist **exactly** as above in your Notion DB or you can tweek your APIs as your DB schema.

---

### 🧼 To-Do Next

* 🔁 Update existing page
* ❌ Delete page
* 🔐 Auth middleware
* 🧪 Postman collection
* 🌍 Deploy on Render/Vercel

---

### 🤝 Contributing

Want to level up the bot? PRs are welcome! Just raise an issue, fork like a boss, and code like it’s your last hackathon.

---

### 📄 License

MIT — *Masti, Innovation, Tech*

---

### 💬 Developer Note

> Perfection is a mindset, not a milestone.
> — *Dwarika*
