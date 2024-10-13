export const fetchCompanyById = async (id: string) => {
    const response = await fetch(`/api/company/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
};