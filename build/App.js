var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var groceriesData = [{ "grocery": "Kroger Ground Beef 80% Lean 20% Fat", "group": "protein", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "365", "date": "2020-07-06T01:04:24Z", "inventory": "4", "img": "https://www.kroger.com/product/images/xlarge/front/0001111063200" }, { "grocery": "Certified Angus Beed 80/20 Ground Chuck", "group": "protein", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "365", "date": "2020-08-21T20:52:42Z", "inventory": "4", "img": "https://www.kroger.com/product/images/xlarge/front/0005399701512" }, { "grocery": "Kroger 100% Pure Beef Quarter Pound Burgers 8 Count", "group": "protein", "quantity": "8", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-26T09:38:54Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0001111000915" }, { "grocery": "Simple Truth Organic 85% Lean Grass Fed Ground Beef", "group": "protein", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "365", "date": "2020-08-05T16:27:17Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0001111096896" }, { "grocery": "Pure Farmland Homestyle Plant-Based protein balls 12 Count", "group": "protein", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0007024740720" }, { "grocery": "Certified Angus Beef Choice Chuck Roast (1 Roast)", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0271966500000" }, { "grocery": "Beef Chuck Bone In Flanken Style Short Ribs", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-24T22:12:21Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0020192200000" }, { "grocery": "Certified Angus Beef Choice Bone-In Ribeye Steak (1 Steak)", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-08-17T00:34:43Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0027201250000" }, { "grocery": "Certified Angus Beef Choice Top Sirloin Steak Value Pack (About 3 Steaks per Pack)", "group": "protein", "quantity": "3", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0027223950000" }, { "grocery": "Kroger Boneless Skinless Chicken Tenderloins", "group": "protein", "quantity": "6", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-28T16:21:48Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0001111000906" }, { "grocery": "Isernio's Premium Ground Chicken 96% Lean", "group": "protein", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "365", "date": "2020-07-12T10:09:50Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0008463244196" }, { "grocery": "Simple Truth Boneless & Skinless Natural Chicken Thighs", "group": "protein", "quantity": "6", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-09T10:23:59Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0024898750000" }, { "grocery": "Draper Valley Farms Split Chicken Breast", "group": "protein", "quantity": "2", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0025080650000" }, { "grocery": "Tyson Boneless Skinless Chicken Breast Tenderloins", "group": "protein", "quantity": "6", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0002370016222" }, { "grocery": "Hormel Always Tender Lemon Garlic Pork Loin Filet", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0003760025836" }, { "grocery": "Natural & Fresh Pork Boneless Center Cut Chops (About 4 Chops per Pack)", "group": "protein", "quantity": "4", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-17T13:15:32Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0020337400000" }, { "grocery": "Smithfield Sliced Maple Flavored Boneless Ham Limit 1 per Order", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-08-22T10:02:53Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0025389000000?fbclid=IwAR34PtfEZja2kWZPfYIdnYH0TfJg977kmHB7bfSX886XNSYNYN8QQoEet48" }, { "grocery": "Jennie-O Cured Turkey Bacon", "group": "protein", "quantity": "12", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0004222287000" }, { "grocery": "Oscar Mayer Naturally Hardwood Smoked Bacon Mega Pack", "group": "protein", "quantity": "22", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-08-04T14:55:14Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0004470007648" }, { "grocery": "Applegate Naturals Uncured Genoa Salami", "group": "protein", "quantity": "4", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0002531785600" }, { "grocery": "Smithfield Prime Fresh Honey Ham", "group": "protein", "quantity": "8", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-24T20:55:34Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0007080082248" }, { "grocery": "Applegate Organic Oven Roasted Turkey Breast", "group": "protein", "quantity": "6", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-05T16:53:56Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0002531768600" }, { "grocery": "Hillshire Farm Ultra Thin Sliced Lower Sodium Oven Roasted Turkey Breast", "group": "protein", "quantity": "8", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-14T22:12:22Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0004450097644" }, { "grocery": "Oscar Mayer Bologna", "group": "protein", "quantity": "12", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-26T16:31:23Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0004470000867" }, { "grocery": "Simple Truth Natural Cage Free Grade AA Large Brown Eggs", "group": "protein", "quantity": "18", "measurement": "unit", "store": "Kroger", "expiration": "36", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111087374" }, { "grocery": "Pete and Gerry's Organic Free Range Large Eggs", "group": "protein", "quantity": "12", "measurement": "unit", "store": "Kroger", "expiration": "36", "date": "2020-08-20T20:11:18Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0081565200214" }, { "grocery": "Salmon Atlantic Fillet (Fresh Farm Raised)", "group": "protein", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "2", "date": "2020-08-11T07:34:24Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0023858800000" }, { "grocery": "Darigold 2% Ultra-Pasteurized Reduced Fat Milk", "group": "dairy", "quantity": "0.5", "measurement": "gallon", "store": "Kroger", "expiration": "7", "date": "2020-07-15T21:48:45Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0002640028961" }, { "grocery": "Fairlife 2% Reduced Fat Ultra Filtered Lactose Free Milk", "group": "dairy", "quantity": "52", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0085631200275" }, { "grocery": "Frigo Cheese Heads Original String Mozzarella Cheese", "group": "dairy", "quantity": "12", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-23T16:54:25Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0004171623215" }, { "grocery": "Darigold Medium Cheddar Fine Shredded Cheese", "group": "dairy", "quantity": "10", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0002640012806" }, { "grocery": "Darigold 4% Small Curd Cottage Cheese", "group": "dairy", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0002640017090" }, { "grocery": "Sargento Ultra Thin Sharp Cheddar Cheese Slices 18 Count", "group": "dairy", "quantity": "18", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-30T20:51:36Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0004610000226" }, { "grocery": "Chobani Strawberry Blended Non-Fat Greek Yogurt", "group": "dairy", "quantity": "32", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "2020-08-17T11:51:45Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0089470001026" }, { "grocery": "Dannon Oikos Triple Zero Mixed Berry Blended Greek Yogurt 4 Count", "group": "dairy", "quantity": "4", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "2020-07-11T12:05:24Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0003663201962" }, { "grocery": "Land O' Lakes Salted Butter", "group": "fat", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "180", "date": "2020-07-27T15:57:19Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0003450015164" }, { "grocery": "Danish Creamery Salted European Style Butter", "group": "fat", "quantity": "8", "measurement": "ounce", "store": "Kroger", "expiration": "180", "date": "2020-07-08T13:07:15Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0004720015423" }, { "grocery": "Private Selection Sesame Extra Large Enriched Sandwich Rolls 8 Count", "group": "grain", "quantity": "8", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111008093" }, { "grocery": "Essential Baking Co. Seeded Multi-Grain Bread", "group": "grain", "quantity": "14", "measurement": "ounce", "store": "Kroger", "expiration": "11", "date": "2020-08-19T05:08:04Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0081330501198" }, { "grocery": "Stonefire Naan Whole Grain Flatbread 2 Count", "group": "grain", "quantity": "9", "measurement": "ounce", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0087668100752" }, { "grocery": "Essential Baking Co. Gluten Free Sunny Seeded White Bread", "group": "grain", "quantity": "14", "measurement": "ounce", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0081330501199" }, { "grocery": "Essential Baking Co. Gluten Free Classic White Bread", "group": "grain", "quantity": "10", "measurement": "ounce", "store": "Kroger", "expiration": "11", "date": "2020-08-19T10:33:59Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0081330501331" }, { "grocery": "Bakery Fresh Goodness Pumpkin Chocolate Chip Cookies", "group": "sweet", "quantity": "10", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111007248" }, { "grocery": "Bakery Fresh Goodness Chocolate Brownies with Walnuts", "group": "sweet", "quantity": "16.5", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111009169" }, { "grocery": "Bakery Fresh Goodness Mini Cinnamon Rolls 16 Count", "group": "sweet", "quantity": "16", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0004157324133" }, { "grocery": "Bakery Fresh Goodness Glazed Donuts 6 Count", "group": "sweet", "quantity": "6", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111026813" }, { "grocery": "Mission Soft Taco Flour Tortillas 10 Count", "group": "grain", "quantity": "10", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-26T20:10:14Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0007373100415" }, { "grocery": "Old El Paso Stand 'n Stuff Taco Shells", "group": "grain", "quantity": "10", "measurement": "unit", "store": "Kroger", "expiration": "365", "date": "2020-07-14T22:28:04Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0004600027918" }, { "grocery": "Mission 100% Whole Wheat Soft Taco Flour Tortillas 10 Count", "group": "grain", "quantity": "10", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-28T17:03:12Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0007373107107" }, { "grocery": "Mission Super Soft White Corn Tortillas 30 Count", "group": "grain", "quantity": "30", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-27T04:00:27Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0007373106002" }, { "grocery": "Sabra Snackers Classic Hummus with Pretzels", "group": "snack", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0004082201195" }, { "grocery": "Yucatan Guacamole Dip", "group": "snack", "quantity": "8", "measurement": "ounce", "store": "Kroger", "expiration": "30", "date": "2020-08-13T02:22:45Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0076711951839" }, { "grocery": "Pico De Gallo Medium Salsa", "group": "snack", "quantity": "14", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0003022301255" }, { "grocery": "Home Chef Heat and Eat Italian Style Pork Sausage & Roasted Red Pepper Risotto", "group": "meal", "quantity": "12", "measurement": "ounce", "store": "Kroger", "expiration": "4", "date": "2020-06-28T11:00:09Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0081207103969" }, { "grocery": "Home Chef Heat and Eat Italian Style Lasagna", "group": "meal", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "2", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0081207103619" }, { "grocery": "Home Chef Heat and Eat Chicken Fettuccine Alfredo", "group": "meal", "quantity": "14", "measurement": "ounce", "store": "Kroger", "expiration": "3", "date": "2020-06-25T05:27:41Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0081207103624" }, { "grocery": "Home Chef Heat and Eat Macaroni & Cheese And Pulled Pork With Bbq Sauce", "group": "meal", "quantity": "13", "measurement": "ounce", "store": "Kroger", "expiration": "3", "date": "2020-08-09T07:39:04Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0084013436252" }, { "grocery": "Oishisa California Roll with Brown Rice", "group": "seafood", "quantity": "12", "measurement": "unit", "store": "Kroger", "expiration": "2", "date": "2020-08-02T11:37:44Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0002301200046" }, { "grocery": "Evolution Fresh Organic Defense Up Cold-Pressed Fruit Juice Smoothie", "group": "drink", "quantity": "32", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-08T21:01:59Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0076235712248" }, { "grocery": "Naked Mighty Mango Juice Blend", "group": "drink", "quantity": "64", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-27T20:11:59Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0008259266064" }, { "grocery": "POM Wonderful Pomegranate Blueberry Juice", "group": "drink", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-08-19T02:36:13Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0082415040416" }, { "grocery": "Simple Truth Sea Salt Roasted Cashews", "group": "protein", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111002473" }, { "grocery": "Litehouse Homestyle Ranch Dressing and Dip Family Size Squeeze Bottle", "group": "condiment", "quantity": "20", "measurement": "ounce", "store": "Kroger", "expiration": "30", "date": "2020-07-11T20:04:06Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0007766112511" }, { "grocery": "Primal Kitchen Ranch Dressing and Marinade with Avocado Oil", "group": "condiment", "quantity": "8", "measurement": "ounce", "store": "Kroger", "expiration": "30", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0086369900014" }, { "grocery": "Newman's Own Balsamic Vinaigrette Dressing", "group": "condiment", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "30", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0002066200006" }, { "grocery": "Bolthouse Farms Caesar Parmigiano Yogurt Salad Dressing", "group": "condiment", "quantity": "14", "measurement": "ounce", "store": "Kroger", "expiration": "30", "date": "2020-07-21T22:56:24Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0007146440250" }, { "grocery": "Blueberries", "group": "fruit", "quantity": "6", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "2020-08-12T04:41:07Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0003338322029" }, { "grocery": "Berries - Blackberries", "group": "fruit", "quantity": "6", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "2020-07-13T12:04:09Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0003338324000" }, { "grocery": "Mangoes", "group": "fruit", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000003114" }, { "grocery": "Simple Truth Organic Cripps Pink Apples", "group": "fruit", "quantity": "6", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111018999" }, { "grocery": "Kroger Lemons", "group": "fruit", "quantity": "10", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0001111091188" }, { "grocery": "Peach - White", "group": "fruit", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004401" }, { "grocery": "Avocado - Small", "group": "fruit", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004046" }, { "grocery": "Limes", "group": "fruit", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-08-14T05:39:20Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0000000004048" }, { "grocery": "Red Raspberries", "group": "fruit", "quantity": "6", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "2020-07-18T04:04:24Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0003338321000" }, { "grocery": "Organic - Berries - Strawberries", "group": "fruit", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0003338320038" }, { "grocery": "Banana", "group": "fruit", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "2020-08-06T13:43:21Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0000000004011" }, { "grocery": "Brussels Sprouts - Stalk", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-06-28T16:19:11Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0000000003083" }, { "grocery": "Broccolini", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000003277" }, { "grocery": "Zucchini", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-08-22T06:56:25Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0000000004067" }, { "grocery": "Spinach", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-08-09T12:48:49Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0000000004090" }, { "grocery": "Cabbage - Red", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-08-03T08:32:19Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0000000004554" }, { "grocery": "Lettuce - Boston", "group": "vegetable", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "11", "date": "2020-08-02T06:04:08Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000004632" }, { "grocery": "Peas- Sugar Snap", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-07-27T08:30:42Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000004675" }, { "grocery": "Potatoes - White - Creamer", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "30", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004724" }, { "grocery": "Shishito Peppers", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-26T06:18:26Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000024088" }, { "grocery": "Organic - Asparagus", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-29T08:40:11Z", "inventory": "6", "img": "https://www.kroger.com/product/images/medium/front/0000000094080" }, { "grocery": "Simple Truth Organic� Whole White Mushrooms", "group": "vegetable", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "14", "date": "2020-07-26T03:05:28Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0001111002496" }, { "grocery": "Cabbage - Savoy", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-08-03T13:41:23Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0000000004555" }, { "grocery": "Cucumber - English", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004593" }, { "grocery": "Ginger Root", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004612" }, { "grocery": "Greens - Kale", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-06-24T17:40:51Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000004627" }, { "grocery": "Pepper - Bell - Red Cherry", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-24T00:11:30Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000004711" }, { "grocery": "Organic - Onions - Red", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "30", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000094082" }, { "grocery": "Celery - Small", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "7", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004070" }, { "grocery": "Lettuce - Red Leaf", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004075" }, { "grocery": "Parsnip", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-14T06:33:47Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0000000004672" }, { "grocery": "Organic - Bell Peper - Orange", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-15T01:29:14Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0000000093121" }, { "grocery": "Organic - Leeks", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000094629" }, { "grocery": "Tomatoes - Red", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000003151" }, { "grocery": "Pepper - Aloha", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-08-16T06:32:42Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0000000003465" }, { "grocery": "Bell Pepper - Green - Large", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004065" }, { "grocery": "Onions - Green", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-18T00:39:08Z", "inventory": "5", "img": "https://www.kroger.com/product/images/medium/front/0000000004068" }, { "grocery": "Lettuce - Green Leaf", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004076" }, { "grocery": "Cauliflower", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004079" }, { "grocery": "Onions - Yellow", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "30", "date": "2020-07-17T11:32:40Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0000000004093" }, { "grocery": "Carrot", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "18", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004562" }, { "grocery": "Garlic", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "30", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0000000004608" }, { "grocery": "Lettuce - Romaine", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-08-20T07:08:32Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0000000004640" }, { "grocery": "Organic Roma Tomatoes", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "14", "date": "2020-07-01T06:12:38Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0000000094087" }, { "grocery": "Parsley", "group": "vegetable", "quantity": "1", "measurement": "unit", "store": "Kroger", "expiration": "11", "date": "2020-08-18T21:51:57Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0000000004899" }, { "grocery": "Cilantro", "group": "vegetable", "quantity": "1", "measurement": "pound", "store": "Kroger", "expiration": "11", "date": "2020-06-29T02:01:32Z", "inventory": "2", "img": "https://www.kroger.com/product/images/medium/front/0000000004889" }, { "grocery": "Doritos Nacho Cheese Flavored Tortilla Chips", "group": "snack", "quantity": "10", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-08-11T03:41:37Z", "inventory": "1", "img": "https://www.kroger.com/product/images/medium/front/0002840064203" }, { "grocery": "Rold Gold Classic Tiny Twists Pretzels Snacks", "group": "snack", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-06-24T22:24:28Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0002840004768" }, { "grocery": "Daisy Pure & Natural Sour Cream", "group": "dairy", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "18", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0007342000011" }, { "grocery": "Italia Lemon Juice", "group": "condiment", "quantity": "4", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-07-14T03:24:49Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0004140900041" }, { "grocery": "Italia Lime Juice", "group": "condiment", "quantity": "4", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-08-11T20:23:04Z", "inventory": "4", "img": "https://www.kroger.com/product/images/medium/front/0004140900045" }, { "grocery": "Barilla Penne Pasta", "group": "grain", "quantity": "16", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-07-02T21:38:58Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0007680828073" }, { "grocery": "Bertolli Creamy Alfredo Sauce", "group": "sauce", "quantity": "15", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "", "inventory": "0", "img": "https://www.kroger.com/product/images/medium/front/0003620021929" }, { "grocery": "Ragu Old World Style Traditional Pasta Sauce", "group": "sauce", "quantity": "24", "measurement": "ounce", "store": "Kroger", "expiration": "365", "date": "2020-06-24T12:34:35Z", "inventory": "3", "img": "https://www.kroger.com/product/images/medium/front/0003620000250" }];

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = { page: 'main' };

		_this.recipeClick = _this.recipeClick.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: "recipeClick",
		value: function recipeClick(event) {
			event.preventDefault();
			if (this.state.page == 'main') {
				this.setState({ page: 'recipe' });
			} else {
				this.setState({ page: 'main' });
			}
		}
	}, {
		key: "render",
		value: function render() {
			if (this.state.page == 'main') {
				return React.createElement(
					React.Fragment,
					null,
					React.createElement(
						"div",
						{ className: "flex-grocery-cards" },
						React.createElement(Groceries, { groceries: this.props.groceriesData })
					),
					React.createElement(
						"div",
						{ className: "flex-recipe-cards" },
						React.createElement(
							"div",
							{ className: "r-card", onClick: this.recipeClick },
							React.createElement("img", { src: "../img/tacos.jpg", alt: "a couple of tacos loaded with veggies, cheese and meat" }),
							React.createElement(
								"p",
								{ id: "recipe" },
								"Tacos"
							),
							React.createElement(
								"p",
								null,
								"7/8 Ingredients"
							),
							React.createElement(
								"div",
								{ className: "flex-recipe-buttons" },
								React.createElement(
									"div",
									{ id: "add" },
									React.createElement("i", { className: "fa fa-plus-circle fa-lg", "aria-label": "add icon" })
								),
								React.createElement(
									"div",
									{ id: "peach" },
									React.createElement("img", { src: "../img/peach.svg", id: "like", alt: "peach icon indicating favorite recipe" })
								)
							)
						),
						React.createElement(
							"div",
							{ className: "r-card", onClick: this.recipeClick },
							React.createElement("img", { src: "../img/blueberry_muffin.jpg", alt: "blueberry muffin" }),
							React.createElement(
								"p",
								{ id: "recipe" },
								"Blueberry Muffins"
							),
							React.createElement(
								"p",
								null,
								"4/6 Ingredients"
							),
							React.createElement(
								"div",
								{ className: "flex-recipe-buttons" },
								React.createElement(
									"div",
									{ id: "add" },
									React.createElement("i", { className: "fa fa-plus-circle fa-lg", "aria-label": "add icon" })
								),
								React.createElement(
									"div",
									{ id: "peach" },
									React.createElement("img", { src: "../img/peach.svg", id: "like", alt: "peach icon indicating favorite recipe" })
								)
							)
						),
						React.createElement(
							"div",
							{ className: "r-card", id: "fav", onClick: this.recipeClick },
							React.createElement("img", { src: "../img/chicken_parmesan.jpg", alt: "picture of breaded chicken with cheese and pasta" }),
							React.createElement(
								"p",
								{ id: "recipe" },
								"Chicken Parmesan"
							),
							React.createElement(
								"p",
								null,
								"5/13 Ingredients"
							),
							React.createElement(
								"div",
								{ className: "flex-recipe-buttons" },
								React.createElement(
									"div",
									{ id: "add" },
									React.createElement("i", { className: "fa fa-plus-circle fa-lg", "aria-label": "add icon" })
								),
								React.createElement(
									"div",
									{ id: "peach" },
									React.createElement("img", { src: "../img/peach.svg", id: "like", alt: "peach icon indicating favorite recipe" })
								)
							)
						),
						React.createElement(
							"div",
							{ className: "r-card", onClick: this.recipeClick },
							React.createElement("img", { src: "../img/quesadilla.jpg", alt: "quesadilla, cheese in a tortilla" }),
							React.createElement(
								"p",
								{ id: "recipe" },
								"Quesadilla"
							),
							React.createElement(
								"p",
								null,
								"1/2 Ingredients"
							),
							React.createElement(
								"div",
								{ className: "flex-recipe-buttons" },
								React.createElement(
									"div",
									{ id: "add" },
									React.createElement("i", { className: "fa fa-plus-circle fa-lg", "aria-label": "add icon" })
								),
								React.createElement(
									"div",
									{ id: "peach" },
									React.createElement("img", { src: "../img/peach.svg", id: "like", alt: "peach icon indicating favorite recipe" })
								)
							)
						),
						React.createElement(
							"div",
							{ className: "r-card", id: "fav", onClick: this.recipeClick },
							React.createElement("img", { src: "../img/taco_salad.jpg", alt: "sald in a taco tortilla shell loaded with toppings" }),
							React.createElement(
								"p",
								{ id: "recipe" },
								"Taco Salad"
							),
							React.createElement(
								"p",
								null,
								"7/9 Ingredients"
							),
							React.createElement(
								"div",
								{ className: "flex-recipe-buttons" },
								React.createElement(
									"div",
									{ id: "add" },
									React.createElement("i", { className: "fa fa-plus-circle fa-lg", "aria-label": "add icon" })
								),
								React.createElement(
									"div",
									{ id: "peach" },
									React.createElement("img", { src: "../img/peach.svg", id: "like", alt: "peach icon indicating favorite recipe" })
								)
							)
						),
						React.createElement(
							"div",
							{ className: "r-card", onClick: this.recipeClick },
							React.createElement("img", { src: "../img/chicken_sandwich.jpg", alt: "sandwich with slices of chicken, lettuce and other ingredients" }),
							React.createElement(
								"p",
								{ id: "recipe" },
								"Chicken Sandwich"
							),
							React.createElement(
								"p",
								null,
								"2/5 Ingredients"
							),
							React.createElement(
								"div",
								{ className: "flex-recipe-buttons" },
								React.createElement(
									"div",
									{ id: "add" },
									React.createElement("i", { className: "fa fa-plus-circle fa-lg", "aria-label": "add icon" })
								),
								React.createElement(
									"div",
									{ id: "peach" },
									React.createElement("img", { src: "../img/peach.svg", id: "like", alt: "peach icon indicating favorite recipe" })
								)
							)
						),
						React.createElement(
							"div",
							{ className: "r-card", id: "fav", onClick: this.recipeClick },
							React.createElement("img", { src: "../img/omelette.jpg", alt: "omelett loaded with meats and veggies" }),
							React.createElement(
								"p",
								{ id: "recipe" },
								"Omelette"
							),
							React.createElement(
								"p",
								null,
								"0/6 Ingredients"
							),
							React.createElement(
								"div",
								{ className: "flex-recipe-buttons" },
								React.createElement(
									"div",
									{ id: "add" },
									React.createElement("i", { className: "fa fa-plus-circle fa-lg", "aria-label": "add icon" })
								),
								React.createElement(
									"div",
									{ id: "peach" },
									React.createElement("img", { src: "../img/peach.svg", id: "like", alt: "peach icon indicating favorite recipe" })
								)
							)
						),
						React.createElement(
							"div",
							{ className: "r-card", id: "fav", onClick: this.recipeClick },
							React.createElement("img", { src: "../img/risotto.jpg", alt: "risotto with green onion and other garnishes" }),
							React.createElement(
								"p",
								{ id: "recipe" },
								"Risotto"
							),
							React.createElement(
								"p",
								null,
								"1/7 Ingredients"
							),
							React.createElement(
								"div",
								{ className: "flex-recipe-buttons" },
								React.createElement(
									"div",
									{ id: "add" },
									React.createElement("i", { className: "fa fa-plus-circle fa-lg", "aria-label": "add icon" })
								),
								React.createElement(
									"div",
									{ id: "peach" },
									React.createElement("img", { src: "../img/peach.svg", id: "like", alt: "peach icon indicating favorite recipe" })
								)
							)
						)
					)
				);
			} else {
				return React.createElement(
					React.Fragment,
					null,
					React.createElement(
						"div",
						{ className: "add-rows" },
						React.createElement(
							"div",
							{ className: "add-recipe" },
							React.createElement(
								"div",
								{ id: "for-header" },
								React.createElement("img", { id: "form-rec-pic", src: "../img/chicken_parmesan.jpg", alt: "picture of breaded chicken with cheese and pasta" }),
								React.createElement(
									"h2",
									null,
									"Dorito Taco Salad"
								),
								React.createElement("i", { className: "fas fa-user-alt" }),
								React.createElement(
									"p",
									null,
									"1"
								)
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"table",
									null,
									React.createElement(
										"tr",
										null,
										React.createElement(
											"th",
											null,
											React.createElement(
												"p",
												null,
												"\xA0"
											)
										),
										React.createElement(
											"th",
											null,
											React.createElement(
												"h4",
												null,
												"Ingredient"
											)
										),
										React.createElement(
											"th",
											null,
											React.createElement(
												"h4",
												null,
												"Qauntity"
											)
										),
										React.createElement(
											"th",
											null,
											React.createElement(
												"h4",
												null,
												"Measurement"
											)
										),
										React.createElement(
											"th",
											null,
											React.createElement(
												"h4",
												null,
												"Inventory"
											)
										),
										React.createElement(
											"th",
											null,
											React.createElement(
												"p",
												null,
												"\xA0"
											)
										)
									),
									React.createElement(
										"tr",
										null,
										React.createElement(
											"td",
											null,
											React.createElement("img", { src: "../img/chicken_breast.jpg", id: "grocery", alt: "raw chicken breast" })
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"Chicken Breast"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"1"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"Unit"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												{ id: "i-caution" },
												"1"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement("i", { className: "fa fa-cart-plus fa-lg", "aria-label": "add/list icon" })
										)
									),
									React.createElement(
										"tr",
										null,
										React.createElement(
											"td",
											null,
											React.createElement("img", { src: "" })
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"Seasoned Breadcrumbs"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"1/4"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"Cup"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"0"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement("i", { className: "fa fa-cart-plus fa-lg", "aria-label": "add/list icon" })
										)
									),
									React.createElement(
										"tr",
										null,
										React.createElement(
											"td",
											null,
											React.createElement("img", { src: "" })
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"Egg White"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"1"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"Tablespoon"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"0"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement("i", { className: "fa fa-cart-plus fa-lg", "aria-label": "add/list icon" })
										)
									),
									React.createElement(
										"tr",
										null,
										React.createElement(
											"td",
											null,
											React.createElement("img", { src: "" })
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"Olive Oil"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"1"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"Tablespoon"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"27"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement("i", { className: "fa fa-cart-plus fa-lg", "aria-label": "add/list icon" })
										)
									),
									React.createElement(
										"tr",
										null,
										React.createElement(
											"td",
											null,
											React.createElement("img", { src: "" })
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"Flour"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"1"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"Tablespoon"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement(
												"p",
												null,
												"34"
											)
										),
										React.createElement(
											"td",
											null,
											React.createElement("i", { className: "fa fa-cart-plus fa-lg", "aria-label": "add/list icon" })
										)
									)
								)
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"div",
									_defineProperty({ id: "peach" }, "id", "favorite"),
									React.createElement("img", { src: "../img/peach.svg", id: "like", alt: "peach icon indicating favorite recipe" })
								),
								React.createElement(
									"div",
									{ id: "add-all-button" },
									React.createElement(
										"button",
										{ type: "button" },
										"Add Needed"
									)
								)
							)
						),
						React.createElement(
							"div",
							null,
							React.createElement(
								"form",
								null,
								React.createElement(
									"div",
									{ id: "divGrocRight" },
									React.createElement(
										"h2",
										null,
										"New Grocery"
									),
									React.createElement(
										"label",
										{ "for": "grocname" },
										"Name:"
									),
									React.createElement("input", { type: "text", id: "grocname" }),
									React.createElement(
										"label",
										{ "for": "type" },
										"Food Group/Diet:"
									),
									React.createElement(
										"select",
										null,
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "vegetable" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Vegetable"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "fruit" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Fruit"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "fish-seafood" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Fish/Seafood"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "protein" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Protein"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "dairy" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Dairy"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "fats" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Fats"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "sweets" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Sweets"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "snack" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Snack"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "condiment" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Condiment"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "sauce" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Sauce"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "nd-drink" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Non-Dairy Drink"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "grass-fed" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Grass-fed"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "free-range" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Free-range"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "gluten-free" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Gluten-free"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "all-natural" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"All Natural"
										),
										React.createElement("input", { type: "checkbox", id: "type", name: "type", value: "pre-made" }),
										React.createElement(
											"label",
											{ "for": "type" },
											"Pre-Made Meal"
										)
									)
								),
								React.createElement(
									"div",
									{ id: "divGrocLeft" },
									React.createElement(
										"label",
										{ "for": "quantity" },
										"Quantity:"
									),
									React.createElement("input", { type: "number", max: "1825", min: "0.05", step: "0.05", value: "1" }),
									React.createElement(
										"label",
										{ "for": "measurement" },
										"Measurement:"
									),
									React.createElement(
										"select",
										{ id: "store" },
										React.createElement(
											"option",
											{ value: "choose", disabled: true, selected: true },
											"Choose"
										),
										React.createElement(
											"option",
											{ value: "tablespoon" },
											"Tablespoon"
										),
										React.createElement(
											"option",
											{ value: "teaspoon" },
											"Teaspoon"
										),
										React.createElement(
											"option",
											{ value: "cup" },
											"Cup"
										),
										React.createElement(
											"option",
											{ value: "pint" },
											"Pint"
										),
										React.createElement(
											"option",
											{ value: "quart" },
											"Quart"
										),
										React.createElement(
											"option",
											{ value: "gallon" },
											"Gallon"
										),
										React.createElement(
											"option",
											{ value: "ounce" },
											"Ounce"
										),
										React.createElement(
											"option",
											{ value: "pound" },
											"Pound"
										),
										React.createElement(
											"option",
											{ value: "pint" },
											"Pint"
										),
										React.createElement(
											"option",
											{ value: "dash" },
											"Dash/Pinch"
										),
										React.createElement(
											"option",
											{ value: "pint" },
											"Pint"
										)
									),
									React.createElement(
										"label",
										{ "for": "store" },
										"Store:"
									),
									React.createElement(
										"select",
										{ id: "store" },
										React.createElement(
											"option",
											{ value: "choose", disabled: true, selected: true },
											"Choose"
										),
										React.createElement(
											"option",
											{ value: "albertsons" },
											"Albertsons LLC"
										),
										React.createElement(
											"option",
											{ value: "aholddelhaize" },
											"Ahold Delhaize"
										),
										React.createElement(
											"option",
											{ value: "kroger" },
											"Kroger"
										),
										React.createElement(
											"option",
											{ value: "target" },
											"Target"
										),
										React.createElement(
											"option",
											{ value: "walmart" },
											"Walmart"
										),
										React.createElement(
											"option",
											{ value: "other" },
											"Other"
										)
									),
									React.createElement(
										"label",
										{ "for": "expiration" },
										"Expiration (Days):"
									),
									React.createElement("input", { type: "number", max: "1825", min: "1", step: "1", value: "7" }),
									React.createElement(
										"label",
										{ "for": "item-pic" },
										"Item Picture:"
									),
									React.createElement("input", { type: "file", accept: "image/*" })
								)
							),
							React.createElement(
								"button",
								{ type: "button" },
								"Submit"
							)
						)
					)
				);
			}
		}
	}]);

	return App;
}(React.Component);

