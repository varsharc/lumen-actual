import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server";

export const getCompanies = async () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase
    .from("companies")
    .select(`*`)
  return { data, error };
};

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await getCompanies();
  if (data.error) {
    return new NextResponse(JSON.stringify({ message: "journey not found" }), { status: 404 });
  }
  return new NextResponse(JSON.stringify(data.data));
}
