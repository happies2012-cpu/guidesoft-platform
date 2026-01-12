import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    "/",
    "/about",
    "/services",
    "/contact",
    "/blog(.*)",
    "/faq",
    "/pricing",
    "/terms",
    "/privacy",
    "/marketplace",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/api/contact",
    "/api/payments/submit-proof",
    "/api/webhooks(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
    if (!isPublicRoute(request)) {
        await auth.protect();
    }
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
