import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Handshake, Trophy, Users } from "lucide-react";
import toast from "react-hot-toast";

const Register = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
const [age, setAge] = useState("");
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [passport, setPassport] = useState<string | null>(null);

const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  dob: "",
  age: "",
  gender: "",
  nationality: "",
  state: "",
  phone: "",
  address: "",

  preferredFoot: "",
  preferredPosition: "",
  height: "",
  weight: "",
  previousClub: "",
  experience: "",

  fatherName: "",
  fatherPhone: "",
  motherName: "",
  motherPhone: "",
  parentEmail: "",
  occupation: "",
  guardianAddress: "",

  bloodGroup: "",
  genotype: "",
  medicalCondition: "",
  medicalExplanation: "",

  passport: null,
});
const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


const calculateAge = (dob: string) => {

  setDateOfBirth(dob);

  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();

  const monthDifference =
    today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 &&
      today.getDate() < birthDate.getDate())
  ) {
    years--;
  }

setAge(years.toString());

setFormData(prev => ({
  ...prev,
  dob: dob,
  age: years.toString(),
}));

};
const validateForm = () => {
  const newErrors: Record<string, string> = {};

  if (!formData.firstName.trim()) {
    newErrors.firstName = "First Name is required.";
  }

  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last Name is required.";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone Number is required.";
  }

  if (!formData.fatherPhone.trim()) {
    newErrors.fatherPhone = "Father's Phone Number is required.";
  }

  if (!formData.preferredPosition.trim()) {
    newErrors.preferredPosition = "Preferred Position is required.";
  }

  if (!passport) {
    newErrors.passport = "Passport Photograph is required.";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxdPOKHkorh-VMB1dGurg5QgwkWXjc82xh5bBiUpvPPTuhqiqrRr0aV9y95JVm2cbdL/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );

    const result = await response.text();

    toast.success("Application to radje academy is successful! will reach out to you via email ");

    console.log(result);

  } catch (error) {
    console.error(error);

    toast.error("Something went wrong. Please try again.");
  }
};
const handleReset = () => {
  setFormData({
    firstName: "",
    lastName: "",
    dob: "",
    age: "",
    gender: "",
    nationality: "",
    state: "",
    phone: "",
    address: "",

    preferredFoot: "",
    preferredPosition: "",
    height: "",
    weight: "",
    previousClub: "",
    experience: "",

    fatherName: "",
    fatherPhone: "",
    motherName: "",
    motherPhone: "",
    parentEmail: "",
    occupation: "",
    guardianAddress: "",

    bloodGroup: "",
    genotype: "",
    medicalCondition: "",
    medicalExplanation: "",

    passport: null,
  });

  setPassport(null);
  setDateOfBirth("");
  setAge("");
  setErrors({});
};
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-pillars-green via-pillars-green/95 to-pillars-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="pill-badge bg-pillars-yellow text-pillars-dark inline-block mb-6">Player Registration</div>
          <h1 className="mb-6">Join Radje Football Academy</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Begin your football journey with one of Nigeria's fastest-growing football academies. Complete the registration form below and take the first step toward becoming a Radje player.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
       <div className="container mx-auto px-4 md:px-6">

 <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
  <form onSubmit={handleSubmit}>

  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-pillars-green">
      Player Registration Form
    </h2>

    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
      Complete the registration form below accurately. Fields marked with
      <span className="text-red-500 font-bold"> *</span> are required.
    </p>
  </div>

   <div className="flex items-center gap-4 border-b-2 border-pillars-yellow pb-5 mb-10">

  <div className="w-12 h-12 rounded-full bg-pillars-green text-white flex items-center justify-center font-bold text-xl">
    1
  </div>

  <div>
    <h3 className="text-2xl font-bold text-pillars-dark">
      Personal Information
    </h3>

    <p className="text-gray-500 text-sm">
      Basic details about the player.
    </p>
  </div>

