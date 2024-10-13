import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server";

export const getProductsByCompanyID = async (id: string) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase
    .from("products")
    .select(`*, companies(*)`)
    .eq("company_id", id)
  return { data, error };
};

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const company_id = params.id;
  const data = await getProductsByCompanyID(company_id);
  if (data.error) {
    return new NextResponse(JSON.stringify({ message: "journey not found" }), { status: 404 });
  }
  return new NextResponse(JSON.stringify(data.data));
}
