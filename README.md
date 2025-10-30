# LIVE DEMO:
https://data-grid-with-filtering-pagination.vercel.app/

# React Data Grid App

A simple and clean **React Data Grid** application that fetches live API data and displays it with sorting, search, and pagination using `react-table`.

> Built using `react-table`, Tailwind CSS and the JSONPlaceholder API.

---

## 🚀 Features

✅ Fetches live data from API (JSONPlaceholder)
✅ Global search filter
✅ Column sorting
✅ Pagination support
✅ Smooth UI with Tailwind CSS
✅ Loading state UI

## 🛠️ Tech Stack

| Tech                | Description                                    |
| ------------------- | ---------------------------------------------- |
| React               | UI Framework                                   |
| react-table         | Table utilities (sorting, pagination, filters) |
| Tailwind CSS        | Styling framework                              |
| JSONPlaceholder API | Dummy live API                                 |

---

## 📂 Project Structure

```
src/
 ├─ App.jsx   # DataGrid component logic fileciteturn2file0
 └─ main.jsx  # Entry file
```

---

## 📥 Installation

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```

---

## ▶️ Run Project

```bash
npm run dev
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🧠 How It Works

* Fetches comments data from:

  ```
  https://jsonplaceholder.typicode.com/comments
  ```
* Uses `useTable`, `useSortBy`, `usePagination`, and `useGlobalFilter` for table functions.
* Real-time search filters all rows.
* Sortable headers (`ID`, `Name`, `Email`, `Body`).

Feel free to connect and collaborate!
