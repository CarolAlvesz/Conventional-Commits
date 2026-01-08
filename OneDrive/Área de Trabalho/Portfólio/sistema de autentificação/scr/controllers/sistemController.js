const jwt = require ('jsonwebtoken');
const bcrypy = require ('bcryptjs');

const user = [];

module.exports = {
    register (req, res) {
        res.send('register');
        const { username, password } = req.body;
        const userExists = user.find (u => u.username === username || u.email === email);

        if (userExists) {
            return res.status (400).json ({ message: 'User already exists' });
        }

        const hashedPassword = bcrypy.hashSync (password, 8);
        const user = {
            id,
            username,
            email,
            password: hashedPassword
         };
        user.push (user);

        return res.status (201).json ({ message: 'User registered successfully' });
    },

    login (req, res) {
        res.send('login');
        const { username, email, password } = req.body;
        const user = user.find (u => u.email === email) || user.find (u => u.username === username);
        if (!user) {
            return res.status (400).json ({ message: 'user not found' });
        }
        const passwordIsValid = bcrypy.compareSync (password, user.password);
        if (!passwordIsValid) {
            return res.status (401).json ({ message: 'Invalid password' });
        }

        const token = jwt.sign (
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN} 
        );

        return res.status (200).json ({ auth: true, token });

       }

};  