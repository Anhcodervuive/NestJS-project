# 🚀 NestJS Authentication Training Project

## 📌 Introduction

This is a backend training project built with **NestJS** to practice:

- Modular architecture
- Database integration with Prisma
- Session-based authentication
- Passport Local strategy
- PostgreSQL integration

The main goal of this project is to understand how authentication works internally using session instead of JWT.

---

## 🛠 Tech Stack

- **NestJS**
- **Prisma ORM**
- **PostgreSQL**
- **Passport (Local Strategy)**
- **express-session**
- **connect-pg-simple**
- **bcrypt**

---

# 🚀 NestJS Authentication Training Project

## 📌 Introduction

This is a backend training project built with **NestJS** to practice:

- Modular architecture
- Database integration with Prisma
- Session-based authentication
- Passport Local strategy
- PostgreSQL integration

The main goal of this project is to understand how authentication works internally using session instead of JWT.

---

## 🛠 Tech Stack

- **NestJS**
- **Prisma ORM**
- **PostgreSQL**
- **Passport (Local Strategy)**
- **express-session**
- **connect-pg-simple**
- **bcrypt**

---

### Modules:

- `AuthModule` → Handle authentication logic
- `UsersModule` → Handle user operations
- `PrismaModule` → Database connection

---

## 🗄 Database

### User model

Fields: 

- id
- email
- password (hashed)
- fullName
- role
- isActive
- createdAt
- updatedAt

Session is stored in PostgreSQL using `connect-pg-simple`.

### User Model

Fields:

- id
- email
- password (hashed)
- fullName
- role
- isActive
- createdAt
- updatedAt

Session is stored in PostgreSQL using `connect-pg-simple`.

---

## 🔐 Authentication Flow

### Register

Request body:

```json
{
  "email": "test@gmail.com",
  "password": "12345678",
  "fullName": "Nguyen Van A"
}

```
### Login

Request body:

```json
{
  "email": "test@gmail.com",
  "password": "12345678",
  "fullName": "Nguyen Van A"
}

```