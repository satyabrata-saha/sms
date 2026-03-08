// export { auth as proxy } from "@/lib/auth";

import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  return null;
}

export const config = {
  matcher: "/dashboard/:path*",
};
