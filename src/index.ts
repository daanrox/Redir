import express, { Request, Response } from 'express';
import cors from 'cors';



const app = express();
const port = 3000;

app.use(cors());

app.get('/script', (req: Request, res: Response) => {
  const dynamicScript = `<script>localStorage.setItem('API', 'Redir by @Daanrox');</script>`;
      
    res.json({ script: dynamicScript });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});