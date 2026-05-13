const authContent = {
  booking: {
    eyebrow: "Reserve Your Table",
    title: "Book your dining experience",
    description:
      "Reserve a table, choose your preferred time, and let us prepare a warm dining experience for you.",
    primaryLabel: "Confirm Booking",
    secondaryText: "Already have a reservation account?",
    secondaryAction: "Login",
    fields: [
      { label: "Full Name", type: "text", placeholder: "Enter your full name" },
      {
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
      },
      { label: "Guests", type: "number", placeholder: "How many guests?" },
      { label: "Date", type: "date", placeholder: "" },
    ],
  },
  login: {
    eyebrow: "Welcome Back",
    title: "Login to manage your bookings",
    description:
      "Check your reservations, update your details, and keep track of your favorite menu selections.",
    primaryLabel: "Login",
    secondaryText: "Need to book a table first?",
    secondaryAction: "Book Table",
    fields: [
      { label: "Email", type: "email", placeholder: "Enter your email" },
      {
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
      },
    ],
  },
};

export default authContent;
