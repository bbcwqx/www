import { useCallback, useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

// todo: rewrite this entire embarrassing file

type Author = {
  did: string;
  handle: string;
  displayName?: string;
  avatar?: string;
};

type Post = {
  author: Author;
  record?: { text?: string };
  likeCount?: number;
  replyCount?: number;
  uri: string;
};

type Reply = {
  post: Post;
  replies?: Reply[];
};

type Thread = {
  post: Post;
  replies?: Reply[];
};

const fetchThreadData = async (uri: string): Promise<Thread> => {
  const params = new URLSearchParams({
    uri,
    depth: "1",
  });

  const url =
    `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?${params}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Fetch Error: ", errorText);
    throw new Error(`failed to fetch thread`);
  }

  const data = await response.json();

  if (!data.thread || !data.thread.replies) {
    throw new Error("Invalid thread data: Missing expected properties.");
  }

  return data.thread;
};

const Comment = ({ reply }: { reply: Reply }) => {
  const { author, record } = reply.post;
  const text = record?.text || "";

  return (
    <div class="mb-4 pb-4 last:mb-0 last:pb-0">
      <div class="space-y-2">
        <a
          href={`https://bsky.app/profile/${author.did}`}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 font-medium"
        >
          {author.avatar && (
            <img
              width="22"
              height="22"
              src={author.avatar}
              alt={`${author.handle} avatar`}
              class="rounded-full"
            />
          )}
          <span>{author.displayName ?? author.handle}</span>
          <span class="text-muted-foreground">@{author.handle}</span>
        </a>
        <p class="pl-6 leading-relaxed">{text}</p>
      </div>
      {reply.replies && reply.replies.length > 0 && (
        <div class="mt-4 ml-6 space-y-4 border-l pl-4">
          {reply.replies.map((childReply, index) => (
            <Comment
              key={`${childReply.post.uri}-${index}`}
              reply={childReply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Guestbook({ post }: { post: string }) {
  const visibleCount = useSignal(3);
  const thread = useSignal<Thread | null>(null);
  const error = useSignal<string | null>(null);
  const loading = useSignal(false);

  const loadThread = useCallback(async (uri: string) => {
    loading.value = true;
    error.value = null;

    try {
      const threadData = await fetchThreadData(uri);
      thread.value = threadData;
    } catch (err) {
      const errorMessage = err instanceof Error
        ? err.message
        : "Error loading comments";
      error.value = errorMessage;
      console.error("Error fetching thread:", err);
    } finally {
      loading.value = false;
    }
  }, []);

  useEffect(() => {
    if (!post) {
      error.value = "Post URI is required";
      return;
    }
    loadThread(post);
  }, [post, loadThread]);

  const handleShowMore = useCallback(() => {
    visibleCount.value += 5;
  }, []);

  const replies = thread.value?.replies || [];
  const visibleReplies = replies.slice(0, visibleCount.value);
  const hasMoreComments = visibleCount.value < replies.length;
  const hasReplies = replies.length > 0;

  return (
    <div class="mx-auto">
      <div class="rounded-lg">
        <div class="mb-6">
          <p class="text-2xl font-bold">say hi 👋</p>
          <p class="text-muted-foreground">
            leave a comment {thread.value
              ? (
                <a
                  href={`https://bsky.app/profile/${thread.value.post?.author?.did}/post/${
                    thread.value.post?.uri.split("/").pop()
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-medium text-blue-500 hover:underline"
                >
                  here
                </a>
              )
              : <span class="font-medium">here</span>} on bluesky
          </p>
        </div>

        {error.value && !loading.value && (
          <div class="py-8 text-center text-muted-foreground">
            <p>an error occurred 😭</p>
          </div>
        )}

        {!loading.value && !error.value && !hasReplies && (
          <div class="py-8 text-center text-muted-foreground">
            <p>
              no comments yet
            </p>
          </div>
        )}

        {!loading.value && !error.value && hasReplies && (
          <>
            <div class="space-y-6">
              {visibleReplies.map((reply, index) => (
                <Comment
                  key={`${reply.post.uri}-${index}`}
                  reply={reply}
                />
              ))}
            </div>

            {hasMoreComments && (
              <div class="mt-6 text-center">
                <button
                  type="button"
                  onClick={handleShowMore}
                  class="btn cursor-auto rounded"
                >
                  show more comments
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
