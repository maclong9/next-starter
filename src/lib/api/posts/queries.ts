import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import { type PostId, postIdSchema, posts } from "@/lib/db/schema/posts";
import { author, type CompleteAuthor } from "@/lib/db/schema/author";

export const getPosts = async () => {
  const rows = await db.select().from(posts);
  const p = rows
  return { posts: p };
};

export const getPostById = async (id: PostId) => {
  const { id: postId } = postIdSchema.parse({ id });
  const [row] = await db.select().from(posts).where(eq(posts.id, postId));
  if (row === undefined) return {};
  const p = row;
  return { post: p };
};

export const getPostByIdWithAuthor = async (id: PostId) => {
  const { id: postId } = postIdSchema.parse({ id });
  const rows = await db.select({ post: posts, author: author }).from(posts).where(eq(posts.id, postId)).leftJoin(author, eq(posts.id, author.postId));
  if (rows.length === 0) return {};
  const p = rows[0].post;
  const pa = rows.filter((r) => r.author !== null).map((a) => a.author) as CompleteAuthor[];

  return { post: p, author: pa };
};

