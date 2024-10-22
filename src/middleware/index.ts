import { PUBLIC_ROUTES } from "@constants/shared";
import { db, Session, eq } from "astro:db";
import jwt from "jsonwebtoken";
/*
export const onRequest = async (context, next) => {
    const id = context.cookies.get("id");
    if (id?.value) {
        const data = await db.select().from(Session).where(eq(Session.id, id))
        const now = new Date();
        const accessToken = jwt.verify(data[0].access_token, "secretkey");
        const refreshToken = jwt.verify(data[0].refresh_token, 'secretkey')
        const accessTokenExpired = accessToken.exp < now;
        const refreshTokenExpired = refreshToken.exp < now
        if (accessTokenExpired == true) {
        }
    }else{
        return Response.redirect(`${context.url.origin}/login`)
    }
}*/