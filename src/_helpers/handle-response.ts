
export async function handleResponse(response: Response) {
  if ([401, 403].includes(response.status)) {
    window.location.href = '/';
  }

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}
