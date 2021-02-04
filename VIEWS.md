# Dashboard

- `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne) [DONE]
    - lista rezerwacji i eventów zaplanowanych na dzisiaj [DONE]

# Logowanie [DONE]

- `/login`
    - pola na login i hasło [DONE]
    - przycisk do zalogowania (link do dashobardu) [DONE]

# Widok dostępności stolików

- `/tables` [WORKING]
    - wybór daty i godziny [DONE]
    - tabela z listą rezerwacji oraz wydarzeń
        - każda kolumna = 1 stolik [DONE]
        - każdy wiersz = 30 min blok [DONE]
        - ma przypominać widok tygodnia w kalendarzu google, gdzie w kolumnach zamiast dni są różne stoliki [DONE]
        - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów
- `/tables/booking/:id`
    - zawiera wszystkie infromacje dotyczące rezerwacji [WORKING]
    - musi umożliwać edycję i zapisanie zmian [DONE]
- `/tables/booking/new`
    - musi umożliwać edycję i zapisanie zmian [DONE]
- `/tables/events/:id`
    - musi umożliwać edycję i zapisanie zmian [DONE]
- `/tables/events/new`
    - musi umożliwać edycję i zapisanie zmian [DONE]

# Widok kelnera

- `/waiter` [DONE]
    - tabela
        - w wierszach stoliki
        - w kolumnach rodzaje informacji: ( status stolika, czas od ostatniej aktywności )
        - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
    - numer stolika edytowalny [DONE]
    - menu produktów [DONE]
    - opcje wybranego produktu [DONE]
    - zamówienie (zamówione produkty z opcjami i ceną) [WORKING]
    - kwotę zamówienia [WORKING]
- `/waiter/order/:id`
    - jak powyższa [DONE]

# Widok kuchni

- `/kitchen`
    - wyświetlać listę zamówień w kolejności ich złożenia [DONE]
    - lista zawiera [DONE]
        - nr stolika lub zamówienia zdalnego
        - pełne informacje dotyczące zamówionych dań
    -możliwość zaznaczenia zamówienia jako zrealizowane