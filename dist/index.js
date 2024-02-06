"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.get('/script', (req, res) => {
    const dynamicScript = `<script>localStorage.setItem('API', 'Redir by @Daanrox');</script>`;
    res.json({ script: dynamicScript });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
