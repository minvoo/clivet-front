import { useEffect, useState } from "react";
import { NavLink , useLocation, useNavigate } from "react-router-dom";
import PetService from "../../services/pet.service";
import "./pet-page.css";
const UpdatePetPage = () => {
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubbmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const search = useLocation().pathname;
  const splited = search.split("/");


  // /owners/:ownerId/pets/:petId/update
  const ownerId = splited[2];
  const petId = splited[4];

  useEffect(() => {
    PetService.getOnePetByIdAndOwnerId(ownerId, petId).then((response) =>
      setPet(response.data)
    );
  }, []);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPet((prevState) => {
      return {
        // e.g: prevState ({user:x, pass: x}) + newKeyValue ({user: xy}0 => ({user:xy, pass:x})
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleNewPet = (e) => {
    e.preventDefault();

    setSubbmitted(true);
    // if form is invalid -> return
    if (!pet.name || !pet.age || !pet.weight) {
      return;
    }
    setLoading(true);
    //update 
    PetService.updatePet(ownerId, petId, pet).then((response) => {
      navigate(`/owners/${ownerId}/pets/${petId}`);
    })
  };

  return pet ? (
    <>
      <div className="background-pet-admin">
        <div className="p-3 custom-card-pet-admin">
          <p className="card-title">Update Pet</p>

          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <form
            onSubmit={(e) => handleNewPet(e)}
            noValidate
            className={submitted ? "was-validated" : ""}
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control form-input-custom form-input-custom"
                placeholder="Name"
                value={pet.name}
                disabled
              />
              <div className="invalid-feedback">Name is required</div>
            </div>

            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="age"
                name="age"
                className="form-control form-input-custom"
                placeholder="Age"
                value={pet.age}
                onChange={(e) => handleChange(e)}
                required
              />
              <div className="invalid-feedback">
                Age is required and must be whole number
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="weight"
                name="weight"
                className="form-control form-input-custom"
                placeholder="Weight"
                value={pet.weight}
                onChange={(e) => handleChange(e)}
                required
              />
              <div className="invalid-feedback">
                Weight is required and must be whole number
              </div>
            </div>

            <button
              className="btn btn-dark w-100 mt-3"
              disabled={loading}
              type="submit"
            >
              Update Pet
            </button>
          </form>
          <div>
            <center>
              <NavLink
                onClick={() => navigate(-1)}
                className="btn btn-info w-100 mt-3" >
                Go Back
              </NavLink>
            </center>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export { UpdatePetPage };
