import { define } from "../utils.ts";

export default define.page(function App({ Component, state }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{state.title ?? "Hi, I'm Cat"}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="min-h-screen container pt-12">
          <Component />
        </div>
      </body>
    </html>
  );
});
