const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center max-w-3xl mx-auto mb-16 sm:px-0">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form 
        action="https://formspree.io/f/xjvqjaay" 
        method="POST" 
        className="flex flex-col space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border p-2 rounded text-black"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border p-2 rounded text-black"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}  // Corrected this line
            className="border p-2 rounded text-black"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
