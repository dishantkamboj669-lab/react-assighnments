import React from 'react'

const Uidesighn = () => {
  return (
    <div>
       <div style={{ fontFamily: "Arial, sans-serif", margin: 0, color: "#334155" }}>

      
      <nav style={{ backgroundColor: "#09234e", color: "white", padding: "20px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <h2 style={{ color: "#38bdf8", margin: 0 }}>WebCraft</h2>

        <div style={{ display: "flex", gap: "25px"}}>
          <a href="#home" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>Home</a>
          <a href="#about" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>About</a>
          <a href="#services" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>Services</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>Contact</a>
        </div>
      </nav>

      
      <section id="home" style={{ backgroundColor: "#89b06f", textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "40px", color: "#1e293b", marginBottom: "20px" }}>
          Build Your Digital Future
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "650px", margin: "0 auto 25px" }}>
          We create beautiful websites, innovative applications,
          and user-friendly designs to help your business grow.
        </p>

        <button
         
          style={{ backgroundColor: "#2563eb", color: "white", padding: "12px 25px", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" }}
        >
          Get Started
        </button>

        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
            alt="Web developer working on a computer"
            style={{ width: "90%", maxWidth: "650px", height: "300px", objectFit: "cover", borderRadius: "12px", marginTop: "30px" }}
          />
        </div>
      </section>

      
      <section id="about" style={{ padding: "60px 8%", display: "flex", alignItems: "center", justifyContent: "center", gap: "35px",backgroundColor:"#6c6574" }}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
          alt="Team working together"
          style={{ width: "100%", maxWidth: "400px", height: "280px", objectFit: "cover", borderRadius: "12px" }}
        />

        <div style={{ flex: "1", minWidth: "260px", maxWidth: "550px" }}>
          <h2 style={{ fontSize: "32px", color: "#1e293b" }}>
            About WebCraft
          </h2>

          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            WebCraft is a creative digital solutions company focused
            on building modern websites and applications. Our goal
            is to combine creativity and technology to help businesses
            succeed in the digital world.
          </p>

          <button
           
            style={{ backgroundColor: "#2563eb", color: "white", padding: "12px 25px", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" }}
          >
            Learn More
          </button>
        </div>
      </section>

    
      <section id="services" style={{ backgroundColor: "#63798f", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", color: "#1e293b" }}>Our Services</h2>

        <p style={{ fontSize: "17px", marginBottom: "35px" }}>
          We provide creative solutions for your business.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap" }}>

        
          <div style={{ backgroundColor: "white", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", padding: "25px", width: "250px" }}>
            <h3 style={{ color: "#2563eb", fontSize: "22px" }}> Web Development</h3>
            <p style={{ lineHeight: "1.7", color: "#64748b" }}>
              We build modern, responsive, and attractive websites for your business.
            </p>
            <button
              
              style={{ backgroundColor: "#2563eb", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Learn More
            </button>
          </div>

          
          <div style={{ backgroundColor: "white", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", padding: "25px", width: "250px" }}>
            <h3 style={{ color: "#2563eb", fontSize: "22px" }}> App Development</h3>
            <p style={{ lineHeight: "1.7", color: "#64748b" }}>
              We create useful and easy-to-use mobile applications for everyone.
            </p>
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              style={{ backgroundColor: "#2563eb", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Learn More
            </button>
          </div>

        
          <div style={{ backgroundColor: "white", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", padding: "25px", width: "250px" }}>
            <h3 style={{ color: "#2563eb", fontSize: "22px" }}> UI/UX Design</h3>
            <p style={{ lineHeight: "1.7", color: "#64748b" }}>
              We design beautiful interfaces and improve the user experience.
            </p>
            <button
             
              style={{ backgroundColor: "#2563eb", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Learn More
            </button>
          </div>

        </div>
      </section>

      
      <footer id="contact" style={{ backgroundColor: "#1e293b", color: "white", textAlign: "center", padding: "35px 20px" }}>
        <h2 style={{ color: "#38bdf8" }}>WebCraft</h2>

        <p style={{ margin: "10px 0" }}>
          Turning your ideas into digital experiences.
        </p>

        <p style={{ margin: "10px 0" }}>
          Email: hello@webcraft.com
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", margin: "20px 0" }}>
          <a style={{ color: "white", textDecoration: "none" }}>Facebook</a>
          <a style={{ color: "white", textDecoration: "none" }}>Instagram</a>
          <a style={{ color: "white", textDecoration: "none" }}>LinkedIn</a>
        </div>

        <p style={{ fontSize: "14px", marginTop: "20px" }}>
          ©  WebCraft. All rights reserved.
        </p>
      </footer>

    </div>
    </div>
  )
}

export default Uidesighn