import test from "ava";
import importToArray from "import-to-array";
import * as randomAnimals from "../src";

test("all endpoints return a 200 with an image", async (t) => {
  const animals = importToArray(randomAnimals);
  const results = await Promise.allSettled(animals.map((animal) => animal()));
  results.forEach((result, index) => {
    const reason =
      (result as any)?.reason?.statusText || (result as any)?.reason?.errno;
    t.is(result.status, "fulfilled", `${animals[index].name}: ${reason}`);
  });
});
