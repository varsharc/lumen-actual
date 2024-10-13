import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchCompanyById} from "@/utils/databaseQueries/companies";
import { FetchSuppliersByID } from "@/utils/databaseQueries/suppliers";

export type CompanyData = {
  best_performer: number;
  company_id: string;
  company_name: string;
  environmental_score: number;
  esg_rating: number;
  governance_score: number;
  lumens: number;
  market_average: number;
  per_sku_lumens: number;
  performance: number;
  regulation_target: number;
  skus: number;
  social_score: number;
  supply_chain_loop: number;
};

interface SupplierData {
  supplier_id: string;
  supplier_name: string;
}

interface ICompanyContext {
  companyID: string;
  companyData: UseQueryResult<CompanyData | null, Error>;
  supplierData: UseQueryResult<SupplierData[] | null, Error>;
}

const CompanyContext = createContext<ICompanyContext | null>(null);

const useCompany = () => {
  const companyID = "10001"; // Hardcoded company ID for now, can be dynamic if needed
  const companyData = useQuery({
    queryKey: ["company", companyID],
    queryFn: async () => {
      const data = await fetchCompanyById(companyID);
      return data;
    },
  });
  const supplierData = useQuery({
    queryKey: ["suppliers", companyID],
    queryFn: async () => {
      const data = await FetchSuppliersByID(companyID);
      return data;
    },
  });
  return {
    companyID,
    companyData,
    supplierData,
  };
};

export function ProvideCompany({ children }: PropsWithChildren<any>) {
  const value = useCompany();
  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  )
}

// Custom hook to access the company context
export const useCompanyContext = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("Ensure that the component is wrapped inside ProvideCompany");
  }
  return context;
};