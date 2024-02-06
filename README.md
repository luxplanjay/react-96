# Заняття 1

- Знайомство
- Бібліотека React
  - Екосистема бібліотек
  - Стандартизація розробки
  - Патерни
- Створення проекту
  - https://vitejs.dev/
  - Налаштування ESLint (react/prop-types: 0)
  - Делой на Vercel
- Інструменти розробника
- Компоненти
  - Імпорт та експорт
- Рендер додатка в DOM
  - Суворий режим
- JSX - опис UI
  - Особливості
  - Правило спільного батька
  - Фрагменти
  - JSX вирази у розмітці та атрибутах
- Налаштування компонента
  - Параметр props
  - Деструктуризація
- Умовний рендеринг
  - Оператор &&
  - Тернарний оператор
  - Значення що не відображаються
- Колекції
  - Ключі елементів
- Властивість props.children

```
<div>
    <p>Amount: </p>
    <p>Status: Paid or Pending</p>
    <p>Description: </p>
    <p>Card Number: </p>
    <p>Card Type: </p>
    <p>Card Holder Name: </p>
    <p>Payment Date: </p>
</div>
```

```
[
      {
        "id": "1",
        "cardNumber": "1234 5678 9012 3456",
        "cardType": "Visa",
        "cardOwner": "John Doe",
        "date": "2024-01-01",
        "amount": 100,
        "description": "Payment for groceries"
      },
      {
        "id": "2",
        "cardNumber": "9876 5432 1098 7654",
        "cardType": "Mastercard",
        "cardOwner": "Alice Smith",
        "date": "2024-01-05",
        "amount": 50,
        "description": "Payment for utilities"
      },
      {
        "id": "3",
        "cardNumber": "2468 1357 8024 6913",
        "cardType": "American Express",
        "cardOwner": "Bob Johnson",
        "date": "2024-01-10",
        "amount": 200,
        "description": "Payment for rent"
      },
      {
        "id": "4",
        "cardNumber": "8642 9753 1086 2435",
        "cardType": "Discover",
        "cardOwner": "Emily Brown",
        "date": "2024-01-15",
        "amount": 75,
        "description": "Payment for internet"
      },
      {
        "id": "5",
        "cardNumber": "1111 2222 3333 4444",
        "cardType": "Visa",
        "cardOwner": "David Wilson",
        "date": "2024-01-20",
        "amount": 120,
        "description": "Payment for dining out"
      },
      {
        "id": "6",
        "cardNumber": "5555 6666 7777 8888",
        "cardType": "Mastercard",
        "cardOwner": "Emma Taylor",
        "date": "2024-01-25",
        "amount": 90,
        "description": "Payment for entertainment"
      }
    ]
```
