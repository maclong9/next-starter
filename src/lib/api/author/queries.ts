import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import { type AuthorId, authorIdSchema, author } from "@/lib/db/schema/author";
import { posts } from "@/lib/db/schema/posts";

export const getAuthors = async () => {
  const rows = await db.select({ author: author, post: posts }).from(author).leftJoin(posts, eq(author.postId, posts.id));
  const a = rows .map((r) => ({ ...r.author, post: r.post})); 
  return { author: a };
};

export const getAuthorById = async (id: AuthorId) => {
  const { id: authorId } = authorIdSchema.parse({ id });
  const [row] = await db.select({ author: author, post: posts }).from(author).where(eq(author.id, authorId)).leftJoin(posts, eq(author.postId, posts.id));
  if (row === undefined) return {};
  const a =  { ...row.author, post: row.post } ;
  return { author: a };
};


