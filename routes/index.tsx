import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div class="mx-auto">
      <div class="grid grid-cols-3 gap-4 md:grid-cols-6">
        <img
          class="aspect-square rounded object-cover"
          src="https://cdn.bsky.app/img/avatar/plain/did:plc:rcjhtxh5v4mwvrbezap3hixf/bafkreib5f2vynlmo3aa6napzkhbrykkpmxwz7uks3j5h244okbax5e6xp4@jpeg"
        />
        <div class="flex aspect-square items-center justify-center rounded bg-amber-300 dark:bg-amber-500">
          <p class="text-3xl font-extrabold">tile 1</p>
        </div>
        <div class="flex aspect-square items-center justify-center rounded bg-amber-400 dark:bg-amber-600">
          <p class="text-3xl font-extrabold">tile 2</p>
        </div>
        <div class="col-span-3 flex aspect-[3/1] items-center overflow-hidden rounded bg-[#f8f8fa] p-2 dark:bg-[#1c1c1e]">
          <iframe
            class="w-full scale-75 [clip-path:inset(1px_round_12px)] lg:scale-100"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/song/zissou/1825870058?theme=auto"
          >
          </iframe>
        </div>
        <div class="col-span-3 row-span-2 flex aspect-[3/2] items-center justify-center rounded bg-pink-300 dark:bg-pink-600">
          <p class="text-3xl font-extrabold">tile 3</p>
        </div>
        <div class="flex aspect-square items-center justify-center rounded bg-pink-400 dark:bg-pink-700">
          <p class="text-3xl font-extrabold">tile 4</p>
        </div>
        <div class="col-span-2 flex aspect-[2/1] items-center justify-center rounded bg-pink-500 dark:bg-pink-800">
          <p class="text-3xl font-extrabold">tile 5</p>
        </div>
        <div class="flex aspect-square items-center justify-center rounded bg-rose-300 dark:bg-rose-500">
          <p class="text-3xl font-extrabold">tile 6</p>
        </div>
        <div class="flex aspect-square items-center justify-center rounded bg-rose-400 dark:bg-rose-600">
          <p class="text-3xl font-extrabold">tile 7</p>
        </div>
        <div class="flex aspect-square items-center justify-center rounded bg-rose-500 dark:bg-rose-700">
          <p class="text-3xl font-extrabold">tile 8</p>
        </div>
      </div>
    </div>
  );
});