</div>

   <div className="grid lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2">


      <div>
        <label className="block font-semibold mb-2">
         First Name <span className="text-red-500">*</span>
        </label>

        <input
  type="text"
  name="firstName"
  value={formData.firstName}
  onChange={handleChange}
  placeholder="Enter First Name"
  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
/>
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Last Name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
        />
      </div>

     <input
type="date"
name="dob"
value={formData.dob}
onChange={(e) => calculateAge(e.target.value)}
className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
/>

      <div>
        <label className="block font-semibold mb-2">
          Age <span className="text-red-500">*</span>
        </label>

       <input
type="text"
value={formData.age}
readOnly
className="w-full border rounded-lg p-3 bg-gray-100 cursor-not-allowed"
/>
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Gender <span className="text-red-500">*</span>
        </label>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
      
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Nationality <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
      
          placeholder="Nationality"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          State
        </label>

        <input
          type="text"
          placeholder="State of Origin"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>

        <input
          type="tel"
          name="phone"
onChange={handleChange}
          placeholder="Phone Number"
          value={formData.phone}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
        />
      </div>

    </div>

<div>

  <label className="block font-semibold mb-3">
    Passport Photograph
    <span className="text-red-500">*</span>
  </label>

  <div className="border-2 border-dashed border-gray-300 rounded-xl h-80 flex flex-col justify-center items-center hover:border-pillars-green transition">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-14 text-gray-400 mb-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12V3m0 0l-4 4m4-4l4 4"
      />
    </svg>

    <p className="font-semibold">
      Upload Passport Photo
    </p>

    <p className="text-gray-400 text-sm mt-2">
      JPG or PNG (Maximum 5MB)
    </p>

   <input
  type="file"
  accept="image/*"
  className="mt-6"
  onChange={(e) => {
    if (e.target.files?.[0]) {
      setPassport(URL.createObjectURL(e.target.files[0]));
    }
    {passport && (

<div className="mt-6">

<img
src={passport}
alt="Passport Preview"
className="w-48 h-56 object-cover rounded-xl border-4 border-pillars-yellow mx-auto shadow-lg"
/>

<p className="text-center text-sm text-gray-500 mt-3">
Passport Preview
</p>

</div>

)}
  }}
/>

  </div>

</div>

</div>

    <div className="mt-6">
      <label className="block font-semibold mb-2">
        Residential Address
      </label>

      <textarea
      name="address"
      value={formData.address}
      onChange={handleChange}
        rows={4}
        placeholder="Enter Full Address"
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
      ></textarea>
    </div>
{/* Football Information */}

<div className="mt-14">

<div className="flex items-center gap-4 border-b-2 border-pillars-yellow pb-5 mb-8">

<div className="w-12 h-12 rounded-full bg-pillars-green text-white flex items-center justify-center font-bold text-xl">
2
</div>

<div>
<h3 className="text-2xl font-bold text-pillars-dark">
Football Information
</h3>

<p className="text-gray-500 text-sm">
Tell us about your football experience.
</p>

</div>

</div>

<div className="grid md:grid-cols-2 gap-6">

<div>
<label className="block font-semibold mb-2">
Preferred Foot
<span className="text-red-500">*</span>
</label>

<select 
  name="preferredFoot"
  value={formData.preferredFoot}
  onChange={handleChange}
  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none">
  <option value="">Select Foot</option>
  <option value="Right">Right</option>
  <option value="Left">Left</option>
  <option value="Both">Both</option>
</select>
</div>

<div>
<label className="block font-semibold mb-2">
Preferred Position
<span className="text-red-500">*</span>
</label>

<select 
  name="preferredPosition"
  value={formData.preferredPosition}
  onChange={handleChange}
  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none">

<option value="">Select Position</option>

<option value="Goalkeeper">Goalkeeper</option>
<option value="Right Back">Right Back</option>
<option value="Left Back">Left Back</option>

