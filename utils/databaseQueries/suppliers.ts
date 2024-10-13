export const FetchSuppliersByID = async (id: string) => {
    const response = await fetch(`/api/suppliers/${id}`);
    const data = await response.json();
    console.log(data)
    return data;
};