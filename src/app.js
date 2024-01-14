const express = require('express')
const path = require('path')
const hbs = require('hbs')
const studentDetail = require('./models/studentDetails')
const StudentDetail = require('./models/studentDetails')
const bcrypt = require('bcryptjs')

const app = express()

require('./db/connect')

//setting up paths
const public_path = path.join(__dirname, '../public')
const views_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, "../templates/partials")


//setting up a static directory  to serve
app.use(express.static(public_path))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting up handlebars
app.set("view engine", "hbs")
app.set("views", views_path)
hbs.registerPartials(partials_path)

const securePassword = async function(password){
    const hash = await bcrypt.hash(password, 10);
    console.log(hash)
}

    app.post('/', async (req, res) =>{
        try {
            const email = req.body.email;
            const age = req.body.age;
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;

            // const securePass = securePassword(password)
            // const secureConfirmPass = securePassword(confirmPassword)

            if(password === confirmPassword){
                const registerStudent = StudentDetail({
                    email, age, password, confirmPassword
                })
                console.log("created user")
                const registered = await registerStudent.save();
                console.log(registered)

                res.redirect("/")
        } else {
            res.status(400).send('Passwords do not match');
        }
    } catch (error) {
        res.send(error)
    }
}
    )

    // app.post("/index", async (req, res) => {
    //     try {
    //         const email = req.body.email;
    //         const password = req.body.password;

    //         const userEmail = await StudentDetail.findOne({email: email})
    //         // if(userEmail.password === password){
    //         //     console.log("login succesful")
    //         //     res.redirect("/")
    //         // }else{
    //         //     console.log("try again!")
    //         // }
    //         console.log(password)
    //         // console.log(`${email}`)

    //     } catch (error) {
    //         res.status(400).send("not found!")
    //     }
    // })

    app.post("/index", async (req, res) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            console.log(email, password)
            let isLoggedin = false
    
            const user = await StudentDetail.findOne({ email: email });

            const isMatch = await bcrypt.compare(password, user.password) //userEnteredPass, db me stored pass
    
            if (isMatch) {
                console.log("Login successful");
                res.redirect("/");
                isLoggedin = true;
            } else {
                console.log("Incorrect email or password");
                res.status(401).send("Incorrect email or password");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    });
    

app.get('', (req, res) =>{
    res.render("index", {
        // "title": "ayush"
    })
})

app.get('/java_platforms', (req, res) =>{
    res.render("java_platforms")
})

app.get('/java_syntax', (req, res) => {
    res.render('java_syntax')
})

app.get('/java_datatypes', (req, res)=>{
    res.render('java_datatypes')
})

app.get('/java_arrays', (req, res) =>{
    res.render("java_arrays")
})

app.get('/java_operators', (req, res) =>{
    res.render('java_operators')
})

app.get('/java_scope', (req, res) =>{
    res.render('java_scope')
})

app.get('/java_identifiers', (req, res) =>{
    res.render('java_identifiers')
})

app.get('/java_input', (req, res) =>{
    res.render('java_input')
})

app.get('/java_string', (req, res) =>{
    res.render('java_string')
})

app.get('/java_conditionals', (req, res) =>{
    res.render('java_conditionals')
})

app.get('/java_loops', (req, res) =>{
    res.render('java_loops')
})

app.get('/java_arrays', (req, res) =>{
    res.render('java_arrays')
})

app.get('/java_methods', (req, res) =>{
    res.render('java_methods')
})

app.get('/java_packages', (req, res) =>{
    res.render('java_packages')
})

app.get('/java_arrays_basic', (req, res) =>{
    res.render('java_arrays_basic')
})

app.get('/java_conditionals_basic', (req, res) =>{
    res.render('java_conditionals_basic')
})

app.get('/java_datatypes_basic', (req, res) =>{
    res.render('java_datatypes_basic')
})

app.get('/java_identifiers_basic', (req, res) =>{
    res.render('java_identifiers_basic')
})

app.get('/java_input_basic', (req, res) =>{
    res.render('java_input_basic')
})

app.get('/java_input_basic', (req, res) =>{
    res.render('java_input_basic')
})

app.get('/java_loops_basic', (req, res) =>{
    res.render('java_loops_basic')
})

app.get('/java_methods_basic', (req, res) =>{
    res.render('java_methods_basic')
})

app.get('/java_operators_basic', (req, res) =>{
    res.render('java_operators_basic')
})

app.get('/java_platforms_basic', (req, res) =>{
    res.render('java_platforms_basic')
})

app.get('/java_scope_basic', (req, res) =>{
    res.render('java_scope_basic')
})

app.get('/java_string_basic', (req, res) =>{
    res.render('java_string_basic')
})


app.get('/java_classes', (req, res) =>{
    res.render('Java_classes')
})

app.get('/java_abstraction', (req, res) =>{
    res.render('Java_abstraction')
})

app.get('/java_polymorphism', (req, res) =>{
    res.render('Java_polymorphism')
})


app.get('/java_constructors', (req, res) =>{
    res.render('Java_constructors')
})

app.get('/java_encapsulation', (req, res) =>{
    res.render('Java_encapsultion')
})

app.get('/java_exceptionHandling', (req, res) =>{
    res.render('Java_exceptionHandling')
})

app.get('/java_graphs', (req, res) =>{
    res.render('Java_graphs')
})

app.get('/java_inheritence', (req, res) =>{
    res.render('Java_inheritence')
})

app.get('/java_math', (req, res) =>{
    res.render('Java_Math')
})

app.get('/java_multithreading', (req, res) =>{
    res.render('java_multithreading')
})

app.get('/java_trees', (req, res) =>{
    res.render('Java_Trees')
})

app.get('/java_queues', (req, res) =>{
    res.render('java_queue_basic')
})

app.get('/java_stack', (req, res) =>{
    res.render('java_stack')
})

app.get('/java_linkedlist', (req, res) =>{
    res.render('java_linkedlist')
})




app.listen(3000, () => console.log("server is up at 3000"))