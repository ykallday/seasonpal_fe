import { useState } from "react";
import { RegisterUser } from "../services/Auth";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues)
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      location: formValues.location
    });

    setFormValues({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      location: ""
    });
    navigate("/");
  };
  return (
    <div className="text-center bg-lightblue h-[100vh] focus:shadow-xl">
      <h1 className="py-5 font-light tracking-wider text-2xl"> REGISTER </h1>
      <div className="text-center bg-white w-[30vw] m-auto my-3 rounded-xl py-3 border-2">
        <h1 className="register-welcome">
          Join Seasonpal today!
        </h1>
        <form className="register" onSubmit={handleSubmit}>
          <div className="py-3">
            <label className="p-3 text-s" htmlFor="username">USERNAME</label>
            <br></br>
            <input
              className="rounded-2xl p-2 px-4 text-xs border-2"
              onChange={handleChange}
              name="username"
              type="text"
              value={formValues.username}
              required
            />
          </div>
          <div>
            <label className="p-3 text-s" htmlFor="email">EMAIL</label>
            <br></br>
            <input
              className="rounded-2xl  p-2 px-4 text-xs border-2"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>

          <div>
            <label className="p-3 text-s" htmlFor="password">PASSWORD</label>
            <br></br>
            <input
              className="rounded-2xl p-2 px-4 text-xs border-2"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div>
            <label className="p-3 text-s" htmlFor="confirmPassword">CONFIRM PASSWORD</label>
            <br></br>
            <input
              className="rounded-2xl  p-2 px-4 text-xs border-2"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
            <div>
              <label className="p-3 text-s" htmlFor="location">YOUR LOCATION (optional)</label>
              <br></br>
              <select className="rounded-full w-auto border-2 m-2 text-center"
                onChange={handleChange}
                name="location"
                type="text"
                value={formValues.location}
                required
              >
                <option value="">----</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="Northern California">California, Northern</option>
                <option value="Southern California">California, Southern</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhoda Island">Rhoda Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington DC">Washington</option>
                <option value="Washington">Washington DC</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisoncsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>


              </select>
            </div>
          </div>
          <button
            className="my-5 px-3 py-1 text-s rounded-2xl border-solid hover:scale-105 border-2 border-mygreen text-mygreen"
            disabled={
              !formValues.email ||
              !formValues.username ||
              formValues.password.length < 8 ||
              (!formValues.password ||
                formValues.confirmPassword != formValues.password)
            }
          >
            Register
          </button>
        </form>
        <div>
          <p>Already have an account?</p>{" "}
          <Link to="/">
            <button className="my-5 px-3 py-1 text-s rounded-2xl border-solid hover:scale-105 border-2 border-mygreen text-mygreen">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
