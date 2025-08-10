import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div class="[&>*]:m-4">
      <img
        style="border-radius: var(--radius)"
        width="175"
        src="https://cdn.bsky.app/img/avatar/plain/did:plc:rcjhtxh5v4mwvrbezap3hixf/bafkreib5f2vynlmo3aa6napzkhbrykkpmxwz7uks3j5h244okbax5e6xp4@jpeg"
      />
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        style="
          min-width: 200px;
          width: 100%;
          max-width: 660px;
          overflow: hidden;
          border-radius: calc(var(--radius) + 1px);
        "
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/song/zissou/1825870058?theme=auto"
      >
      </iframe>
    </div>
  );
});
