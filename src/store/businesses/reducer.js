import { GET_BUSINESSES, SET_ERROR } from './actionTypes'

let initialState = {
  loaded: true, // Todo: v1 This will be false to load from DB
  all: [
    {
      business_name: "24 Carrots",
      pic: "",
      website: "https://squareup.com/gift/AVXT35SY68V79/order"
    },
    {
      business_name: "414 Pub & Pizza",
      pic: "",
      website: "toasttab.com/4one4-pub-pizza/giftcards"
    },
    {
      business_name: "Art for Fun! Studio & Gallery",
      pic: "",
      website: "http://art4funstudio.com/shop/"
    },
    {
      business_name: "Autumn Court Chinese Restaurant",
      pic: "",
      website: "https://www.toasttab.com/new-autumn-court/giftcards"
    },
    {
      business_name: "Beckett's Table",
      pic: "",
      website: "https://beckettstable.instagift.com/"
    },
    {
      business_name: "Binkleys Restaurant",
      pic: "",
      website: "https://binkleysrestaurant.com/reservation/gift-cards/"
    },
    {
      business_name: "Burst of Butterflies Create & Paint Studio",
      pic: "",
      website: "https://burstofbutterflies.com/gift-cards-select/"
    },
    {
      business_name: "Cactus Sports",
      pic: "",
      website: "https://cactussports.com/"
    },
    {
      business_name: "Caffe Boa",
      pic: "",
      website: "http://www.cafeboa.com/gift-cardsstore"
    },
    {
      business_name: "Camelback Village Racquet & Health Club",
      pic: "",
      website: "https://villageclubs.com/spas/spa-gift-cards/"
    },
    {
      business_name: "Changing Hands Bookstore",
      pic: "",
      website: "https://www.changinghands.com/giftcard/chbgift-card"
    },
    {
      business_name: "Chula Seafood Uptown",
      pic: "",
      website: "https://www.chulaseafood.com/store/c4/Gift_Cards_.html"
    },
    {
      business_name: "Cibo",
      pic: "",
      website: "https://www.cibophoenix.com/gift-cards"
    },
    {
      business_name: "Claim Jumper Restuarants",
      pic: "",
      website: "https://claimjumper.cashstar.com/store/recipient?locale=en-us"
    },
    {
      business_name: "Clever Koi",
      pic: "",
      website: "https://swipeit.com/product/1562/clever-koi"
    },
    {
      business_name: "Coco's Bakery Restaurant",
      pic: "",
      website: "https://cocosbakery.com/gift-cards/"
    },
    {
      business_name: "Cold Beers and Cheeseburgers",
      pic: "",
      website: "https://coldbeers.cardfoundry.com/giftcards.php"
    },
    {
      business_name: "CRUjiente Tacos",
      pic: "",
      website: "https://www.crutacos.com/gift-cards"
    },
    {
      business_name: "Daily Jam",
      pic: "",
      website: "https://www.toasttab.com/daily-jam-mayo/giftcards"
    },
    {
      business_name: "Dig it Gardens",
      pic: "",
      website: "https://www.digphx.com/gift-cards"
    },
    {
      business_name: "Dilla Libre Uno",
      pic: "",
      website: "https://www.toasttab.com/dilla-libre-uno/giftcards"
    },
    {
      business_name: "Four Peaks Brewing Company",
      pic: "",
      website: "https://www.toasttab.com/four-peaks-brewing-8th-st/giftcards"
    },
    {
      business_name: "Hanny's",
      pic: "",
      website: "https://app.yiftee.com/gifts/egift_and_gift_cards/hanny-s"
    },
    {
      business_name: "Huss Brewing Co. Taproom at Uptown",
      pic: "",
      website: "https://stores.kotisdesign.com/hussbrewingshop/gift-cards"
    },
    {
      business_name: "Karl's Quality Bakery",
      pic: "",
      website: "https://www.karlsqualitybakery.com/collections/gift-cards"
    },
    {
      business_name: "La Grande Orange Grocery & Pizzeria",
      pic: "",
      website: "http://shop.lgohospitality.com/product_p/uni-gft-100.htm"
    },
    {
      business_name: "Los Sombreros",
      pic: "",
      website: "https://www.lossombreros.com/shop"
    },
    {
      business_name: "Lou Malnati's Pizzeria",
      pic: "",
      website: "https://www.tastesofchicago.com/category/gift-cards-lou-malnatis"
    },
    {
      business_name: "Majerle's Sports Grill - Phoenix",
      pic: "",
      website: "https://majerles.com/"
    },
    {
      business_name: "Mamma Toledo's The Pie Hole",
      pic: "",
      website: "https://squareup.com/gift/DAGN1JM3YCA8E/order"
    },
    {
      business_name: "Mancuso's Restaurant",
      pic: "",
      website: "https://www.toasttab.com/mancusos-restaurant/giftcards"
    },
    {
      business_name: "Mane Attraction Salon",
      pic: "",
      website: "http://maneattractionsalon.com/"
    },
    {
      business_name: "Milkweed Arts",
      pic: "",
      website: "https://milkweedartsaz.com/giftcertificates.php"
    },
    {
      business_name: "Miracle Mile Deli",
      pic: "",
      website: "https://miraclemiledeli.hrpos.heartland.us/"
    },
    {
      business_name: "Musical Instrument Museum",
      pic: "",
      website: "https://mim.localgiftcards.com/"
    },
    {
      business_name: "Ocotillo Restaurant",
      pic: "",
      website: "http://www.ocotillophx.com/shop/"
    },
    {
      business_name: "Parkside Tech IT Company",
      pic: "",
      website: "https://manage.parksidetech.com/cart.php"
    },
    {
      business_name: "Posh North Boutique",
      pic: "",
      website: "https://www.poshnorth.com/products/gift-card"
    },
    {
      business_name: "Practical Art",
      pic: "",
      website: "http://practical-art.com/shop/practical-art-gift-card"
    },
    {
      business_name: "Provision",
      pic: "",
      website: "https://squareup.com/gift/21QE80BRVDR5B/order"
    },
    {
      business_name: "Rainbow Ryders How Air Ballon Co",
      pic: "",
      website: "https://rainbowryders.com/gift-certificates/"
    },
    {
      business_name: "Rustler's Rooste",
      pic: "",
      website: "https://www.rustlersrooste.com/store/gift-cards/"
    },
    {
      business_name: "Samurai Comics",
      pic: "",
      website: "https://squareup.com/gift/9H2KGX5AVHKV4/order"
    },
    {
      business_name: "SanTan Brewing - Uptown",
      pic: "",
      website: "https://onelink.quickgifts.com/merchant/santan-brewing-co/"
    },
    {
      business_name: "Shemer Art Center",
      pic: "",
      website: "https://shemerartcenter.org/gift-cards/"
    },
    {
      business_name: "Southern Rail Restaurant",
      pic: "",
      website: "https://southernrail.instagift.com/"
    },
    {
      business_name: "Sweet Republic",
      pic: "",
      website: "http://www.sweetrepublic.com/shop/gift-certificates"
    },
    {
      business_name: "Taco Guild",
      pic: "",
      website: "https://www.toasttab.com/taco-guild-phoenix/giftcards"
    },
    {
      business_name: "The Arrogant Butcher",
      pic: "",
      website: "https://foxrc.cashstar.com/store/recipient?_ga=2.97372639.134443241.1584760128-1031199758.1584760128&locale=en-us"
    },
    {
      business_name: "The Breadfruit & Rum Bar",
      pic: "",
      website: "https://squareup.com/gift/P4RQHE9FRDZWD/order"
    },
    {
      business_name: "The Collins Small Batch Kitchen",
      pic: "",
      website: "https://www.thecollinsaz.com/gift-cards"
    },
    {
      business_name: "The Macintosh",
      pic: "",
      website: "https://www.themacintoshaz.com/gift-cards"
    },
    {
      business_name: "The Nash Jazz Club",
      pic: "",
      website: "https://thenash.localgiftcards.com/"
    },
    {
      business_name: "The Stockyards Steakhouse",
      pic: "",
      website: "https://onelink.quickgifts.com/merchant/the-stockyards-phoenix/"
    },
    {
      business_name: "The Watershed",
      pic: "",
      website: "https://www.toasttab.com/the-watershed/giftcards"
    },
    {
      business_name: "The Zone Escape Rooms",
      pic: "",
      website: "https://www.escapezoneaz.com/gift-cards"
    },
    {
      business_name: "Thirst Lion Gastropub & Grill - Desert Ridge",
      pic: "",
      website: "https://www.thirstyliongastropub.com/giftcards"
    },
    {
      business_name: "Trapp Haus BBQ",
      pic: "",
      website: "https://trapphausbbq.com/phoenix-downtown-trapp-haus-bbq-gift-cards"
    },
    {
      business_name: "Upward Projects",
      pic: "",
      website: "https://upwardprojects.com/gift-cards/"
    },
    {
      business_name: "Vincent on Camelback",
      pic: "",
      website: "https://tryroma.com/restaurant/88ec3f45-5647-4ee4-be59-106a9a15e950/gift-cards/create"
    },
    {
      business_name: "Whozitz and Whatzitz Unique Gifts and Cards",
      pic: "",
      website: "https://whozitzandwhatzitz.com/products/gift-certificate-whozitz-whatzitz"
    },
    {
      business_name: "Wildflower Bread Company",
      pic: "",
      website: "https://wildflower-gift-shop.myshopify.com/products/gift-card-yay"
    },
    {
      business_name: "Wren House Brewing Company",
      pic: "",
      website: "https://squareup.com/gift/364Z0WWXCWQN4/order"
    },
    {
      business_name: "Wrigley Mansion",
      pic: "",
      website: "https://wrigleymansion.securetree.com/"
    },
    {
      business_name: "Zookz Sandwiches & Catering",
      pic: "",
      website: "https://www.zookzsandwiches.com/order-gift-cards"
    }
  ],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        loaded: true,
        error: action.payload
      };
    case GET_BUSINESSES:
      return {
        loaded: true,
        all: action.payload,
        error: {}
      };
    default:
      return state;
  }
};