var Groceries = function (_React$Component2) {
	_inherits(Groceries, _React$Component2);

	function Groceries(props) {
		_classCallCheck(this, Groceries);

		var _this2 = _possibleConstructorReturn(this, (Groceries.__proto__ || Object.getPrototypeOf(Groceries)).call(this, props));

		_this2.state = { groceries: props.groceries };
		_this2.entryClick = _this2.entryClick.bind(_this2);
		return _this2;
	}

	_createClass(Groceries, [{
		key: "entryClick",
		value: function entryClick(event) {
			event.preventDefault();
			var toDiscard = event.target.parentNode.parentElement.parentElement.id;
			var expired = event.target.parentNode.parentElement.getElementsByTagName("i")[0].className.includes("trash");

			var groceries = this.state.groceries;
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
			var _this3 = this;

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
						}), entryClick: _this3.entryClick });
				})
			);
		}
	}]);

	return Groceries;
}(React.Component);

var GroceryCard = function (_React$Component3) {
	_inherits(GroceryCard, _React$Component3);

	function GroceryCard(props) {
		_classCallCheck(this, GroceryCard);

		var _this4 = _possibleConstructorReturn(this, (GroceryCard.__proto__ || Object.getPrototypeOf(GroceryCard)).call(this, props));

		_this4.state = { location: 0 };

		_this4.scrollClick = _this4.scrollClick.bind(_this4);
		return _this4;
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
			var _this5 = this;

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
							return React.createElement(GroceryEntry, { key: grocery.grocery, expired: header == "Expired", grocery: grocery, entryClick: _this5.props.entryClick });
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

var GroceryEntry = function (_React$Component4) {
	_inherits(GroceryEntry, _React$Component4);

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

var ShoppingList = function (_React$Component5) {
	_inherits(ShoppingList, _React$Component5);

	function ShoppingList(props) {
		_classCallCheck(this, ShoppingList);

		var _this7 = _possibleConstructorReturn(this, (ShoppingList.__proto__ || Object.getPrototypeOf(ShoppingList)).call(this, props));

		_this7.state = {
			list: _this7.props.list,
			location: 0
		};

		_this7.scrollClick = _this7.scrollClick.bind(_this7);
		_this7.deleteClick = _this7.deleteClick.bind(_this7);
		return _this7;
	}

	_createClass(ShoppingList, [{
		key: "scrollClick",
		value: function scrollClick(event) {
			event.preventDefault();
			var moveUp = event.target.parentNode.getElementsByTagName("i")[0].className.includes("scroll-up");
			if (moveUp) {
				this.setState({ location: this.state.location + (this.state.location + 5 > this.props.list.length ? 0 : 5) });
			} else {
				this.setState({ location: this.state.location - (this.state.location - 5 < 0 ? this.state.location : 5) });
			}
		}
	}, {
		key: "deleteClick",
		value: function deleteClick(event) {
			event.preventDefault();
			var toDiscard = event.target.parentNode.parentElement.parentElement.id;

			var list = this.state.list;
			for (var i = 0; i < list.length; i++) {
				if (list[i].grocery == toDiscard) {
					list.splice(i, 1);
				}
			}

			this.setState({ list: list });
		}
	}, {
		key: "render",
		value: function render() {
			var _this8 = this;

			var list = this.state.list.slice(this.state.location, this.state.location + 5);

			return React.createElement(
				React.Fragment,
				null,
				React.createElement(
					"table",
					null,
					React.createElement(
						"tbody",
						null,
						list.map(function (item) {
							return React.createElement(ListEntry, { key: item.grocery, item: item, deleteClick: _this8.deleteClick });
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

	return ShoppingList;
}(React.Component);

var ListEntry = function (_React$Component6) {
	_inherits(ListEntry, _React$Component6);

	function ListEntry(props) {
		_classCallCheck(this, ListEntry);

		return _possibleConstructorReturn(this, (ListEntry.__proto__ || Object.getPrototypeOf(ListEntry)).call(this, props));
	}

	_createClass(ListEntry, [{
		key: "render",
		value: function render() {
			var item = this.props.item;

			return React.createElement(
				"tr",
				{ id: item.grocery },
				React.createElement(
					"td",
					null,
					React.createElement("img", { src: item.img, id: "grocery", alt: item.grocery })
				),
				React.createElement(
					"td",
					null,
					React.createElement(
						"p",
						null,
						item.grocery
					)
				),
				React.createElement(
					"td",
					null,
					React.createElement(
						"button",
						{ onClick: this.props.deleteClick },
						React.createElement("i", { className: "fa fa-remove fa-lg", "aria-label": "remove icon" })
					)
				)
			);
		}
	}]);

	return ListEntry;
}(React.Component);

ReactDOM.render(React.createElement(App, { groceriesData: groceriesData }), document.getElementsByClassName('flex-content')[0]);
ReactDOM.render(React.createElement(ShoppingList, { list: groceriesData.filter(function (grocery) {
		return grocery.inventory == 1;
	}) }), document.getElementsByClassName('list')[0]);
ReactDOM.render(React.createElement(ShoppingList, { list: groceriesData.filter(function (grocery) {
		return grocery.inventory == 0;
	}) }), document.getElementsByClassName('suggested')[0]);