<option value="Center Back">Center Back</option>

<option value="Defensive Midfielder">Defensive Midfielder</option>

<option value="Central Midfielder">Central Midfielder</option>

<option value="Attacking Midfielder">Attacking Midfielder</option>

<option value="Right Winger">Right Winger</option>

<option value="Left Winger">Left Winger</option>

<option value="Striker">Striker</option>

</select>

</div>

<div>

<label className="block font-semibold mb-2">
Height (cm)
</label>

<input
type="number"
name="height"
placeholder="Example: 175"
value={formData.height}
onChange={handleChange}
className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
/>

</div>

<div>

<label className="block font-semibold mb-2">
Weight (kg)
</label>

<input
type="number"
name="weight"
placeholder="Example: 68"
value={formData.weight}
onChange={handleChange}
className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
/>

</div>

</div>

<div className="mt-6">

<label className="block font-semibold mb-2">
Previous Football Club
</label>

<input
type="text"
name="previousClub"
placeholder="Club Name"
value={formData.previousClub}
onChange={handleChange}
className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
/>

</div>

<div className="mt-6">

<label className="block font-semibold mb-2">
Football Experience
</label>

<textarea
name="experience"
value={formData.experience}
onChange={handleChange}
rows={4}
placeholder="Tell us about your football experience..."
className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
/>

</div>
{/* Parent / Guardian Information */}

<div className="mt-14">

  <div className="flex items-center gap-4 border-b-2 border-pillars-yellow pb-5 mb-8">

    <div className="w-12 h-12 rounded-full bg-pillars-green text-white flex items-center justify-center font-bold text-xl">
      3
    </div>

    <div>
      <h3 className="text-2xl font-bold text-pillars-dark">
        Parent / Guardian Information
      </h3>

      <p className="text-gray-500 text-sm">
        Parent or legal guardian details.
      </p>
    </div>

  </div>

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <label className="block font-semibold mb-2">
        Father's Full Name
        <span className="text-red-500">*</span>
      </label>

      <input
        type="text"
        name="fatherName"
        placeholder="Father's Full Name"
        value={formData.fatherName}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
      />
    </div>

    <div>
      <label className="block font-semibold mb-2">
        Father's Phone Number
        <span className="text-red-500">*</span>
      </label>

      <input
        type="tel"
        name="fatherPhone"
        placeholder="Phone Number"
        value={formData.fatherPhone}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
      />
    </div>

    <div>
      <label className="block font-semibold mb-2">
        Mother's Full Name
        <span className="text-red-500">*</span>
      </label>

      <input
        type="text"
        name="motherName"
        placeholder="Mother's Full Name"
        value={formData.motherName}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
      />
    </div>

    <div>
      <label className="block font-semibold mb-2">
        Mother's Phone Number
        <span className="text-red-500">*</span>
      </label>

      <input
        type="tel"
        name="motherPhone"
        placeholder="Phone Number"
        value={formData.motherPhone}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
      />
    </div>

    <div>
      <label className="block font-semibold mb-2">
        Parent Email
      </label>

      <input
        type="email"
        name="parentEmail"
        placeholder="example@email.com"
        value={formData.parentEmail}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
      />
    </div>

    <div>
      <label className="block font-semibold mb-2">
        Occupation
      </label>

      <input
        type="text"
        name="occupation"
        placeholder="Occupation"
        value={formData.occupation}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
      />
    </div>

  </div>

  <div className="mt-6">

    <label className="block font-semibold mb-2">
      Parent / Guardian Address
    </label>

    <textarea
     name="guardianAddress"
  value={formData.guardianAddress}
  onChange={handleChange}
      rows={4}
      placeholder="Enter Address"
      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
    ></textarea>

  </div>
  {/* Medical Information */}

