import {useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";


const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">Logo</div>
      <div className="links">
        <a href="#">Signup</a>
        <a href="#">Login</a>
      </div>
    </div>
  );
};

const Home = () => {
  const [products, setProducts] = useState({
    "Household Items":[
      {
        img:"",
        name:"Kapoor dani",
      },
      {
        img:"",
        name:"Kapoor dani",
      },
      {
        img:"",
        name:"Kapoor dani",
      }
    ],
    "Pooja Material":{
      "Lighting":[
        {
          img:"",
          name:"Kapoor dani",
        },
        {
          img:"",
          name:"Kapoor dani",
        },
        {
          img:"",
          name:"Kapoor dani",
        },
        {
          img:"",
          name:"Kapoor dani",
        },
        {
          img:"",
          name:"Kapoor dani",
        },
        {
          img:"",
          name:"Kapoor dani",
        },
        {
          img:"",
          name:"Kapoor dani",
        },
        {
          img:"",
          name:"Kapoor dani",
        },
      ],
      "Powders":[
        {
          img:"",
          name:"Kapoor dani",
        },
        {
          img:"",
          name:"Kapoor dani",
        },
        {
          img:"",
          name:"Kapoor dani",
        },
      ],
    }
  });
  const navigate = useNavigate();
  return (
    <>
      <Nav/>
      <div className="banner">
        <div>
          <h2>WebsiteName</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint consequuntur sequi nam rerum.</p>
        </div>
      </div>
    <div className="app">
      <div className="product-list">
        <div className="product-title">Household Items</div>
        <div className="product-list">
          {
            products["Household Items"].map((p)=>(
              <div className="product" onClick={()=>navigate("/product")}>
                <img src="https://rukminim1.flixcart.com/image/416/416/k1jlyfk0/incense-holder/h/w/b/kapoor-dani-stand-for-home-office-nohunt-original-imafknhg9d5u4zzw.jpeg?q=70"/>
                <div>{p.name}</div>
              </div>
            ))
          }
        </div>
      </div>
      <br/>
      <div className="product-list">
        <div className="product-title">Pooja Material</div>
        <div className="product-sub-title">Lighting</div>
        <div className="product-list">
          {
            products["Pooja Material"]["Lighting"].map((p)=>(
              <div className="product" onClick={()=>navigate("/product")}>
                <img src="https://rukminim1.flixcart.com/image/416/416/k1jlyfk0/incense-holder/h/w/b/kapoor-dani-stand-for-home-office-nohunt-original-imafknhg9d5u4zzw.jpeg?q=70"/>
                <div>{p.name}</div>
              </div>
            ))
          }
        </div>
        <div className="product-sub-title">Lighting</div>
        <div className="product-list">
          {
            products["Pooja Material"]["Lighting"].map((p)=>(
              <div className="product" onClick={()=>navigate("/product")}>
                <img src="https://rukminim1.flixcart.com/image/416/416/k1jlyfk0/incense-holder/h/w/b/kapoor-dani-stand-for-home-office-nohunt-original-imafknhg9d5u4zzw.jpeg?q=70"/>
                <div>{p.name}</div>
              </div>
            ))
          }
        </div>
        <div className="product-sub-title">Lighting</div>
        <div className="product-list">
          {
            products["Pooja Material"]["Lighting"].map((p)=>(
              <div className="product" onClick={()=>navigate("/product")}>
                <img src="https://rukminim1.flixcart.com/image/416/416/k1jlyfk0/incense-holder/h/w/b/kapoor-dani-stand-for-home-office-nohunt-original-imafknhg9d5u4zzw.jpeg?q=70"/>
                <div>{p.name}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
      </>
  );
};

const Product = () => {
  return (
    <>
      <Nav/>
    <div className="product-page">
      <div className="product-image">
        <img src="https://rukminim1.flixcart.com/image/416/416/k1jlyfk0/incense-holder/h/w/b/kapoor-dani-stand-for-home-office-nohunt-original-imafknhg9d5u4zzw.jpeg?q=70"/>
      </div>
      <div className="product-details">
        <h2>Nohunt Kapoor Dani Stand</h2>
        <h4>Rs. 400</h4>
        <p>This is an electric dhoop dani or incense burner or bakhoor burner. It is used for burning incense which is to the gods and goddesses or for aroma. Incense burners are a beautifully ornate way of filling your rooms full of wonderful fragrances. Electric burner saves your time in burning charcoal and also produces less smoke. All you need to do is insert the plug into the socket and switch on the button for few minutes and put some bakhoor or dhoop or incense on the top plate and enjoy. Used for burning dhoop or incense electrically.</p>
        <p> Fill your home with full of wonderful fragrances. Working This lamp is made up of steel and there is an electric heater/burner in the bottom portion. Just plug this stand in, and the steel plate gets heated up, resulting in the camphor diffusing in the air. You can use regular camphor in this stand.</p>
        <div class="btn">
          <button>Buy now</button>
        </div>
      </div>
    </div>
      </>
  );
};



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;