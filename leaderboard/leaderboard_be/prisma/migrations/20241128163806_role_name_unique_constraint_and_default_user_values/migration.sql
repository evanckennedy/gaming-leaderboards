/*
  Warnings:

  - A unique constraint covering the columns `[role_name]` on the table `role` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "access_failed_count" SET DEFAULT 0,
ALTER COLUMN "last_login" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "locked_out" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "role_role_name_key" ON "role"("role_name");
