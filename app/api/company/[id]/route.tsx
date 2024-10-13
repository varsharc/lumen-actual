import { createClient } from "@supabase/supabase-js"
import { get } from "http";
import { NextRequest, NextResponse } from "next/server";

export const getCompany = async (id: string) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase
    .from("esg_facts")
    .select("*")
    .eq("company_id", id)
    .single();
  return { data, error };
};

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const journey_id = params.id;
  const data = await getCompany(journey_id);
  if (data.error) {
    return new NextResponse(JSON.stringify({ message: "journey not found" }), { status: 404 });
  }
  return new NextResponse(JSON.stringify(data.data));
}
