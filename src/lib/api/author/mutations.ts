import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import { 
  AuthorId, 
  NewAuthorParams,
  UpdateAuthorParams, 
  updateAuthorSchema,
  insertAuthorSchema, 
  author,
  authorIdSchema 
} from "@/lib/db/schema/author";

export const createAuthor = async (author: NewAuthorParams) => {
  const newAuthor = insertAuthorSchema.parse(author);
  try {
    const [a] =  await db.insert(author).values(newAuthor).returning();
    return { author: a };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateAuthor = async (id: AuthorId, author: UpdateAuthorParams) => {
  const { id: authorId } = authorIdSchema.parse({ id });
  const newAuthor = updateAuthorSchema.parse(author);
  try {
    const [a] =  await db
     .update(author)
     .set({...newAuthor, updatedAt: new Date() })
     .where(eq(author.id, authorId!))
     .returning();
    return { author: a };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteAuthor = async (id: AuthorId) => {
  const { id: authorId } = authorIdSchema.parse({ id });
  try {
    const [a] =  await db.delete(author).where(eq(author.id, authorId!))
    .returning();
    return { author: a };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

