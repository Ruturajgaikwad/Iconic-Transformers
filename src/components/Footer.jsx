const Footer = () => {
  return (
    <footer className="bg-accent text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-grayscale-200">Home</a></li>
            <li><a href="/about" className="hover:text-grayscale-200">About</a></li>
            <li><a href="/services" className="hover:text-grayscale-200">Services</a></li>
            <li><a href="/contact" className="hover:text-grayscale-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>Email:</strong> iconictransformer@gmail.com</li>
            <li><strong>Phone:</strong> +91-7083579959</li>
            <li><strong>Address:</strong> B-19,Gane Khadpoli,Chiplun,Ratnagiri, Maharashtra, India</li>
          </ul>
        </div>

        {/* Branding */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Iconic Transformers and Electricals Pvt. Ltd.</h3>
            <p className="text-sm text-grayscale-300">Powering the future with smart transformer solutions.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
