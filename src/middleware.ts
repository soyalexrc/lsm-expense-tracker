import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";
import {NextRequest, NextResponse} from "next/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
    // Add a new header x-current-path which passes the path to downstream components
    // const headers = new Headers(req.headers);
    // headers.set("x-current-path", req.nextUrl.pathname);
    // return NextResponse.next({ headers });
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
