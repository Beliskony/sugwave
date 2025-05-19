import { useState } from "react"


const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    e.preventDefault();
  console.log("Form submitted:", formData);

    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    setIsClicked(false);
  }

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
 
  
  return (
    <section className="bg-transparent w-full h-28 flex flex-row item-center justify-around px-4 max-sm:px-1 max-sm:justify-between">
      <div className="flex flex-row items-center p-2">
        <img src="/images/LogoNoBG.png" alt="Logo"className="w-28 h-28" />
      </div>

      <nav className="flex flex-row text-2xl items-center max-sm:hidden">
        <a href="#" className="text-white mx-4 hover:font-bold hover:scale-110 transition-all">Home</a>
        <a href="#" className="text-white mx-4 hover:font-bold hover:scale-110 transition-all">Project</a>
        <a href="#" className="text-white mx-4 hover:font-bold hover:scale-110 transition-all">Contact</a>
      </nav>

    


      <div className="flex flex-row items-center">
        <button onClick={handleClick} className="bg-white text-black px-4 py-2 rounded-2xl w-40">Contactez-nous </button>
             {isClicked && (
        
         <div className="fixed inset-0 flex flex-row w-full items-center justify-center bg-transparent backdrop-blur-sm z-50">
          
        <div className="flex flex-row w-[800px] items-center justify-center bg-white max-sm:w-screen max-sm:mx-2">
          <img src="/images/bgOne.jpg" alt="bgOne" className="w-80 h-80 rounded-4xl max-sm:hidden" />
          <form onSubmit={handleSubmit} className="min-w-[400px] justify-center items-center bg-white p-6 rounded flex flex-col gap-4">
            
            <button type="button" onClick={() => setIsClicked(false)} className="absolute top-4 right-4 max-sm:top-2 max-sm:right-2">
              <img src="https://img.icons8.com/?size=100&id=8112&format=png&color=ffffff" alt="Close" className="w-10 h-10 hover:scale-110" />
              </button>
            
            <label className="text-black w-full">
              First Name:
              <input id="firstName" name="firstName" type="text" className="block focus-visible:ring-0 focus-visible:border-0 border rounded px-2 py-1 mt-1 w-full" required />
            </label>

            <label className="text-black w-full">
              Last Name:
              <input id="lastName" name="lastName" type="text" className="block focus-visible:ring-0 focus-visible:border-0 border rounded px-2 py-1 mt-1 w-full" required/>
            </label>

            <label className="text-black w-full">
              Email:
              <input type="email" className="block focus-visible:ring-0 focus-visible:border-0 border rounded px-2 py-1 mt-1 w-full" value={formData.email} onChange={handleChange} required/>
            </label>

            <label className="text-black w-full">
              Message:
              <textarea className="block border rounded w-full px-2 py-1 mt-1" placeholder="votre message" value={formData.message} onChange={handleChange} required/>
              </label>
            <button type="submit" className="bg-black w-full text-white p-2 rounded">
              Envoyer
            </button>

            
          </form>
        </div>
        </div>
        )}
       
        
      
       
      </div>


        <div className="hidden max-sm:flex items-center relative">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF" alt="Menu" className="w-10 h-10" />
          </button>
            { isOpen && (
            <nav className="absolute w-screen justify-center top-24 right-0 flex flex-col gap-x-2 gap-y-5 my-2 items-center bg-white">
              <a href="#" className="text-black text-2xl font-bold text-center px-4 border-b py-3 w-full hover:bg-black hover:text-white hover:scale-105 transition-all">Home</a>
              <a href="#" className="text-black text-2xl font-bold text-center px-4 border-b py-3 w-full hover:bg-black hover:text-white hover:scale-105 transition-all">Project</a>
              <a href="#" className="text-black text-2xl font-bold text-center px-4 border-b py-3 w-full hover:bg-black hover:text-white hover:scale-105 transition-all">Contact</a>
            </nav>
          )}

        </div>

    </section>
  )
}

export default Header