import React from 'react';
import './App.css';
import { useState } from 'react';



function App() {
  const countrys = [
      {
        name: 'United States',
        states: [
          {
            name: "California",
            cities: ["Los Angeles, San Francisco, San Diego, Sacramento, Fresno"]
          },

          {
            name: "Texas",
            cities: ["Houston, Dallas, Austin, San Antonio, Fort Worth"]
          },

          {
            name: "New York",
            cities: ["New York City, Buffalo, Albany, Syracuse, Rochester"]
          }, 

          {
            name: "Florida",
            cities: ["Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale"]
          }, 

          {
            name: "Illinois",
            cities: ["Chicago, Springfield, Peoria, Rockford, Aurora"]
          },
        ],
      },

      {
        name: 'India',
        states: [
          {
            name: 'Maharashtra',
            cities: ["Mumbai, Pune, Nagpur, Thane, Nashik"]
          },
          
          {
            name: 'Uttar Pradesh',
            cities: ["Lucknow, Kanpur, Agra, Varanasi, Allahabad"]
          },

          {
            name: 'Tamil Nadu',
            cities: ["Chennai, Coimbatore, Madurai, Trichy, Salem"]
          }, 

          {
            name: "Karnataka",
            cities: ["Bangalore, Mysore, Hubli, Mangalore, Belgaum"]
          },

          {
            name: "Kerala",
            cities: ["Thiruvananthapuram, Kochi, Kozhikode, Thrissur, Kannur"]
          },
        ],
      },

      {
        name: "Canada",
        states: [
          {
            name: "Ontario",
            cities: ["Toronto, Ottawa, Hamilton, London, Mississauga"]
          },
          {
            name: "Quebec",
            cities: ["Montreal, Quebec City, Laval, Gatineau, Longueuil"]
          },
          {
            name: "British Columbia",
            cities: ["Vancouver, Victoria, Surrey, Burnaby, Kelowna"]
          },
          {
            name: "Alberta",
            cities: ["Calgary, Edmonton, Red Deer, Lethbridge, Fort McMurray"]
          },
          {
            name: "Manitoba",
            cities: ["Winnipeg, Brandon, Steinbach, Portage la Prairie, Thompson"]
          },
        ],
      },

      {
        name: "Australia",
        states: [
          {
            name: "New South Wales",
            cities: ["Sydney, Newcastle, Wollongong, Central Coast, Albury"]
          },
          {
            name: "Victoria",
            cities: ["Melbourne, Geelong, Ballarat, Bendigo, Shepparton"]
          },
          {
            name: "Queensland",
            cities: ["Brisbane, Gold Coast, Sunshine Coast, Townsville, Cairns"]
          },
          {
            name: "Western Australia",
            cities: ["Perth, Fremantle, Mandurah, Bunbury, Kalgoorlie"]
          },
          {
            name: "South Australia",
            cities: ["Adelaide, Mount Gambier, Gawler, Whyalla, Murray Bridge"]
          },
        ],
      },

      {
        name: "Brazil",
        states: [
          {
            name: "São Paulo",
            cities: ["São Paulo, Campinas, Guarulhos, São Bernardo do Campo, Santos"]
          },
          {
            name: "Rio de Janeiro",
            cities: ["Rio de Janeiro, São Gonçalo, Duque de Caxias, Nova Iguaçu, Niterói"]
          },
          {
            name: "Minas Gerais",
            cities: ["Belo Horizonte, Uberlândia, Contagem, Juiz de Fora, Betim"]
          },
          {
            name: "Bahia",
            cities: ["Salvador, Feira de Santana, Vitória da Conquista, Camaçari, Itabuna"]
          },
          {
            name: "Rio Grande do Sul",
            cities: ["Porto Alegre", "Caxias do Sul", "Canoas", "Pelotas", "Santa Maria"]
          },
        ],
      },
  ];

  const [country, setCountry] =   useState('--Country--');
  const [state, setState] = useState('--State--');
  const [city, setCity] = useState('--City--');

  const [states, setStates] = useState([]);
  console.log(states);
  const [cities, setCities] = useState([]);
  console.log(cities);
  

  const changeCountry = (event) => {
    setCountry(event.target.value);
    setStates(countrys.find(eachCountry => eachCountry.name === event.target.value).states)
  }

  const changeStates = (event) => {
    setState(event.target.value);
    setCities(states.find(eachState => eachState.name === event.target.value).cities);
  }

  const changeCities = (event) => {
    setCity(event.target.value);

  }

  return (
    <div className="main-container">
        <h1 className='logo-text'>facebook</h1>
        <div className="face-book-container">
          <p className="heading-text">Log in to Facebook</p>
          <div className="input-box-container">
            <input type="text" placeholder="Email address or phone number" className="input-box" />
            <input type="password" placeholder="Password" className="input-box" />
            
            <select className='input-box' value={country} onChange={changeCountry}>
              <option>--Country--</option>
              {countrys.map(eachCountry => (
                <option value={eachCountry.name}>{eachCountry.name}</option>
              ))}
            </select>

            <select className='input-box' value={state} onChange={changeStates} >
              <option>--State--</option>
              {states.map(eachState => (
                <option value={eachState.name}>{eachState.name}</option>
              ))}
            </select>
            <select className='input-box' value={city} onChange={changeCities} >
              <option>--City--</option>
              {cities.map(eachCity => (
                <option value={eachCity}>{eachCity}</option>
              ))}
            </select>
            <button className="login-button">Log in</button>
            <a href='#forgot' className="forgot-text">Forgotten account?</a>
          </div> 
          <div>
            <p className='fancy'><span className='span'>or</span></p>
            </div>
            <button className='bottom-btn'>Create new account</button>
        </div>
    </div>
  );
}

export default App;
