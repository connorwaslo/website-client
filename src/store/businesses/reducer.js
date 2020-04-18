import { GET_BUSINESSES, SET_ERROR } from './actionTypes'

let initialState = {
  loaded: true, // Todo: v1 This will be false to load from DB
  all: [
    {
      business_name: "24 Carrots",
      pic: "https://cdn.usarestaurants.info/assets/uploads/4e04169245c2d7c8ee9b80c939bb38f3_-united-states-arizona-maricopa-county-tempe-405678-24-carrotshtm.jpg",
      giftcardUrl: "https://squareup.com/gift/AVXT35SY68V79/order"
    },
    {
      business_name: "414 Pub & Pizza",
      pic: "https://s3-media0.fl.yelpcdn.com/bphoto/2cGyDW2BzH-7IsYr-jiYxw/l.jpg",
      giftcardUrl: "toasttab.com/4one4-pub-pizza/giftcards"
    },
    {
      business_name: "Art for Fun! Studio & Gallery",
      pic: "https://media-cdn.tripadvisor.com/media/photo-s/12/48/93/b4/ceramics-class.jpg",
      giftcardUrl: "http://art4funstudio.com/shop/"
    },
    {
      business_name: "Autumn Court Chinese Restaurant",
      pic: "https://kingofhappyhour-prod.s3.amazonaws.com/cities/5/bars/1507/bar_image/06173cd9-209e-4c22-97df-5038f8875438/Autumn%20Court.jpg",
      giftcardUrl: "https://www.toasttab.com/new-autumn-court/giftcards"
    },
    {
      business_name: "Beckett's Table",
      pic: "https://media-cdn.tripadvisor.com/media/photo-s/0a/3b/c7/2e/inside.jpg",
      giftcardUrl: "https://beckettstable.instagift.com/"
    },
    {
      business_name: "Binkleys Restaurant",
      pic: "https://media-cdn.tripadvisor.com/media/photo-s/10/dc/15/12/chef-kevin-binkley.jpg",
      giftcardUrl: "https://binkleysrestaurant.com/reservation/gift-cards/"
    },
    {
      business_name: "Burst of Butterflies Create & Paint Studio",
      pic: "https://media-cdn.tripadvisor.com/media/photo-s/08/10/5f/41/burst-of-butterflies.jpg",
      giftcardUrl: "https://burstofbutterflies.com/gift-cards-select/"
    },
    {
      business_name: "Caffe Boa",
      pic: "https://images.squarespace-cdn.com/content/v1/5528a4a1e4b026cc27b3c5d2/1428793163351-DEVDDDS0DVTU3DDVOK0V/ke17ZwdGBToddI8pDm48kKmw982fUOZVIQXHUCR1F55Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw5XnxLBmEFHJGf_0qFdDpmIncOw4kq9OpCHNTYqzGO-E1YJr-Thht9Tdog4YtCwrE/Dining+Area+and+Wine+Rack.jpeg",
      giftcardUrl: "http://www.cafeboa.com/gift-cardsstore"
    },
    {
      business_name: "Camelback Village Racquet & Health Club",
      pic: "https://s3-media0.fl.yelpcdn.com/bphoto/vChWlb8bQ3AF5WmmmumOMQ/348s.jpg",
      giftcardUrl: "https://villageclubs.com/spas/spa-gift-cards/"
    },
    {
      business_name: "Changing Hands Bookstore",
      pic: "https://kjzz.org/sites/default/files/styles/juicebox_large/public/Phoenix%20front.jpg?itok=Pm0DH4S7",
      giftcardUrl: "https://www.changinghands.com/giftcard/chbgift-card"
    },
    {
      business_name: "Chula Seafood Uptown",
      pic: "https://www.chulaseafood.com/uploads/8/2/0/2/82028818/4z0a1627-2_orig.jpg",
      giftcardUrl: "https://www.chulaseafood.com/store/c4/Gift_Cards_.html"
    },
    {
      business_name: "Cibo",
      pic: "https://s3-media0.fl.yelpcdn.com/bphoto/onIHORHRxdAbptaklm4bHg/258s.jpg",
      giftcardUrl: "https://www.cibophoenix.com/gift-cards"
    },
    {
      business_name: "Claim Jumper Restuarants",
      pic: "https://www.landrysinc.com/images/concepts/restaurants/claimjumper.jpg",
      giftcardUrl: "https://claimjumper.cashstar.com/store/recipient?locale=en-us"
    },
    {
      business_name: "Clever Koi",
      pic: "https://scontent.fphx1-2.fna.fbcdn.net/v/t31.0-8/15000181_1815931268649919_2628411027618668134_o.jpg?_nc_cat=100&_nc_sid=dd9801&_nc_ohc=vEcauNAd7dYAX84cBr9&_nc_ht=scontent.fphx1-2.fna&oh=3e5eec680ecbc3b8ffb022f3f9fe6761&oe=5EC2A6A2",
      giftcardUrl: "https://swipeit.com/product/1562/clever-koi"
    },
    {
      business_name: "Coco's Bakery Restaurant",
      pic: "https://3z98q636gu9333o1ie1dcmrf-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/Cocos-Bakery-Flagstaff-Restaurant-DSCF5748.jpg",
      giftcardUrl: "https://cocosbakery.com/gift-cards/"
    },
    {
      business_name: "Cold Beers and Cheeseburgers",
      pic: "https://ewscripps.brightspotcdn.com/dims4/default/2c95acb/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.abc15.com%2Fphoto%2F2018%2F07%2F24%2FColdBeers_1532455781154_93198152_ver1.0_640_480.jpg",
      giftcardUrl: "https://coldbeers.cardfoundry.com/giftcards.php"
    },
    {
      business_name: "CRUjiente Tacos",
      pic: "https://www.azfoodandwine.com/wp-content/uploads/2017/07/20170526_183527.jpg",
      giftcardUrl: "https://www.crutacos.com/gift-cards"
    },
    {
      business_name: "Daily Jam",
      pic: "https://cdn.usarestaurants.info/assets/uploads/0edd2b75b675b5e9bc2129881e441843_-united-states-arizona-maricopa-county-tempe-191018-daily-jamhtm.jpg",
      giftcardUrl: "https://www.toasttab.com/daily-jam-mayo/giftcards"
    },
    {
      business_name: "Dig it Gardens",
      pic: "https://hoodline.imgix.net/uploads/story/image/835850/o__36_.jpg?auto=format",
      giftcardUrl: "https://www.digphx.com/gift-cards"
    },
    {
      business_name: "Dilla Libre Uno",
      pic: "https://s3-media2.fl.yelpcdn.com/bphoto/-UEYSkQ519wMHLzSPqCG6A/l.jpg",
      giftcardUrl: "https://www.toasttab.com/dilla-libre-uno/giftcards"
    },
    {
      business_name: "Four Peaks Brewing Company",
      pic: "https://ewscripps.brightspotcdn.com/dims4/default/51d660f/2147483647/strip/true/crop/0x0+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fmedia2.abc15.com%2Fphoto%2F2015%2F04%2F07%2FKNXV%20Four%20Peaks%201_1428433550323_16321632_ver1.0_640_480.jpg",
      giftcardUrl: "https://www.toasttab.com/four-peaks-brewing-8th-st/giftcards"
    },
    {
      business_name: "Hanny's",
      pic: "https://snworksceo.imgix.net/asp/8cef2062-4288-4121-96c6-eb8f78d723fa.sized-1000x1000.jpg?w=1000",
      giftcardUrl: "https://app.yiftee.com/gifts/egift_and_gift_cards/hanny-s"
    },
    {
      business_name: "Huss Brewing Co. Taproom at Uptown",
      pic: "https://images1.phoenixnewtimes.com/imager/u/original/9247956/huss_bar.jpg",
      giftcardUrl: "https://stores.kotisdesign.com/hussbrewingshop/gift-cards"
    },
    {
      business_name: "Karl's Quality Bakery",
      pic: "https://www.gannett-cdn.com/presto/2019/09/12/PPHX/75a6152e-8b29-4014-bbcc-57a616867232-IMG_3731.JPG?width=540&height=&fit=bounds&auto=webp",
      giftcardUrl: "https://www.karlsqualitybakery.com/collections/gift-cards"
    },
    {
      business_name: "La Grande Orange Grocery & Pizzeria",
      pic: "https://lh3.googleusercontent.com/proxy/Ofe8lhsKH2Z6ytMO5AHLevR3G5q4fjTYTkvxtcNAeAxI5aEbjMOlwbr1PPIuJKpPlNkWK0rYDp2TfLEdJs8qGTbMN-z4gjGdWfLvVE62jzDTQS9yA3MVxA",
      giftcardUrl: "http://shop.lgohospitality.com/product_p/uni-gft-100.htm"
    },
    {
      business_name: "Los Sombreros",
      pic: "https://images1.phoenixnewtimes.com/imager/u/original/7309567/5448093.0.jpg",
      giftcardUrl: "https://www.lossombreros.com/shop"
    },
    {
      business_name: "Lou Malnati's Pizzeria",
      pic: "https://media-cdn.tripadvisor.com/media/photo-s/19/35/9b/22/lou-malnati-s-phoenix.jpg",
      giftcardUrl: "https://www.tastesofchicago.com/category/gift-cards-lou-malnatis"
    },
    {
      business_name: "Majerle's Sports Grill - Phoenix",
      pic: "https://assets.simpleviewinc.com/simpleview/image/upload/crm/phoenix/1057_5711_majerles_b9daaebf-5056-b3a8-495e7f8caf59467c.jpg",
      giftcardUrl: "https://majerles.com/"
    },
    {
      business_name: "Mamma Toledo's The Pie Hole",
      pic: "https://supportlocal.usatoday.com/placeimages/CmRaAAAAFlATJkFz_zeeEdd6GlW9ZHsK_CTN2Z1F_ndO8ggdic6UemQ02vcIkLAhlaQLPCenqp9ISOKB3DhT4Xi8_ztUZzIkxc9NyfyoXCr8h1ja21Pi0QD1Gkp-OO1A7Wpjdzo3EhDPJwKGD7imPthSmkJZUrXoGhQ5M_MwcEu4smhEp51udoSknWD1EA.jpg",
      giftcardUrl: "https://squareup.com/gift/DAGN1JM3YCA8E/order"
    },
    {
      business_name: "Mancuso's Restaurant",
      pic: "https://s3-media1.fl.yelpcdn.com/bphoto/rs_zILWz4lyHaQ7ilWHeEA/o.jpg",
      giftcardUrl: "https://www.toasttab.com/mancusos-restaurant/giftcards"
    },
    {
      business_name: "Mane Attraction Salon",
      pic: "https://lh3.googleusercontent.com/proxy/xC6-FKp2EnxSewNdHyh6zMdq2mxQmlMK6KBB3BCirM4BomWypEo2EFm1Nane3YiWQyF08gaQAQPLgGxGYvcQ6BoUO8RPPywLDpiWOfqNnhnCA7S4OH2wwTDbtRAnsFPrWBmS-KhObIAy6HIbNyFnRLaPE5r_CYNfbzc",
      giftcardUrl: "http://maneattractionsalon.com/"
    },
    {
      business_name: "Miracle Mile Deli",
      pic: "https://miraclemiledeli.com/wp-content/uploads/2015/06/NewLocationMiracleMileDeli-1.jpg",
      giftcardUrl: "https://miraclemiledeli.hrpos.heartland.us/"
    },
    {
      business_name: "Musical Instrument Museum",
      pic: "https://www.srgseniorliving.com/sites/default/files/daily-life/Musical%20Instrument%20Museum.png",
      giftcardUrl: "https://mim.localgiftcards.com/"
    },
    {
      business_name: "Ocotillo Restaurant",
      pic: "https://zagat-photos.imgix.net/ChIJA3x1UmASK4cR-Jn7yP2Z4bY/99c6821bb121e46977b863952ce1aa95.jpg",
      giftcardUrl: "http://www.ocotillophx.com/shop/"
    },
    {
      business_name: "Posh North Boutique",
      pic: "https://pitnit.blob.core.windows.net/icon4/1516360163470.35.jpg",
      giftcardUrl: "https://www.poshnorth.com/products/gift-card"
    },
    {
      business_name: "Practical Art",
      pic: "https://lh3.googleusercontent.com/proxy/wOXz6jRB0rJeaE3CDPROQUumfmXKeOwTYx_KYxGHTd2TmUt1pt_RWTjTUDmrr0ns7FLqO7QgnsCoQX-L4_sqbr7Dx4JYWWdddox7Y7qLao6WIYSms-6ytJYZkd2oJvM",
      giftcardUrl: "http://practical-art.com/shop/practical-art-gift-card"
    },
    {
      business_name: "Provision",
      pic: "https://images.squarespace-cdn.com/content/v1/5c23e8c84cde7ae35b01f221/1559845171016-LW8VE2U2LEK10B63XKTX/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/RR-1080-web.jpg?format=2500w",
      giftcardUrl: "https://squareup.com/gift/21QE80BRVDR5B/order"
    },
    {
      business_name: "Rainbow Ryders How Air Ballon Co",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ10g8yYlaQBJjHCFRK74SO2dLMgDWlniTCeweGTjAwOucYBeNH&usqp=CAU",
      giftcardUrl: "https://rainbowryders.com/gift-certificates/"
    },
    {
      business_name: "Rustler's Rooste",
      pic: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,q_75,w_640/https://assets.simpleviewinc.com/simpleview/image/upload/crm/phoenix/1127_DSC_1628_b9e0dae9-5056-b3a8-497e45ad9034e8b8.jpg",
      giftcardUrl: "https://www.rustlersrooste.com/store/gift-cards/"
    },
    {
      business_name: "Samurai Comics",
      pic: "https://www.comicshoplocator.com/Image/CslsImage/2992?imageNo=1",
      giftcardUrl: "https://squareup.com/gift/9H2KGX5AVHKV4/order"
    },
    {
      business_name: "SanTan Brewing - Uptown",
      pic: "https://s3-media4.fl.yelpcdn.com/bphoto/VamKIAojMpwy9rU-Ca1COQ/o.jpg",
      giftcardUrl: "https://onelink.quickgifts.com/merchant/santan-brewing-co/"
    },
    {
      business_name: "Southern Rail Restaurant",
      pic: "https://media-cdn.tripadvisor.com/media/photo-s/08/8f/1a/bf/southern-rail.jpg",
      giftcardUrl: "https://southernrail.instagift.com/"
    },
    {
      business_name: "Sweet Republic",
      pic: "https://images.squarespace-cdn.com/content/v1/52c63bb0e4b0629e2a426d5d/1418179483073-WBYUC7GQ42A1H4R3Q68S/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/image-asset.jpeg",
      giftcardUrl: "http://www.sweetrepublic.com/shop/gift-certificates"
    },
    {
      business_name: "Taco Guild",
      pic: "https://urbanconnectionrealty.com/wp-content/uploads/2014/02/Taco-Guild-Phoenix-2-of-7.jpg",
      giftcardUrl: "https://www.toasttab.com/taco-guild-phoenix/giftcards"
    },
    {
      business_name: "The Arrogant Butcher",
      pic: "https://frc-thearrogantbutcher.s3-us-west-1.amazonaws.com/wp-content/uploads/2018/10/18171157/tab-pdr-mobile.jpg",
      giftcardUrl: "https://foxrc.cashstar.com/store/recipient?_ga=2.97372639.134443241.1584760128-1031199758.1584760128&locale=en-us"
    },
    {
      business_name: "The Breadfruit & Rum Bar",
      pic: "https://kjzz.org/sites/default/files/styles/juicebox_large/public/Breadfruit%20rum%20bar.jpg?itok=K6n5cP0O",
      giftcardUrl: "https://squareup.com/gift/P4RQHE9FRDZWD/order"
    },
    {
      business_name: "The Collins Small Batch Kitchen",
      pic: "https://i2.wp.com/theforkingtruth.com/wp-content/uploads/2019/02/fullsizeoutput_2b76.jpeg?resize=768%2C576&ssl=1",
      giftcardUrl: "https://www.thecollinsaz.com/gift-cards"
    },
    {
      business_name: "The Macintosh",
      pic: "https://ewscripps.brightspotcdn.com/dims4/default/3dde497/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.abc15.com%2Fphoto%2F2018%2F10%2F26%2FKNXV%20The%20Macintosh_1540604357740.jpg_101538203_ver1.0_640_480.jpg",
      giftcardUrl: "https://www.themacintoshaz.com/gift-cards"
    },
    {
      business_name: "The Nash Jazz Club",
      pic: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/4e/a7/4f/the-nash-jazz-club.jpg",
      giftcardUrl: "https://thenash.localgiftcards.com/"
    },
    {
      business_name: "The Stockyards Steakhouse",
      pic: "https://stockyardssteakhouse.com/wp-content/uploads/2018/04/12.jpg",
      giftcardUrl: "https://onelink.quickgifts.com/merchant/the-stockyards-phoenix/"
    },
    {
      business_name: "The Watershed",
      pic: "http://www.watershedaz.com/gallery/page/2#",
      giftcardUrl: "https://www.toasttab.com/the-watershed/giftcards"
    },
    {
      business_name: "The Zone Escape Rooms",
      pic: "https://media-cdn.tripadvisor.com/media/photo-s/0d/32/8b/c5/escape-zone.jpg",
      giftcardUrl: "https://www.escapezoneaz.com/gift-cards"
    },
    {
      business_name: "Thirst Lion Gastropub & Grill - Desert Ridge",
      pic: "https://images.squarespace-cdn.com/content/v1/56c120a74c2f85e5d69e9108/1554397387307-B5BKB4V27NMTXFMGP410/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/AZ_Interior-Slideshow_3.jpg",
      giftcardUrl: "https://www.thirstyliongastropub.com/giftcards"
    },
    {
      business_name: "Trapp Haus BBQ",
      pic: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,q_50/v1/clients/phoenix/TrappHaus_5359_26769af0-d473-4133-86fb-1201b78f1094.jpg",
      giftcardUrl: "https://trapphausbbq.com/phoenix-downtown-trapp-haus-bbq-gift-cards"
    },
    {
      business_name: "Upward Projects",
      pic: "https://images1.phoenixnewtimes.com/imager/u/745xauto/9461175/joyride_dbm1518-davidbmoore.jpg",
      giftcardUrl: "https://upwardprojects.com/gift-cards/"
    },
    {
      business_name: "Vincent on Camelback",
      pic: "https://zagat-photos.imgix.net/ChIJ8XBK5vwMK4cRZuiHqLLk2YQ/ab28b7c2008f2345fb97b1bd7119ed1e.jpg",
      giftcardUrl: "https://tryroma.com/restaurant/88ec3f45-5647-4ee4-be59-106a9a15e950/gift-cards/create"
    },
    {
      business_name: "Wildflower Bread Company",
      pic: "https://media-cdn.tripadvisor.com/media/photo-s/03/82/94/7b/wildflower-bread-company.jpg",
      giftcardUrl: "https://wildflower-gift-shop.myshopify.com/products/gift-card-yay"
    },
    {
      business_name: "Wren House Brewing Company",
      pic: "https://media-cdn.tripadvisor.com/media/photo-s/0f/07/25/d5/taproom.jpg",
      giftcardUrl: "https://squareup.com/gift/364Z0WWXCWQN4/order"
    },
    {
      business_name: "Zookz Sandwiches & Catering",
      pic: "https://images.squarespace-cdn.com/content/v1/5a98a93b7e3c3a2cf8436285/1522171005943-GZFHZQNWVDNAUJMY708D/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/store+front.jpg?format=2500w",
      giftcardUrl: "https://www.zookzsandwiches.com/order-gift-cards"
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