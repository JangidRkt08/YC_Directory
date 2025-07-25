# Tutorial: YC_Directory

The YC Directory is a platform for **startup founders** to *pitch* their ideas, connect with other entrepreneurs, and gain visibility. Users can **create** and **vote** on startup pitches. The platform uses Sanity CMS for content management and Next.js for the frontend.


**Source Repository:** [https://github.com/JangidRkt08/YC_Directory.git](https://github.com/JangidRkt08/YC_Directory.git)

```mermaid
flowchart TD
    A0["Sanity Schema"]
    A1["Sanity Client"]
    A2["GROQ Queries"]
    A3["NextAuth.js Integration"]
    A4["React Server Components and Server Actions"]
    A5["Tailwind CSS and ShadCN UI"]
    A6["Next.js Routing"]
    A7["Toast Management"]
    A0 -- "Defines data structure" --> A1
    A1 -- "Executes" --> A2
    A2 -- "Used to Query" --> A1
    A3 -- "Creates users" --> A1
    A4 -- "Fetches/Mutates data" --> A1
    A5 -- "Styles Components" --> A4
    A6 -- "Defines pages" --> A4
    A7 -- "Provides Notifications" --> A4
    A0 -- "Stores user data" --> A3
    A0 -- "Specifies queryable fields" --> A2
    A4 -- "Triggers notifications" --> A7
    A6 -- "Passes parameters" --> A2
```

## Chapters

1. [Next.js Routing](01_next_js_routing.md)
2. [React Server Components and Server Actions](02_react_server_components_and_server_actions.md)
3. [Tailwind CSS and ShadCN UI](03_tailwind_css_and_shadcn_ui.md)
4. [NextAuth.js Integration](04_nextauth_js_integration.md)
5. [Toast Management](05_toast_management.md)
6. [Sanity Schema](06_sanity_schema.md)
7. [Sanity Client](07_sanity_client.md)
8. [GROQ Queries](08_groq_queries.md)


---

