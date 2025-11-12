import { db } from "@/server/db";

import { TInsertActivityLog, activityLog } from "./schema";

export async function logActivity({
  userId,
  userName,
  initiativeId,
  initiativeName,
  organizationId,
  organizationName,
  entity,
  entityId,
  action,
  details,
}: TInsertActivityLog) {
  await db.insert(activityLog).values({
    userId,
    userName,
    organizationId,
    organizationName,
    initiativeId,
    initiativeName,
    entity,
    entityId,
    action,
    details,
  });
}
