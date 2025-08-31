import { define } from "../utils.ts";

export default define.page(function App({ Component, state }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="personal website of black bean crunchwrap queen"
        />
        <title>{state.title ?? "Hi, I'm Cat"}</title>
      </head>
      <body>
        <div class="container min-h-screen py-12">
          <div className="alert mb-8 rounded bg-amber-500/12 p-4 font-medium text-yellow-700 dark:text-yellow-500">
            <h2>🚧 my personal website - under construction</h2>
          </div>
          <Component />
        </div>
      </body>
    </html>
  );
});
