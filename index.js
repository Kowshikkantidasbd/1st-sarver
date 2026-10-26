import express from 'express';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // CORS মিডলওয়্যার ব্যবহার করার জন্য

app.get("/", (req, res) => {
    res.send("who is kowshik");
});

const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' }, // 👈 এখানে কমা (,) যোগ করা হয়েছে
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
    { id: 4, name: 'Alice Williams', email: 'alice.williams@example.com' }
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/dashboard", (req, res) => {
    res.send("who is kowshik in for a man");
});

app.listen(PORT, () => {
    console.log(`Savar is running on port ${PORT}`);
});