DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('user', 'editor', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "role";