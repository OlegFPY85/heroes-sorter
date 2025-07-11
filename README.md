# Сортировка героев по уровню здоровья

[![Tests](https://github.com/<ваш-username>/heroes-sorting/actions/workflows/test.yml/badge.svg)](https://github.com/<ваш-username>/heroes-sorting/actions/workflows/test.yml)

Функция для сортировки героев по уровню здоровья в порядке убывания.


```bash
npm install
import sortHeroes from './src/sortHeroes';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedHeroes = sortHeroes(heroes);
npm test

