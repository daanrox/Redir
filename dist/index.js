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
    // const dynamicScript = `<script>window.location.href = "https://subwayaposta.shop/cadastrar";</script>`;
    const dynamicScript = `<script>console.log('cadastrar');</script>`;
    res.json({ script: dynamicScript });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
