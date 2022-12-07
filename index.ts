import express from "express";
import {AppDataSource} from "./src/data-source";
import bodyParser from "body-parser";
import {PhoneBook} from "./src/entity/PhoneBook";
import multer from 'multer';
const upload = multer();

AppDataSource
.initialize()
.then(() => {
    console.log('Data Source has been initialized!')
})
.catch((err) => {
    console.log("Error during Data Source initialization:", err)
})

const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(bodyParser.json())
app.use(express.json())

const PhoneBookRepo = AppDataSource.getRepository(PhoneBook)

app.get("/phone/create", (req, res) => {
    res.render("create");
});

app.post("/phone/create", upload.none(), async (req, res) => {
    const phoneData = {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone
    };

    await PhoneBookRepo.save(phoneData);
    res.render("success");
});

app.get("/phone/list", async (req, res) => {
    const phoneBooks = await PhoneBookRepo.find();
    console.log(phoneBooks)
    res.render("list", { phoneBooks: phoneBooks })
});

app.listen(3000, () =>{
    console.log('server is running on port 3000')
})