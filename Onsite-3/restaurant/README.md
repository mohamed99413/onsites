# Restaurant Management Web Application

A Laravel-based restaurant web application built to practice modern PHP backend development, authentication, user profiles, database integration, and MVC architecture.

## ✨ Features

- Laravel 12 application structure
- User registration and authentication
- Login and logout flows
- Email verification support
- Password confirmation and reset flows
- User profile management
- Database-backed application
- Form request validation
- MVC architecture
- Blade-based application structure

## 🛠️ Tech Stack

- PHP 8.2+
- Laravel 12
- MySQL / SQLite
- Blade
- Composer
- Laravel Breeze
- Vite

## 📁 Project Structure

```text
restaurant/
├── app/
│   ├── Http/Controllers/
│   ├── Http/Requests/
│   ├── Models/
│   └── View/Components/
├── database/
├── resources/
├── routes/
├── config/
├── public/
├── composer.json
└── package.json
```

## 🚀 Getting Started

### 1. Install PHP dependencies

```bash
composer install
```

### 2. Configure the environment

```bash
cp .env.example .env
php artisan key:generate
```

On Windows PowerShell, copy `.env.example` to `.env` manually if the `cp` command is unavailable.

### 3. Configure the database

Set your database credentials in `.env`, then run:

```bash
php artisan migrate
```

### 4. Install frontend dependencies

```bash
npm install
```

### 5. Start development

```bash
php artisan serve
npm run dev
```

## 🎯 What This Project Demonstrates

This project demonstrates backend-focused Laravel development, including authentication, validation, database interaction, controllers, models, routing, and structured MVC application design.

---

Built by **Mohamed Hassan**.
