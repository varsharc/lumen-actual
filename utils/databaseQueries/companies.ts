export const fetchCompanyById = async (id: string) => {
    const response = await fetch(`/api/company/${id}`);
    const data = await response.json();
    return data;
};

export const fetchProductsByCompanyID = async (id: string) => {
    const response = await fetch(`/api/product/${id}`);
    const data = await response.json();
    return data;
}

export const FetchSuppliersByID = async (id: string) => {
    const response = await fetch(`/api/suppliers/${id}`);
    const data = await response.json();
    return data;
};

export const GetAllCompanies = async () => {
    const response = await fetch(`/api/company`);
    const data = await response.json();
    return data;
}