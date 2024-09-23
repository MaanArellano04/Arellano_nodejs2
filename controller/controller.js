const maan = {
    m: (req, res) => { 
        res.render('index');
    },
    about: (req, res) => { 
        res.render('about');
    },
    blog: (req, res) => { 
        res.render('blog');
    },
    contact: (req, res) => { 
        res.render('contact');
    },
    product: (req, res) => { 
        res.render('product');
    },
    testimonial: (req, res) => { 
        res.render('testimonial');
    }



};

module.exports = maan;