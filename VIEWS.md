# Dashboard

- `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
    - pola na login i hasło
    - przycisk do zalogowania (link do dashobardu)

# Widok dostępności stolików

- `/tables`
    - wybór daty i godziny
    - tabela z listą rezerwacji oraz wydarzeń
        - każda kolumna = 1 stolik
        - każdy wiersz = 30 min blok
        - ma przypominać widok tygodnia w kalendarzu google, gdzie w kolumnach zamiast dni są różne stoliki
        - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów
- `/tables/booking/:id`
    - zawiera wszystkie infromacje dotyczące rezerwacji
    - musi umożliwać edycję i zapisanie zmian
- `/tables/booking/new`
    - musi umożliwać edycję i zapisanie zmian
- `/tables/events/:id`
    - musi umożliwać edycję i zapisanie zmian
- `/tables/events/new`
    - musi umożliwać edycję i zapisanie zmian

# Widok kelnera

- `/waiter`
    - tabela
        - w wierszach stoliki
        - w kolumnach rodzaje informacji: ( status stolika, czas od ostatniej aktywności )
        - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
    - numer stolika edytowalny
    - menu produktów 
    - opcje wybranego produktu
    - zamówienie  (zamówione produkty z opcjami i ceną)
    - kwotę zamówienia
- `/waiter/order/:id`
    - jak powyższa

# Widok kuchni

- `/kitchen`
    - wyświetlać listę zamówień w kolejności ich złożenia
    - lista zawiera 
        - nr stolika lub zamówienia zdalnego
        - pełne informacje dotyczące zamówionych dań
    -możliwość zaznaczenia zamówienia jako zrealizowane