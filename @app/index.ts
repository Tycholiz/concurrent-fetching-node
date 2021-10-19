import express, { Request, Response, NextFunction } from "express";
import * as routes from './routes';


const PORT = process.env.PORT || 5000;
const app = express()

routes.register(app)

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
    var err = new Error('Not Found');
    /* @ts-ignore */
    err.status = 404;
    next(err);
});

app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
