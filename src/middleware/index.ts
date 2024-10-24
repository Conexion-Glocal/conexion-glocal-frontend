import { PUBLIC_ROUTES } from "@constants/shared";
import { db, Session, eq } from "astro:db";
import jwt from "jsonwebtoken";
export const onRequest = async (context, next) => {
    const id = context.cookies.get("id").value;
    if (id?.value) {
        const data = await db.select().from(Session).where(eq(Session.id, id));
        const accessToken = jwt.verify(data[0].access_token, "secretkey");
        const refreshToken = jwt.verify(data[0].refresh_token, 'secretkey');
        if (accessToken) {
            if (PUBLIC_ROUTES.includes(context.url.pathname) || context.url.pathname.search('/password/reset/') != -1) {
                return Response.redirect(`${context.url.origin}/home`);
            } else {
                return next();
            }
        } else {
            if (PUBLIC_ROUTES.includes(context.url.pathname) || context.url.pathname.search('/password/reset/') != -1) {
                return next();
            } else {
                return Response.redirect(`${context.url.origin}/error/404`);
            }
        }
    }
    return next();
}