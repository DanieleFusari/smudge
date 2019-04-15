class Products {
  constructor(name, img, info, ingreadence) {
    this.name = name,
    this.img = img,
    this.info = info,
    this.ingreadence = ingreadence
  }
}



// ************ order of Products **************
// const name =  new Products(  Name,
//                              img link,
//                              bio  )
//

// ************ Hair **************
// Shampoo
const claynopoo = new Products('Clay Nopoo', 'img/products/Nopoo.jpg', "A rahssoul clay and oil formula is designed to gently cleanse whilst moisturising hair without stripping natural oils and stimulate hair growth. Stripping hair of natural oils can cause over production of oils, greasy hair and consequently triggering more washing. This contributes to dry hair. The clay in this formula is less alkaline compared to many shampoos therefore allowing the hair to restore its natural balance contributing to healthy strong locks.  Balanced cleansers also protect your hair’s natural oils, sebum, rather than stripping it away. The added jojoba and rosehip oils moisturise the hair consequently reducing frizz and dry ends. Ylang-Ylang and rosemary essential oils are known to increase production of sebum and stimulate hair growth. ",  "Rhassoul clay, jojoba oil, rosehip oil, Rosemary and Ylang-Ylang essential oils. [How to use]: Add hot water to a portion of the no poo formula. Let it sit for 5-10 minutes until it has turned into a thick paste. Massage the paste into the hair and leave for 10 minutes. Rinse thoroughly with warm water.")
// Conditioner
const prewashoilconditioner = new Products('Pre Wash Oil Conditioner', 'img/products/Pre Wash Oil Conditioner.jpg', "TBA", "TBA")
// ************ END Hair **************

// ************ Face **************
// Oil Washes
const aboutfacialoilwashes = new Products('About Smudge Facial Oil Washes', 'img/products/aboutme2.JPG', "Oil wash for the face cleanses the skin without stripping out natural oils. Natural oils help lubricate, heal, protect and moisturise facial skin. Skin that is stripped of these naturally produced oils attempts to repair by quickly producing more oil perpetuating the washing cycle. This can lead to dry and/or oily skin. Smudge Oil Washes operate through oil dissolving oil allowing the skin to function properly.", "How to use: Wet the skin with warm water then massage in the oil blend. Leave for several minutes (this could be done whilst brushing teeth or when taking a hot bath/ shower. Heat opens the pores allowing the oil wash to sink deeper into the skin). Wipe off the facial oil wash with a wet hot cloth. ")

const lavenderfaceoilwash = new Products('Smudge Oil Wash Lavender and Rosemary Face Facial Oil Wash (acne prone skin)', 'img/products/Lavender face Oil Wash.jpg', "This lavender and rosemary oil wash is designed for skin with acne including oily skin. Lavender is healing even as rosemary is antiseptic, antibacterial and helps balance oily skin. The oil wash is blended with borage oil which is high in oleic acids; acids which deeply penetrate the skins surface therefore replenishing and maintaining moisture without clogging pores. ", "Grape seed oil, borage oil, hazelnut oil (castor oil as an alternative for those with nut allergies), lavender and rosemary essential oil")
const smudgebrighteningandhealingoilwash = new Products('Smudge Brightening and Healing Oil Wash', 'img/products/Lavender face Oil Wash.jpg', "Smudge's brightening oil wash contains lemongrass essential oil; an essential oil which can brighten and tone the skin. It also contains chamomile essential oil which is healing consequently good for soothing tired and inflamed skin. The base of sea buckthorn and rosehip oil makes the wash nourishing and regenerating.", "Grape seed oil, borage oil, hazelnut oil (castor oil as an alternative for those with nut allergies), lemongrass and chamomile essential oil")
const antiagingfacialoilwash = new Products('Smudge Rose Geranium Anti Aging Facial Oil Wash ', 'img/products/Lavender face Oil Wash.jpg', "Made with Rose Geranium essential oil, jojoba and rosehip oil meaning this oil wash is both healing, nourishing and anti aging. Geranium rose has anti-inflammatory and anti aging properties whilst rosehip oil is regenerating and anti-aging.", "Apricot seed oil, jojoba oil, rosehip oil, hazelnut oil (castor oil as an alternative for those with nut allergies), and rose geranium essential oil")
const facecreaminthesun = new Products('Smudge in the Sun\' face cream', 'img/products/facecreamsun.jpg', "'Smudge in the Sun' is a mineral non-comedogenic cream designed to be applied on sunny occasions. Being rich in shea butter, it is a good source of vitamins for skin. Similar to 'Smudge in the Sun' body cream, Smudge's face version contains zinc oxide known to have sun protective properties and does not contain toxic chemicals. Jojoba oil, vitamin e and carrot seed oil have their own natural sun protection whilst also being anti-inflammatory. (Disclaimer: Smudge does not claim this cream has a SPF and has not been tested for accurate SPF rating)", "Shea butter, non nano zinc oxide, vitamin e oil, jojoba oil, essential oils (carrot seed and red raspberry seed oil)")
// ************ END Face **************

