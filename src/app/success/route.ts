import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // Redirect POST requests to the GET handler of the success page
    // Using 303 See Other to ensure the method changes to GET
    return NextResponse.redirect(new URL("/payment-success", req.url), 303);
}

export async function GET(req: NextRequest) {
    // Redirect GET requests to the new success page location
    // Using 307 Temporary Redirect to preserve method/body if needed, though for GET it's just a redirect
    return NextResponse.redirect(new URL("/payment-success", req.url), 307);
}
