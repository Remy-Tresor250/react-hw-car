import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    industry: "",
    model: "",
    year: "",
    mileage: "",
    condition: "",
    features: [],
    transmission: "",
    priceRange: { min: "", max: "" },
    contact: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      industry: "",
      model: "",
      year: "",
      mileage: "",
      condition: "",
      features: [],
      transmission: "",
      priceRange: { min: "", max: "" },
      contact: "",
    });
    console.log(formData);
  };

  const handleChange = (e: any) => {
    const { name, type, checked, value } = e.target;

    setFormData((oldData) => {
      return {
        ...oldData,
        [name]: type === "checked" ? checked : value,
      };
    });
  };

  const handleFeatures = (e: any) => {
    const {value } = e.target;

    setFormData((oldData: any) => {
      return {
        ...oldData,
        features: [...oldData.features, value],
      };
    });
  };

  const handlePriceRange = (e: any) => {
    const { name, value } = e.target;

    setFormData((oldData: any) => {
      return {
        ...oldData,
        priceRange: {...oldData.priceRange, [name]: value},
      };
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Car details</h1>
        <div className="form-container">
          <input
            type="text"
            placeholder="Car Make"
            className="car-make"
            id="car-make"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Car Model"
            className="car-model"
            id="car-model"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Year"
            className="year"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Mileage"
            className="mileage"
            id="mileage"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
          />
          <div className="transmission">
            <h2>Transmission</h2>
            <div>
              <input
                type="radio"
                name="transmission"
                value="Automatic"
                onChange={handleChange}
              />
              Automatic
              <input
                type="radio"
                name="transmission"
                value="Manual"
                onChange={handleChange}
              />
              Manual
            </div>
          </div>
          <div className="condition">
            <h2>Condition</h2>
            <div>
              <input
                type="radio"
                id="excellent"
                name="condition"
                value="Excellent"
                onChange={handleChange}
              />
              Excellent
              <input
                type="radio"
                id="good"
                name="condition"
                value="Good"
                onChange={handleChange}
              />
              Good
              <input
                type="radio"
                id="fair"
                name="condition"
                value="Fair"
                onChange={handleChange}
              />
              Fair
              <input
                type="radio"
                id="poor"
                name="condition"
                value="Poor"
                onChange={handleChange}
              />
              Poor
            </div>
          </div>
          <div className="features">
            <h2>Features</h2>
            <div>
              <input
                type="checkbox"
                value="Air Conditioning"
                onChange={handleFeatures}
              />
              Air Conditioning
              <input
                type="checkbox"
                value="Power Steering"
                onChange={handleFeatures}
              />
              Power Steering
              <input
                type="checkbox"
                value="Power Windows"
                onChange={handleFeatures}
              />
              Power Windows
              <input type="checkbox" value="ABS" onChange={handleFeatures} />
              ABS
              <input
                type="checkbox"
                value="Navigation System"
                onChange={handleFeatures}
              />
              Navigation System
            </div>
          </div>
          <div className="price-range">
            <h2>Price range</h2>
            <div>
              <input
                type="text"
                name="min"
                value={formData.priceRange.min}
                onChange={handlePriceRange}
                placeholder="Minimum"
              />
              <input
                type="text"
                name="max"
                value={formData.priceRange.max}
                onChange={handlePriceRange}
                placeholder="Maximum"
              />
            </div>
          </div>
          <input
            type="text"
            name="contact"
            placeholder="Contacts"
            value={formData.contact}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;
