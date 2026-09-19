# School Football Competition Manager

A lightweight PHP/MySQL web application for managing a school football competition. The system provides a simple interface for managing teams and recording match results while automatically maintaining competition statistics.

## ✨ Features

- Add and manage competition teams
- Prevent duplicate team names
- Record match results
- Validate match data before saving
- Automatically update team statistics
- Track points, goals scored, and goals conceded
- Display match history
- MySQL database integration
- Shared PHP header, footer, and database connection
- Transaction-based database updates

## 🛠️ Tech Stack

- PHP
- MySQL
- PDO
- HTML
- CSS
- SQL

## 📊 Competition Data

Each team stores:

- Class/team name
- Points
- Goals scored
- Goals conceded

The database uses a unique constraint for team names and supports automatic ID generation.

## 📁 Project Structure

```text
Onsite-5/
├── includes/
│   ├── db.php        # Database connection
│   ├── header.php    # Shared page header
│   └── footer.php    # Shared page footer
├── index.php         # Main page
├── teams.php         # Team management
├── matches.php       # Match management and results
└── schema.sql        # Database schema
```

## 🚀 Getting Started

### 1. Create the database

Create a MySQL database and run:

```sql
source schema.sql;
```

Or import `schema.sql` through phpMyAdmin.

### 2. Configure the database connection

Update the credentials in:

```text
includes/db.php
```

### 3. Run the project

Place the project inside your PHP server directory, such as XAMPP's `htdocs`, then open the application through your local server.

## 🎯 What This Project Demonstrates

This project demonstrates practical backend development with PHP and MySQL, including PDO database access, CRUD-style operations, validation, SQL constraints, transactions, and maintaining related statistics from application logic.

---

Built by **Mohamed Hassan**.