<div className="mt-14">

  <div className="flex items-center gap-4 border-b-2 border-pillars-yellow pb-5 mb-8">

    <div className="w-12 h-12 rounded-full bg-pillars-green text-white flex items-center justify-center font-bold text-xl">
      4
    </div>

    <div>
      <h3 className="text-2xl font-bold text-pillars-dark">
        Medical Information
      </h3>

      <p className="text-gray-500 text-sm">
        Help us understand the player's health and fitness.
      </p>
    </div>

  </div>

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <label className="block font-semibold mb-2">
        Blood Group
      </label>

      <select
        name="bloodGroup"
    value={formData.bloodGroup}
    onChange={handleChange}
      
      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none">
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    </div>

    <div>
      <label className="block font-semibold mb-2">
        Genotype
      </label>

      <select
        name="genotype"
        value={formData.genotype}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
      >
        <option value="">Select Genotype</option>
        <option value="AA">AA</option>
        <option value="AS">AS</option>
        <option value="AC">AC</option>
        <option value="SS">SS</option>
        <option value="SC">SC</option>
      </select>
    </div>

  </div>

  <div className="mt-6">

    <label className="block font-semibold mb-2">
      Do you have any medical condition?
    </label>

    <select
      name="medicalCondition"
      value={formData.medicalCondition}
      onChange={handleChange}
      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
    >
      <option value="">Select</option>
      <option value="No">No</option>
      <option value="Yes">Yes</option>
    </select>

  </div>

  <div className="mt-6">

    <label className="block font-semibold mb-2">
      If Yes, Please Explain
    </label>

    <textarea
     name="medicalExplanation"
  value={formData.medicalExplanation}
  onChange={handleChange}
      rows={4}
      placeholder="Describe any medical condition..."
      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pillars-green outline-none"
    ></textarea>

  </div>
{/* Declaration */}

<div className="mt-14">

  <div className="flex items-center gap-4 border-b-2 border-pillars-yellow pb-5 mb-8">

    <div className="w-12 h-12 rounded-full bg-pillars-green text-white flex items-center justify-center font-bold text-xl">
      5
    </div>

    <div>
      <h3 className="text-2xl font-bold text-pillars-dark">
        Declaration & Agreement
      </h3>

      <p className="text-gray-500 text-sm">
        Please read carefully before submitting.
      </p>
    </div>

  </div>

  <div className="bg-gray-50 rounded-xl p-6 border">

    <label className="flex items-start gap-3 cursor-pointer">

      <input
        type="checkbox"
        className="mt-1 w-5 h-5 accent-green-700"
      />

      <span className="text-gray-700 leading-7">

        I hereby certify that all the information provided in this
        registration form is true and correct.

        I understand that any false information may lead to cancellation
        of this application.

        I also give permission to Radje Football Academy to use the player's
        photographs, videos and performance records for academy activities,
        competitions, scouting purposes and promotional materials.

      </span>

    </label>

  </div>
<div className="grid md:grid-cols-2 gap-8 mt-10">

  <div>

    <label className="block font-semibold mb-2">
      Parent / Guardian Signature
    </label>

    <input
      type="text"
  
      placeholder="Type your name as signature"
      className="w-full border rounded-lg p-3"
    />

  </div>

  <div>

    <label className="block font-semibold mb-2">
      Date
    </label>

    <input
      type="date"
      
      className="w-full border rounded-lg p-3"
    />

  </div>
  
<div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
  
  <button
    type="submit"
    className="bg-pillars-green hover:bg-green-800 text-white px-12 py-4 rounded-xl text-lg font-bold transition duration-300 shadow-lg hover:shadow-xl"
  >
    Apply
  </button>
  <button
  type="button"
  onClick={handleReset}
  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-10 py-4 rounded-xl text-lg font-semibold transition duration-300"
>
  Reset Form
</button>

</div> 
</div>
</div>
</div>

</div>
</div>
</form>
  </div>

</div>

      </section>

      <Footer />
    </div>
  );
};

export default Register;
