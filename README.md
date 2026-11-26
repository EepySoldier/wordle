# Wordle

Zgadujesz 5-literowe słowo w 6 próbach. Po każdej próbie litery zmieniają kolor: zielony to dobra litera na dobrym miejscu, żółty to litera ze słowa, ale na złym miejscu, szary to litera, której w słowie nie ma.

<img width="886" height="888" alt="image" src="https://github.com/user-attachments/assets/306e4293-54da-454b-8578-88edf5bbddb7" />

<img width="1004" height="958" alt="image" src="https://github.com/user-attachments/assets/cc9607c2-bc60-4f0f-b71e-1d5d3374bf9c" />

## Co potrafi

- losuje słowo z wbudowanej listy, działa w całości offline
- wpisywanie z fizycznej klawiatury albo z klawiatury na ekranie
- klawiatura na ekranie koloruje litery, które już padły
- komunikat "Not enough letters", gdy słowo jest za krótkie
- po wygranej albo przegranej pokazuje wynik i przycisk "Play again"
- parę testów w Vitest

## Stack

React 19, TypeScript, Vite 8, Vitest

## Odpalenie

```bash
git clone https://github.com/EepySoldier/wordle.git
cd wordle
npm install
npm run dev
```

Testy: `npm test`.

## Decyzje techniczne

- **Vite zamiast Next.js**: gra działa w całości w przeglądarce, nie potrzebuje serwera, routingu ani pobierania danych, więc Next.js nic by tu nie dał
- **Logika w jednym hooku**: cały stan gry siedzi w `useWordle`, a komponenty tylko go wyświetlają
- **Ocena próby w czystej funkcji**: `evaluateGuess` najpierw zaznacza zielone litery, a dopiero potem żółte, żeby powtórzone litery nie dostawały koloru więcej razy, niż występują w słowie. To czysta funkcja, więc łatwo ją przetestować
- **Kolory klawiatury liczone z historii prób**: nie trzymam ich w osobnym stanie, więc nie mogą rozjechać się z planszą
- **Brak sprawdzania słownika**: lista słów jest krótka, więc przyjmuję dowolne 5 liter, żeby gra nie odrzucała prawdziwych słów
