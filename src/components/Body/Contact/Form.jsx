import { useState } from "react";
import SendButton from "./SendBtn";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("https://xyz.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
        } else {
          console.error("Failed to submit form:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="max-w-[28rem]  w-full p-6 space-y-4     mx-auto my-10 rounded-xl bg-orange-300 "
    >
      <div className="name">
        <p className="font-bold text-sm px-3">Full Name</p>
        <div className="relative  mt-1">
          <input
            className="rounded-xl w-full px-3 py-2 bg-orange-200 text-black placeholder:text-gray-500 outline-none"
            placeholder="e.g Rohit Dahal"
            type="text"
            value={formData.name}
            name='name'
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="name">
        <p className="font-bold text-sm px-3">Email</p>
        <div className="relative  mt-1">
          <input
            className="rounded-xl w-full px-3 py-2 bg-orange-200 text-black placeholder:text-gray-500 outline-none"
            placeholder="e.g rohitdahal012@gmail.com"
            type="email"
            value={formData.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="Phone">
        <p className="font-bold text-sm px-3">Phone</p>
        <div className="relative  mt-1">
          <input
            className="rounded-xl w-full px-3 py-2 bg-orange-200 text-black placeholder:text-gray-500 outline-none"
            placeholder="Phone Number"
            type="number"
            value={formData.phone}
            name="phone"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="Message">
        <p className="font-bold text-sm px-3">Message</p>
        <div className="relative  mt-1">
          <textarea
            className="rounded-xl w-full min-h-40 px-3 py-2 bg-orange-200 text-black placeholder:text-gray-500 outline-none"
            placeholder="Write message"
            value={formData.message}
            name="message"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
      </div>
      <SendButton />
    </form>
  );
}

export default Form;
