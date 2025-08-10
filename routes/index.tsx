import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div class="mx-auto">
      <div class="grid grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-fr">
        <img
          class="rounded"
          src="https://cdn.bsky.app/img/avatar/plain/did:plc:rcjhtxh5v4mwvrbezap3hixf/bafkreib5f2vynlmo3aa6napzkhbrykkpmxwz7uks3j5h244okbax5e6xp4@jpeg"
        />
        <div class="flex items-center justify-center bg-amber-300 dark:bg-amber-500 rounded">
          <p class="text-3xl font-extrabold">tile 1</p>
        </div>
        <div class="flex items-center justify-center bg-amber-400 dark:bg-amber-600 rounded">
          <p class="text-3xl font-extrabold">tile 2</p>
        </div>
        <div class="col-span-3 bg-[#f8f8fa] dark:bg-[#1c1c1e] rounded flex items-center">
          <iframe
            class="rounded-xl w-full overflow-hidden"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/song/zissou/1825870058?theme=auto"
          >
          </iframe>
        </div>
        <div class="col-span-3 row-span-2 flex items-center justify-center bg-pink-300 dark:bg-pink-600 rounded">
          <p class="text-3xl font-extrabold">tile 3</p>
        </div>
        <div class="flex items-center justify-center bg-pink-400 dark:bg-pink-700 rounded">
          <p class="text-3xl font-extrabold">tile 4</p>
        </div>
        <div class="col-span-2 flex items-center justify-center bg-pink-500 dark:bg-pink-800 rounded">
          <p class="text-3xl font-extrabold">tile 5</p>
        </div>
        <div class="flex items-center justify-center bg-rose-300 dark:bg-rose-500 rounded">
          <p class="text-3xl font-extrabold">tile 6</p>
        </div>
        <div class="flex items-center justify-center bg-rose-400 dark:bg-rose-600 rounded">
          <p class="text-3xl font-extrabold">tile 7</p>
        </div>
        <div class="flex items-center justify-center bg-rose-500 dark:bg-rose-700 rounded">
          <p class="text-3xl font-extrabold">tile 8</p>
        </div>
      </div>
    </div>
  );
});