// ************ Body **************

//  Creams
const creaminthesun = new Products('Cream in the Sun', 'img/products/Cream in the Sun with insect repellent.jpg', "A mineral cream designed to be applied on sunny occasions. 'Smudge in the Sun' is made with minerals and oils which naturally have defensive and moisturising qualities; It contains zinc oxide known to have sun protective properties whilst not being absorbed into the skin. Jojoba oil, vitamin e and carrot seed oil have their own natural sun protection whilst also being anti-inflammatory. This cream does not contain toxic chemicals that are absorbed into the skin. (Disclaimer: Smudge does not claim this cream has a SPF and has not been tested for accurate SPF rating)", "Shea butter, cocoa butter, coconut oil, non nano zinc oxide, vitamin e oil, jojoba oil and carrot seed oil")
const creaminthesunwithinsectrepellent = new Products('Cream in the Sun with insect repellent', 'img/products/Cream in the Sun with insect repellent.jpg', "Smudge in the Sun with insect repellent is a variant of Smudge in the Sun. Nevertheless, it has added essential oils which help repel insects and soothe inflamed skin. (Disclaimer: This cream is not claiming to have a SPF and has not been tested in the laboratory)", "Shea butter, cocoa butter, coconut oil, non nano zinc oxide, vitamin e oil, jojoba oil and essential oils (lavender, cedar wood and peppermint)")
const crèmedelamagie = new Products('Crème de la magie', 'img/products/cremedelamagie.jpg', 'A natural and rich body cream designed to be moisturising and healing. Cocoa butter is high in fatty acids making it healing and nourishing.', 'cocoa butter, shea butter, coconut oil, carrot seed oil and optional essential oils (individual requests made to order)')
const bumpbalm = new Products('Bump Balm', 'img/products/bumpbalm.jpg', 'A cream created with calendula oil known for its healing properties. The shea butter ingredient means it is rich it vitamins for skin. Use on bumps, inflamed skin, bruises and scars. Suitable for face and body due to non-comedogenic (non pore clogging) properties.', 'Calendula oil, shea butter, hemp seed oil, carrot seed oil and chamomile oil.')

// Deoderant
const aboutsmudgedeodorant = new Products('About Smudge Deodorant', 'img/products/Smudge Deodorant.JPG', 'All of the Smudge natural deodorants are made with bentonite clay to be gentle, antibacterial and absorbent. Many deodorants on the market contain chemicals such as aluminium, parabens and steareths; Smudge deodorants are made with natural raw ingredients which do not clog pores or contain harmful chemicals.', 'shea butter, bentonite clay, coconut oil, magnesium oil and essential oils');

const peppermintdeodorant = new Products('Tea Tree and Peppermint Deodorant ', 'img/products/Smudge Citrus Deodorant.JPG', 'Smudge Tea Tree and Peppermint Deodorant is the ultimate anti bacterial and anti fungal product in the range.  Tea tree oil is renowned for powerful purifying properties making it ideal for deodorant. Peppermint adds an invigorating and refreshing quality.', 'Shea butter, bentonite clay, coconut oil, magnesium oil, tea tree and peppermint essential oil');
const lavenderdeodorant = new Products('Lavinder Deodorant', 'img/products/Lavender Deodorant.JPG', 'Smudge Gentle Deodorant is made with lavender essential oil. Lavender is one of the gentlest essential oils yet also has healing and antibacterial properties. ', 'Shea butter, bentonite clay, coconut oil, magnesium oil, lavender essential oil');
const smudgecitrusdeodorant  = new Products('Smudge Citrus Deodorant ', 'img/products/Smudge Citrus Deodorant.JPG', 'Smudge Citrus Deodorant, whilst being antibacterial and antifungal, has an uplifting citrusy aroma.', 'Shea butter, bentonite clay, coconut oil, magnesium, bergamot essential oil');

// Body Oil
const antiinflammationoil = new Products('Anti-Inflammation Oil', 'img/products/Anti-Inflammation Oil.jpg', 'An oil blend designed to massage into aching joints. Research has shown that this specific blend has been shown to decrease pain scores in patients with arthritis. Eucalyptus, lavender, marjoram, rosemary and peppermint essential oils blend together with carrier oils to help provide relief for painful areas. ',  ' Apricot kernal oil, sweet almond oil, jojoba oil and essential oils (eucalyptus, lavender, marjoram, rosemary and peppermint)')
// ************ END Body **************
