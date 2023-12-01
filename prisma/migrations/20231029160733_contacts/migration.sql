-- CreateTable
CREATE TABLE "CONTACTS" (
    "id" TEXT NOT NULL,
    "instagram_liknk" TEXT NOT NULL,
    "facebook_link" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CONTACTS_pkey" PRIMARY KEY ("id")
);
