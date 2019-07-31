import app from "./app";
import CONFIG from './Config/config';

const PORT = CONFIG.PORT;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})