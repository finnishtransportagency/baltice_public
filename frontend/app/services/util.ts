export async function fetcher(endpoint: string) {
    const url = `${process.env.NEXT_PUBLIC_BALTICE_API_URL}${endpoint}`;
    const res = await fetch(url);
    return res.json();
}