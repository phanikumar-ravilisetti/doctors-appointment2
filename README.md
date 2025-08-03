# Doctor Appointment Booking App

A responsive web application built for scheduling appointments with doctors. Users can view a list of available doctors, read their details, and book an appointment based on availability.

---

##  Tools / Libraries Used

- **React.js**: UI library for building component-based frontend.
- **React Router DOM**: Used for navigation between pages (Landing and Doctor Profile).
- **React Context API**: For global state management (e.g., passing selected doctor data between components).
- **Styled Components**: For writing modular, scoped CSS directly in JavaScript.
- **JavaScript (ES6+)**: Core scripting language used across the app.
- **HTML5 & CSS3**: Structure and styling of basic components.
- **Cloudinary**: Hosting doctor profile images.
- **Mock JSON (public folder)**: Simulated backend using a JSON file for doctor data.

---

##  Improvements (With More Time)

- **Backend Integration**: Connect to a real backend (Node.js + MongoDB/PostgreSQL) for persisting appointments and user data.
- **Form Validation**: Add stricter validation for date/time inputs and availability.
- **Authentication**: Add patient login and registration flows.
- **Search & Filter**: Allow users to filter doctors by specialization, availability, or location.
- **Pagination or Lazy Loading**: Improve performance for large doctor lists.
- **Toast Notifications**: Show feedback messages for appointment success/failure.
- **Admin Panel**: For managing doctor availability and patient appointments.

---

##  Challenges Faced & Solutions

| Challenge | Solution |
|----------|----------|
| Sharing doctor data across routes | Used **React Context API** to store selected doctor globally before navigating to profile page |
| Handling navigation without page reload | Integrated **React Router DOM** to allow seamless route transitions |
| Displaying dynamic doctor data | Fetched and rendered mock data using `useEffect()` from a static JSON file |
| Button appearing only for available doctors | Used conditional rendering (`available ? ... : ...`) in the component |
| Styling reusable components | Adopted **Styled Components** for cleaner, scoped styles across cards and buttons |