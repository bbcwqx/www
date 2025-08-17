import { assertEquals, assertExists } from "jsr:@std/assert";

Deno.test("server", async () => {
  const serverProcess = new Deno.Command(Deno.execPath(), {
    args: ["task", "start"],
  }).spawn();

  await new Promise((resolve) => setTimeout(resolve, 200));

  try {
    const response = await fetch("http://localhost:8000");
    assertEquals(response.status, 200);

    const body = await response.text();
    assertExists(body);
  } finally {
    serverProcess.kill();
    await serverProcess.status;
  }
});
