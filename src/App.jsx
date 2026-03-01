import './App.css';
import Card from './Card';

const App = () => {

  const restaurants = [
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/27/0d/4e/caption.jpg?w=1100&h=1100&s=1",
      name: "Crazy About You",
      cuisine: "American",
      website: "https://passionrestaurantgroup.com/restaurants/crazy-about-you/"
    },
    {
      image: "https://assets3.thrillist.com/v1/image/1136065/1200x630",
      name: "Dolores But You Can Call Me Lolita",
      cuisine: "American",
      website: "https://passionrestaurantgroup.com/restaurants/dolores-lolita/"
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipPzXv_pAL0fk-YwyysIeNyHDbjyFkD2RIGppPcP=s680-w680-h510-rw",
      name: "Casa Neos",
      cuisine: "Mediterranean",
      website: "https://www.casa-neos.com/"
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipMdQNAx9cB1I43jcKac3Ogm2jSJl8wrFSasLFIp=s680-w680-h510-rw",
      name: "Giselle Miami",
      cuisine: "Fusion",
      website: "https://gisellemiami.com/"
    },
    {
      image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/El-Patio-23-May-2024-14-_04110E27-733C-41F1-91EF7CCEB7114958_d30fb85e-9e88-4826-9aac11d308d76f3a.jpg",
      name: "El Patio Restaurant",
      cuisine: "Mediterranean",
      website: "https://elpatio-barhabana.com/"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/5f/d9/f0/new-mayami-inside.jpg?w=900&h=-1&s=1",
      name: "Mayami Wynwood",
      cuisine: "Mexican Fusion",
      website: "https://www.mayamiwynwood.com/"
    },
    {
      image: "https://rosaskyrooftop.com/wp-content/uploads/2022/08/rsz_rosa1-scaled.jpg",
      name: "Rosa Sky",
      cuisine: "Cocktail Bar",
      website: "https://rosaskyrooftop.com/"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/60/b6/31/rosanegra-miami.jpg?w=900&h=500&s=1",
      name: "RosaNegra Miami",
      cuisine: "Latin American",
      website: "https://www.rosanegrarestaurant.us/restaurants-miami"
    },
    {
      image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/SexyFIshMiami-BarSeating_881AF532-5056-A36A-0B5BD76DC0214C85-881af2c75056a36_881afd78-5056-a36a-0b31dcfec3da8510.jpg",
      name: "Sexy Fish Miami",
      cuisine: "Japanese",
      website: "https://sexyfishmiami.com/"
    },
    {
      image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/Rusty-Pelican_dusk_1440x900_83A93DE7-5056-A36A-0BB3AFD5C64730E3-83a93abf5056a36_83a9459d-5056-a36a-0bb5e3e14f2259b0.jpg",
      name: "Rusty Pelican",
      cuisine: "Seafood",
      website: "https://www.therustypelican.com/"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/75/a4/4e/restaurant-entrance.jpg?w=900&h=500&s=1",
      name: "Marabu Restaurant",
      cuisine: "Cuban",
      website: "https://maraburestaurant.com/"
    },
    {
      image: "https://images.squarespace-cdn.com/content/v1/6388fb38635d912fccd96baa/679e6322-d661-43df-b93d-934529c9784e/DSC_9574.jpg",
      name: "CVI.CHE 105",
      cuisine: "Peruvian",
      website: "https://ceviche105.squarespace.com/"
    }
  ]

  return (
    <div className = "App">
      <h1>Best Restaurants in Miami</h1>
      <img className = "mainImg" src= "https://images.trvl-media.com/place/800070/02ee0441-a9dd-4b32-bb53-9644902187e1.jpg" alt = "Miami"/>

      <div className = "cards-container">
        {restaurants.map((restaurant) => (
          <Card
            image = {restaurant.image}
            name = {restaurant.name}
            cuisine = {restaurant.cuisine}
            website = {restaurant.website}
          />
        ))}
      </div>

        <footer>
          <p>&copy; 2026 Miami Restaurants Community Board. Created by Steph!</p>
        </footer>
    </div>
  )
}

export default App;