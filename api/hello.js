export default function handler(req, res) {
    // Handle the request based on the HTTP method
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Hello from Vercel!' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
