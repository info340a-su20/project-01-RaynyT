var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import groceriesData from '../data/groceries.json';

var groceriesData = [{ "grocery": "Kroger Ground Beef 80% Lean 20% Fat", "group": "protein", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "365", "date": "2020-07-06T01:04:24Z", "inventory": "4", "img": "https://www.kroger.com/product/images/xlarge/front/0001111063200" }, { "grocery": "Certified Angus Beed 80/20 Ground Chuck", "group": "protein", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "365", "date": "2020-08-21T20:52:42Z", "inventory": "4", "img": "https://www.kroger.com/product/images/xlarge/front/0005399701512" }, { "grocery": "Kroger 100% Pure Beef Quarter Pound Burgers 8 Count", "group": "protein", "quantity": "8", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-26T09:38:54Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0001111000915" }, { "grocery": "Simple Truth Organic 85% Lean Grass Fed Ground Beef", "group": "protein", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "365", "date": "2020-08-05T16:27:17Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0001111096896" }, { "grocery": "Pure Farmland Homestyle Plant-Based protein balls 12 Count", "group": "protein", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0007024740720" }, { "grocery": "Certified Angus Beef Choice Chuck Roast (1 Roast)", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0271966500000" }, { "grocery": "Beef Chuck Bone In Flanken Style Short Ribs", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-24T22:12:21Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0020192200000" }, { "grocery": "Certified Angus Beef Choice Bone-In Ribeye Steak (1 Steak)", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-08-17T00:34:43Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0027201250000" }, { "grocery": "Certified Angus Beef Choice Top Sirloin Steak Value Pack (About 3 Steaks per Pack)", "group": "protein", "quantity": "3", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0027223950000" }, { "grocery": "Kroger Boneless Skinless Chicken Tenderloins", "group": "protein", "quantity": "6", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-28T16:21:48Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0001111000906" }, { "grocery": "Isernio's Premium Ground Chicken 96% Lean", "group": "protein", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "365", "date": "2020-07-12T10:09:50Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0008463244196" }, { "grocery": "Simple Truth Boneless & Skinless Natural Chicken Thighs", "group": "protein", "quantity": "6", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-09T10:23:59Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0024898750000" }, { "grocery": "Draper Valley Farms Split Chicken Breast", "group": "protein", "quantity": "2", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0025080650000" }, { "grocery": "Tyson Boneless Skinless Chicken Breast Tenderloins", "group": "protein", "quantity": "6", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0002370016222" }, { "grocery": "Hormel Always Tender Lemon Garlic Pork Loin Filet", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0003760025836" }, { "grocery": "Natural & Fresh Pork Boneless Center Cut Chops (About 4 Chops per Pack)", "group": "protein", "quantity": "4", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-17T13:15:32Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0020337400000" }, { "grocery": "Smithfield Sliced Maple Flavored Boneless Ham Limit 1 per Order", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-08-22T10:02:53Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0025389000000?fbclid=IwAR34PtfEZja2kWZPfYIdnYH0TfJg977kmHB7bfSX886XNSYNYN8QQoEet48" }, { "grocery": "Jennie-O Cured Turkey Bacon", "group": "protein", "quantity": "12", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0004222287000" }, { "grocery": "Oscar Mayer Naturally Hardwood Smoked Bacon Mega Pack", "group": "protein", "quantity": "22", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-08-04T14:55:14Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0004470007648" }, { "grocery": "Applegate Naturals Uncured Genoa Salami", "group": "protein", "quantity": "4", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0002531785600" }, { "grocery": "Smithfield Prime Fresh Honey Ham", "group": "protein", "quantity": "8", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-24T20:55:34Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0007080082248" }, { "grocery": "Applegate Organic Oven Roasted Turkey Breast", "group": "protein", "quantity": "6", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-05T16:53:56Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0002531768600" }, { "grocery": "Hillshire Farm Ultra Thin Sliced Lower Sodium Oven Roasted Turkey Breast", "group": "protein", "quantity": "8", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-14T22:12:22Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0004450097644" }, { "grocery": "Oscar Mayer Bologna", "group": "protein", "quantity": "12", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-26T16:31:23Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0004470000867" }, { "grocery": "Simple Truth Natural Cage Free Grade AA Large Brown Eggs", "group": "protein", "quantity": "18", "measurement": "unit", "store": "Kroger", "expiration": "36", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111087374" }, { "grocery": "Pete and Gerry's Organic Free Range Large Eggs", "group": "protein", "quantity": "12", "measurement": "unit", "store": "Kroger", "expiration": "36", "date": "2020-08-20T20:11:18Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0081565200214" }, { "grocery": "Salmon Atlantic Fillet (Fresh Farm Raised)", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "2", "date": "2020-08-11T07:34:24Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0023858800000" }, { "grocery": "Darigold 2% Ultra-Pasteurized Reduced Fat Milk", "group": "dairy", "quantity": "0.5", "measurement": "gallon", "store": "Kroger", "expiration": "7", "date": "2020-07-15T21:48:45Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0002640028961" }, { "grocery": "Fairlife 2% Reduced Fat Ultra Filtered Lactose Free Milk", "group": "dairy", "quantity": "52", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0085631200275" }, { "grocery": "Frigo Cheese Heads Original String Mozzarella Cheese", "group": "dairy", "quantity": "12", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-23T16:54:25Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0004171623215" }, { "grocery": "Darigold Medium Cheddar Fine Shredded Cheese", "group": "dairy", "quantity": "10", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0002640012806" }, { "grocery": "Darigold 4% Small Curd Cottage Cheese", "group": "dairy", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0002640017090" }, { "grocery": "Sargento Ultra Thin Sharp Cheddar Cheese Slices 18 Count", "group": "dairy", "quantity": "18", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-30T20:51:36Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0004610000226" }, { "grocery": "Chobani Strawberry Blended Non-Fat Greek Yogurt", "group": "dairy", "quantity": "32", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "2020-08-17T11:51:45Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0089470001026" }, { "grocery": "Dannon Oikos Triple Zero Mixed Berry Blended Greek Yogurt 4 Count", "group": "dairy", "quantity": "4", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "2020-07-11T12:05:24Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0003663201962" }, { "grocery": "Land O' Lakes Salted Butter", "group": "fat", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "180", "date": "2020-07-27T15:57:19Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0003450015164" }, { "grocery": "Danish Creamery Salted European Style Butter", "group": "fat", "quantity": "8", "measurement": "ounce", "store": "Kroger", "expiration": "180", "date": "2020-07-08T13:07:15Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0004720015423" }, { "grocery": "Private Selection Sesame Extra Large Enriched Sandwich Rolls 8 Count", "group": "grain", "quantity": "8", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111008093" }, { "grocery": "Essential Baking Co. Seeded Multi-Grain Bread", "group": "grain", "quantity": "14", "measurement": "ounce", "store": "Kroger", "expiration": "11", "date": "2020-08-19T05:08:04Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0081330501198" }, { "grocery": "Stonefire Naan Whole Grain Flatbread 2 Count", "group": "grain", "quantity": "9", "measurement": "ounce", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0087668100752" }, { "grocery": "Essential Baking Co. Gluten Free Sunny Seeded White Bread", "group": "grain", "quantity": "14", "measurement": "ounce", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0081330501199" }, { "grocery": "Essential Baking Co. Gluten Free Classic White Bread", "group": "grain", "quantity": "10", "measurement": "ounce", "store": "Kroger", "expiration": "11", "date": "2020-08-19T10:33:59Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0081330501331" }, { "grocery": "Bakery Fresh Goodness Pumpkin Chocolate Chip Cookies", "group": "sweet", "quantity": "10", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111007248" }, { "grocery": "Bakery Fresh Goodness Chocolate Brownies with Walnuts", "group": "sweet", "quantity": "16.5", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111009169" }, { "grocery": "Bakery Fresh Goodness Mini Cinnamon Rolls 16 Count", "group": "sweet", "quantity": "16", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0004157324133" }, { "grocery": "Bakery Fresh Goodness Glazed Donuts 6 Count", "group": "sweet", "quantity": "6", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111026813" }, { "grocery": "Mission Soft Taco Flour Tortillas 10 Count", "group": "grain", "quantity": "10", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-26T20:10:14Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0007373100415" }, { "grocery": "Old El Paso Stand 'n Stuff Taco Shells", "group": "grain", "quantity": "10", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-14T22:28:04Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0004600027918" }, { "grocery": "Mission 100% Whole Wheat Soft Taco Flour Tortillas 10 Count", "group": "grain", "quantity": "10", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-28T17:03:12Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0007373107107" }, { "grocery": "Mission Super Soft White Corn Tortillas 30 Count", "group": "grain", "quantity": "30", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-27T04:00:27Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0007373106002" }, { "grocery": "Sabra Snackers Classic Hummus with Pretzels", "group": "snack", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0004082201195" }, { "grocery": "Yucatan Guacamole Dip", "group": "snack", "quantity": "8", "measurement": "ounce", "store": "Kroger", "expiration": "30", "date": "2020-08-13T02:22:45Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0076711951839" }, { "grocery": "Pico De Gallo Medium Salsa", "group": "snack", "quantity": "14", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0003022301255" }, { "grocery": "Home Chef Heat and Eat Italian Style Pork Sausage & Roasted Red Pepper Risotto", "group": "meal", "quantity": "12", "measurement": "ounce", "store": "Kroger", "expiration": "4", "date": "2020-06-28T11:00:09Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0081207103969" }, { "grocery": "Home Chef Heat and Eat Italian Style Lasagna", "group": "meal", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "2", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0081207103619" }, { "grocery": "Home Chef Heat and Eat Chicken Fettuccine Alfredo", "group": "meal", "quantity": "14", "measurement": "ounce", "store": "Kroger", "expiration": "3", "date": "2020-06-25T05:27:41Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0081207103624" }, { "grocery": "Home Chef Heat and Eat Macaroni & Cheese And Pulled Pork With Bbq Sauce", "group": "meal", "quantity": "13", "measurement": "ounce", "store": "Kroger", "expiration": "3", "date": "2020-08-09T07:39:04Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0084013436252" }, { "grocery": "Oishisa California Roll with Brown Rice", "group": "seafood", "quantity": "12", "measurement": "unit", "store": "Kroger", "expiration": "2", "date": "2020-08-02T11:37:44Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0002301200046" }, { "grocery": "Evolution Fresh Organic Defense Up Cold-Pressed Fruit Juice Smoothie", "group": "drink", "quantity": "32", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-08T21:01:59Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0076235712248" }, { "grocery": "Naked Mighty Mango Juice Blend", "group": "drink", "quantity": "64", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-27T20:11:59Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0008259266064" }, { "grocery": "POM Wonderful Pomegranate Blueberry Juice", "group": "drink", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-08-19T02:36:13Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0082415040416" }, { "grocery": "Simple Truth Sea Salt Roasted Cashews", "group": "protein", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111002473" }, { "grocery": "Litehouse Homestyle Ranch Dressing and Dip Family Size Squeeze Bottle", "group": "condiment", "quantity": "20", "measurement": "ounce", "store": "Kroger", "expiration": "30", "date": "2020-07-11T20:04:06Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0007766112511" }, { "grocery": "Primal Kitchen Ranch Dressing and Marinade with Avocado Oil", "group": "condiment", "quantity": "8", "measurement": "ounce", "store": "Kroger", "expiration": "30", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0086369900014" }, { "grocery": "Newman's Own Balsamic Vinaigrette Dressing", "group": "condiment", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "30", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0002066200006" }, { "grocery": "Bolthouse Farms Caesar Parmigiano Yogurt Salad Dressing", "group": "condiment", "quantity": "14", "measurement": "ounce", "store": "Kroger", "expiration": "30", "date": "2020-07-21T22:56:24Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0007146440250" }, { "grocery": "Blueberries", "group": "fruit", "quantity": "6", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "2020-08-12T04:41:07Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0003338322029" }, { "grocery": "Berries - Blackberries", "group": "fruit", "quantity": "6", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "2020-07-13T12:04:09Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0003338324000" }, { "grocery": "Mangoes", "group": "fruit", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000003114" }, { "grocery": "Simple Truth Organic Cripps Pink Apples", "group": "fruit", "quantity": "6", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111018999" }, { "grocery": "Kroger Lemons", "group": "fruit", "quantity": "10", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111091188" }, { "grocery": "Peach - White", "group": "fruit", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004401" }, { "grocery": "Avocado - Small", "group": "fruit", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004046" }, { "grocery": "Limes", "group": "fruit", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-08-14T05:39:20Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0000000004048" }, { "grocery": "Red Raspberries", "group": "fruit", "quantity": "6", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "2020-07-18T04:04:24Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0003338321000" }, { "grocery": "Organic - Berries - Strawberries", "group": "fruit", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0003338320038" }, { "grocery": "Banana", "group": "fruit", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "2020-08-06T13:43:21Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0000000004011" }, { "grocery": "Brussels Sprouts - Stalk", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-06-28T16:19:11Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0000000003083" }, { "grocery": "Broccolini", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000003277" }, { "grocery": "Zucchini", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-08-22T06:56:25Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0000000004067" }, { "grocery": "Spinach", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-08-09T12:48:49Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0000000004090" }, { "grocery": "Cabbage - Red", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-08-03T08:32:19Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0000000004554" }, { "grocery": "Lettuce - Boston", "group": "vegetable", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "11", "date": "2020-08-02T06:04:08Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000004632" }, { "grocery": "Peas- Sugar Snap", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-07-27T08:30:42Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000004675" }, { "grocery": "Potatoes - White - Creamer", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "30", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004724" }, { "grocery": "Shishito Peppers", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-26T06:18:26Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000024088" }, { "grocery": "Organic - Asparagus", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-29T08:40:11Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0000000094080" }, { "grocery": "Simple Truth Organic� Whole White Mushrooms", "group": "vegetable", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-26T03:05:28Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0001111002496" }, { "grocery": "Cabbage - Savoy", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-08-03T13:41:23Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0000000004555" }, { "grocery": "Cucumber - English", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004593" }, { "grocery": "Ginger Root", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004612" }, { "grocery": "Greens - Kale", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-24T17:40:51Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000004627" }, { "grocery": "Pepper - Bell - Red Cherry", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-24T00:11:30Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000004711" }, { "grocery": "Organic - Onions - Red", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "30", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000094082" }, { "grocery": "Celery - Small", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004070" }, { "grocery": "Lettuce - Red Leaf", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004075" }, { "grocery": "Parsnip", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-14T06:33:47Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0000000004672" }, { "grocery": "Organic - Bell Peper - Orange", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-15T01:29:14Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0000000093121" }, { "grocery": "Organic - Leeks", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000094629" }, { "grocery": "Tomatoes - Red", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000003151" }, { "grocery": "Pepper - Aloha", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-08-16T06:32:42Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0000000003465" }, { "grocery": "Bell Pepper - Green - Large", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004065" }, { "grocery": "Onions - Green", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-18T00:39:08Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0000000004068" }, { "grocery": "Lettuce - Green Leaf", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004076" }, { "grocery": "Cauliflower", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004079" }, { "grocery": "Onions - Yellow", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "30", "date": "2020-07-17T11:32:40Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0000000004093" }, { "grocery": "Carrot", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "18", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004562" }, { "grocery": "Garlic", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "30", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004608" }, { "grocery": "Lettuce - Romaine", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-08-20T07:08:32Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0000000004640" }, { "grocery": "Organic Roma Tomatoes", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-01T06:12:38Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000094087" }, { "grocery": "Parsley", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-08-18T21:51:57Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0000000004899" }, { "grocery": "Cilantro", "group": "vegetable", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "11", "date": "2020-06-29T02:01:32Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0000000004889" }, { "grocery": "Doritos Nacho Cheese Flavored Tortilla Chips", "group": "snack", "quantity": "10", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-08-11T03:41:37Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0002840064203" }, { "grocery": "Rold Gold Classic Tiny Twists Pretzels Snacks", "group": "snack", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-06-24T22:24:28Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0002840004768" }, { "grocery": "Daisy Pure & Natural Sour Cream", "group": "dairy", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "18", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0007342000011" }, { "grocery": "Italia Lemon Juice", "group": "condiment", "quantity": "4", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-07-14T03:24:49Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0004140900041" }, { "grocery": "Italia Lime Juice", "group": "condiment", "quantity": "4", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-08-11T20:23:04Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0004140900045" }, { "grocery": "Barilla Penne Pasta", "group": "grain", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-07-02T21:38:58Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0007680828073" }, { "grocery": "Bertolli Creamy Alfredo Sauce", "group": "sauce", "quantity": "15", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0003620021929" }, { "grocery": "Ragu Old World Style Traditional Pasta Sauce", "group": "sauce", "quantity": "24", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-06-24T12:34:35Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0003620000250" }];

var Groceries = function (_React$Component) {
	_inherits(Groceries, _React$Component);

	function Groceries(props) {
		_classCallCheck(this, Groceries);

		var _this = _possibleConstructorReturn(this, (Groceries.__proto__ || Object.getPrototypeOf(Groceries)).call(this, props));

		_this.state = { groceries: props.groceries };
		_this.entryClick = _this.entryClick.bind(_this);
		return _this;
	}

	_createClass(Groceries, [{
		key: "entryClick",
		value: function entryClick(event) {
			event.preventDefault();
			var toDiscard = event.target.parentNode.parentElement.parentElement.id;
			var expired = event.target.parentNode.parentElement.getElementsByTagName("i")[0].className.includes("trash");

			groceries = this.state.groceries;
			for (var i = 0; i < groceries.length; i++) {
				if (groceries[i].grocery == toDiscard) {
					if (expired) {
						groceries[i].inventory = 0;
					}
					groceries[i].inventory -= 1;
				}
			}

			this.setState({ groceries: groceries });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var groceries = this.state.groceries;

			var groceryCards = { Expired: [], Caution: [], Fresh: [] };
			groceries.forEach(function (grocery) {
				currentDate = Date.now();
				expirationDate = Date.parse(grocery.date);
				daysSinceBought = (currentDate - expirationDate) / 1000 / 60 / 60 / 24;
				if (daysSinceBought - grocery.expiration < -7) {
					groceryCards.Fresh.push(grocery);
				} else if (daysSinceBought - grocery.expiration < 0) {
					groceryCards.Caution.push(grocery);
				} else {
					groceryCards.Expired.push(grocery);
				}
			});

			return React.createElement(
				React.Fragment,
				null,
				Object.keys(groceryCards).map(function (header) {
					return React.createElement(GroceryCard, { key: header, header: header, groceries: groceryCards[header].filter(function (grocery) {
							return grocery.inventory > 0;
						}), entryClick: _this2.entryClick });
				})
			);
		}
	}]);

	return Groceries;
}(React.Component);

var GroceryCard = function (_React$Component2) {
	_inherits(GroceryCard, _React$Component2);

	function GroceryCard(props) {
		_classCallCheck(this, GroceryCard);

		var _this3 = _possibleConstructorReturn(this, (GroceryCard.__proto__ || Object.getPrototypeOf(GroceryCard)).call(this, props));

		_this3.state = { location: 0 };

		_this3.scrollClick = _this3.scrollClick.bind(_this3);
		return _this3;
	}

	_createClass(GroceryCard, [{
		key: "scrollClick",
		value: function scrollClick(event) {
			event.preventDefault();
			var moveUp = event.target.parentNode.getElementsByTagName("i")[0].className.includes("scroll-up");
			if (moveUp) {
				this.setState({ location: this.state.location + (this.state.location + 5 > this.props.groceries.length ? 0 : 5) });
			} else {
				this.setState({ location: this.state.location - (this.state.location - 5 < 0 ? this.state.location : 5) });
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			var header = this.props.header;
			var groceries = this.props.groceries.slice(this.state.location, this.state.location + 5);

			return React.createElement(
				"div",
				{ className: "flex-g-card", id: header.toLowerCase() },
				React.createElement(
					"h2",
					null,
					header
				),
				React.createElement(
					"table",
					null,
					React.createElement(
						"tbody",
						null,
						groceries.map(function (grocery) {
							return React.createElement(GroceryEntry, { key: grocery.grocery, expired: header == "Expired", grocery: grocery, entryClick: _this4.props.entryClick });
						})
					)
				),
				React.createElement(
					"div",
					null,
					React.createElement(
						"button",
						{ onClick: this.scrollClick },
						React.createElement("i", { className: "fa fa-ellipsis-h fa-lg scroll-up", "aria-label": "ellipse/more icon" })
					),
					React.createElement(
						"button",
						{ onClick: this.scrollClick },
						React.createElement("i", { className: "fa fa-ellipsis-h fa-lg scroll-down", "aria-label": "ellipse/more icon" })
					)
				)
			);
		}
	}]);

	return GroceryCard;
}(React.Component);

var GroceryEntry = function (_React$Component3) {
	_inherits(GroceryEntry, _React$Component3);

	function GroceryEntry() {
		_classCallCheck(this, GroceryEntry);

		return _possibleConstructorReturn(this, (GroceryEntry.__proto__ || Object.getPrototypeOf(GroceryEntry)).apply(this, arguments));
	}

	_createClass(GroceryEntry, [{
		key: "render",
		value: function render() {
			var grocery = this.props.grocery;

			if (grocery.inventory > 0) {
				return React.createElement(
					"tr",
					{ id: grocery.grocery },
					React.createElement(
						"td",
						null,
						React.createElement("img", { src: grocery.img, id: "grocery", alt: grocery.grocery })
					),
					React.createElement(
						"td",
						null,
						React.createElement(
							"p",
							null,
							grocery.grocery + ": " + grocery.inventory
						)
					),
					React.createElement(
						"td",
						null,
						React.createElement(
							"button",
							{ onClick: this.props.entryClick },
							React.createElement("i", { className: this.props.expired ? "fa fa-trash" : "fa fa-check-circle-o fa-lg", "aria-label": this.props.expired ? "trash icon" : "check/used icon" })
						)
					)
				);
			} else {
				return null;
			}
		}
	}]);

	return GroceryEntry;
}(React.Component);

ReactDOM.render(React.createElement(Groceries, { groceries: groceriesData }), document.getElementsByClassName('flex-grocery-cards')[0]);