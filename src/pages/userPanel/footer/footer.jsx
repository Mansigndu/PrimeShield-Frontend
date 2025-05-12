import './footer.css';

function Footer() {
  return (
    <>
      <div className="footerbox">
        <div className="leftfooter">
          <img src={'./public/images/navlogo.png'} alt="Logo" width={200} />
        </div>
        <div className="centerfooter">
          <div className="emailSection">
            <h3>Emails</h3>
            <p>support@example.com</p>
            <p>info@example.com</p>
          </div>
          <div className="contactSection">
            <h3>Contact</h3>
            <p>Phone: +123 456 7890</p>
            <p>Fax: +123 456 7891</p>
          </div>
        </div>
        <div className="rightfooter">
          <h3>Address</h3>
          <p>1234 Some Street, City, Country</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
