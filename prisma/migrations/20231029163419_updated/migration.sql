/*
  Warnings:

  - Added the required column `address` to the `CONTACTS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CONTACTS" ADD COLUMN     "address" TEXT NOT NULL;
