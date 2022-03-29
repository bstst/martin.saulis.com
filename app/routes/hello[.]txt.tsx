export async function loader() {
  return new Response(`Hello! This is a simple text file.`, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
