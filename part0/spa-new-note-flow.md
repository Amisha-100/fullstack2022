```mermaid
sequenceDiagram
    participant browser
    participant server

    browse->> POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa [content-type: application/json is passed to Request headers]
    activate server
    server-->>browser: Note is created and displayed to the browser without loading the entire site
    deactivate server

    Note right of browser: The preloaded JavaScript code is used here. An event handler is called.
```