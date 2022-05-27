const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    const token =
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] ||
        req.cookies.token;
    // si il n'y a pas de cookie
    if (!token) {
        res.status(400).json({ message: "Vous n'êtes pas autorisé" });
    } else {
        // si il y a des cookies, vérifier s'ils sont encore valide avec la fonction du package JSONwebtoken
        jwt.verify(token, process.env.JSW_SECRET, function(err, decoded) {
            if (err) {
                res.status(401).send({ error: "invalide token" });
            } else {
                // si les cookie sont validé, passé à la prochaine fonction grâce à "next()"
                res.locals._idprof = decoded.userId
                console.log(res.locals._idprof)
                next()
            }
        });
    }
}