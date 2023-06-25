import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    img:'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min-750x750.jpg',
    description: 'Finest fish and veggies',
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Burger',
    img:'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
    description: 'Juicy beef patty with cheese and toppings',
    price: 12.99
  },
  {
    id: 'm3',
    name: 'Pizza',
    img:'https://imgmedia.lbb.in/media/2019/07/5d242ad8e93a896e5542da0d_1562651352251.jpg',
    description: 'Delicious crust with various toppings',
    price: 15.99
  },
  {
    id: 'm4',
    name: 'Salad',
    img:'https://www.licious.in/blog/wp-content/uploads/2020/12/3-Step-Chicken-Salad-750x750.jpg',
    description: 'Fresh greens with dressing and toppings',
    price: 8.99
  },
  {
    id: 'm5',
    name: 'Pasta',
    img:'https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Tomato-Pasta-Thumbnail.jpg',
    description: 'Al dente pasta with savory sauce',
    price: 14.99
  },
  {
    id: 'm6',
    name: 'Steak',
    img:'https://www.lemonblossoms.com/wp-content/uploads/2018/05/Pan_Seared_Steak_Recipe_S3-500x500.jpg',
    description: 'Tender and juicy steak cooked to perfection',
    price: 29.99
  },
  {
    id: 'm7',
    name: 'Chicken Curry',
    img:'https://www.whiskaffair.com/wp-content/uploads/2021/10/Andhra-Chicken-Curry-2-3.jpg',
    description: 'Spicy and flavorful curry with chicken',
    price: 16.99
  },
  {
    id: 'm8',
    name: 'Fish and Chips',
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/800px-Fish_and_chips_blackpool.jpg',
    description: 'Crispy fish fillets with golden fries',
    price: 18.99
  },
  {
    id: 'm9',
    name: 'Tacos',
    img:'https://images-gmi-pmc.edge-generalmills.com/e59f255c-7498-4b84-9c9d-e578bf5d88fc.jpg',
    description: 'Soft tortillas with fillings and toppings',
    price: 10.99
  },
  {
    id: 'm10',
    name: 'Sushi Combo',
    img:'https://wonderbites.app/wp-content/uploads/2021/12/Sushi-Combo-40-Cope.webp',
    description: 'Assortment of sushi rolls and sashimi',
    price: 24.99
  },
  {
    id: 'm11',
    name: 'Chicken Caesar Salad',
    img:'https://cupfulofkale.com/wp-content/uploads/2022/05/Vegan-Chicken-Caesar-Salad-720x720.jpg',
    description: 'Grilled chicken on a bed of fresh greens with Caesar dressing',
    price: 13.99
  },
  {
    id: 'm12',
    name: 'Vegetable Stir Fry',
    img:'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2021/04/vegetable-stir-fry-resize-16.jpg',
    description: 'Assorted vegetables stir-fried in a flavorful sauce',
    price: 11.99
  },
  {
    id: 'm13',
    name: 'Lasagna',
    img:'https://www.tastesoflizzyt.com/wp-content/uploads/2022/12/homemade-lasagna-recipe_-8.jpg',
    description: 'Layers of pasta, meat, and cheese baked to perfection',
    price: 17.99
  },
  {
    id: 'm14',
    name: 'Sashimi Platter',
    img:'https://cdn.shopify.com/s/files/1/0261/6757/4575/products/KuhlbarraxFassler-9_1200x1200.jpg?v=1641799851',
    description: 'Variety of fresh sashimi slices',
    price: 26.99
  },
  {
    id: 'm15',
    name: 'BBQ Ribs',
    img:'https://www.charbroil.com/media/ctm//a/p/apple_butter_bbq_ribs.jpg.jpeg',
    description: 'Tender and smoky BBQ ribs',
    price: 21.99
  },
  {
    id: 'm16',
    name: 'Shrimp Scampi',
    img:'https://www.savingdessert.com/wp-content/uploads/2019/03/Shrimp-Scampi-1.jpg',
    description: 'Buttery and garlicky shrimp served with pasta',
    price: 19.99
  },
  {
    id: 'm17',
    name: 'Pad Thai',
    img:'https://www.recipetineats.com/wp-content/uploads/2020/01/Chicken-Pad-Thai_9-SQ.jpg',
    description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts',
    price: 14.99
  },
  {
    id: 'm18',
    name: 'Hawaiian Pizza',
    img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/0/RX-FNM_030111-All-Star-Pizzas-030_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387306711678.jpeg',
    description: 'Classic pizza with ham and pineapple',
    price: 16.99
  },
  {
    id: 'm19',
    name: 'Miso Soup',
    img:'https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I-500x500.jpg',
    description: 'Traditional Japanese soup with tofu and seaweed',
    price: 6.99
  },
  {
    id: 'm20',
    name: 'Beef Burrito',
    img:'https://thekitchencommunity.org/wp-content/uploads/2021/02/Beef-Burrito-Recipe-1200x900.jpg',
    description: 'Flour tortilla filled with beef, rice, beans, and salsa',
    price: 12.99
  }
];

// console.log(meals);


const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      img={meal.img}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));


  return (
    <section className={classes.mealsList}>
        <div className={classes.offerSummary}>
        <h1 className={classes.offerHeading}>Today's <span>special</span> offers</h1>
        <p>Experience a feast fit for royalty with our exclusive today's special offer, featuring a mouthwatering combination of 
        flavors and culinary expertise that will transport you to gastronomic bliss.</p>
        </div>
        <ul className={classes.mealItems}>{mealsList}</ul>  
    </section>
  );
};

export default AvailableMeals;