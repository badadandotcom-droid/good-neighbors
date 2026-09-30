import type { Metadata } from "next";
import { BRAND } from "@/lib/site";

export type CityLocation = {
  slug: string;
  href: string;
  city: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubheadline: string;
  /** Unique intro copy per city — hand-written, not a name-swapped template. */
  intro: readonly string[];
  extraFaq: { q: string; a: string };
  /**
   * false keeps the page live and in the sitemap and the homepage's service-area
   * list, but out of other city pages' cross-links — the owner doesn't want
   * these cities featured. Defaults to true.
   */
  featured?: boolean;
};

export const CITY_LOCATIONS: readonly CityLocation[] = [
  {
    slug: "toronto-wasp-removal",
    href: "/toronto-wasp-removal",
    city: "Toronto",
    h1: "Wasp Nest Removal in Toronto",
    metaTitle: "Wasp Nest Removal in Toronto",
    metaDescription:
      "Wasp nest removal in Toronto, from Etobicoke to Scarborough. Open 24/7. Call 1-800-800-WASP or text 416-700-4259.",
    heroSubheadline: "Wasp Nest Removal Across Toronto, Lake to Steeles",
    intro: [
      "Toronto's older brick houses — the semis and row houses of Leslieville, Riverdale, the Annex and Roncesvalles — give wasps plenty of ways in: gaps in old mortar, loose wooden soffits, and the spot where a porch roof meets the main wall. In the postwar bungalows and backsplits of North York, Etobicoke and Scarborough, the usual entry points are aluminum soffits, roof vents and the gap behind a gutter.",
      "Laneway garages and backyard sheds are common nest sites, and paper wasps like the underside of balcony railings, deck boards and barbecue lids. Homes backing onto the Don and Humber ravines also see bald-faced hornets, which hang their grey paper nests in trees and hedges.",
      "If the nest is on a condo or townhouse balcony, it's worth telling your property manager too. Call or text us any time with where you're seeing the wasps — a photo from a safe distance helps.",
    ],
    extraFaq: {
      q: "Do you cover all of Toronto?",
      a: "Yes — from Etobicoke to Scarborough and from the lake up to Steeles, along with communities across the GTA.",
    },
  },
  {
    slug: "mississauga-wasp-removal",
    href: "/mississauga-wasp-removal",
    city: "Mississauga",
    h1: "Wasp Nest Removal in Mississauga",
    metaTitle: "Wasp Nest Removal in Mississauga",
    metaDescription:
      "Wasp removal in Mississauga. Fast, professional wasp nest removal for homes across Mississauga and the GTA. Call Wasp Problem at 1-800-800-WASP.",
    heroSubheadline: "Fast Wasp Nest Removal for Mississauga Homeowners",
    intro: [
      "Mississauga is one of the areas we serve regularly, alongside Toronto and communities across the GTA. If you're seeing wasps repeatedly entering and leaving one spot around your roof, soffit, siding, brickwork, deck or shed, there's likely an active nest nearby.",
      "Call or text Wasp Problem and tell us what you're seeing — a quick description helps, and a photo helps even more, if you can safely take one before we arrive.",
    ],
    extraFaq: {
      q: "Do you service Mississauga?",
      a: "Yes — we work in Mississauga regularly, along with Toronto and communities across the GTA.",
    },
  },
  {
    slug: "markham-wasp-removal",
    href: "/markham-wasp-removal",
    city: "Markham",
    h1: "Wasp Nest Removal in Markham",
    metaTitle: "Wasp Nest Removal in Markham",
    metaDescription:
      "Wasp nest removal in Markham — Unionville, Cornell, Markham Village and beyond. Open 24/7. Call 1-800-800-WASP.",
    heroSubheadline: "Wasp Nest Removal for Markham Homeowners",
    intro: [
      "Markham runs from the heritage homes along Main Street Unionville and Markham Village to newer neighbourhoods like Cornell, Berczy Village and Cathedraltown. In the newer subdivisions, wasps tend to get in through vinyl siding seams, soffit vents, and the openings around dryer vents and gas lines.",
      "Older homes in the historic districts have wooden trim and fascia, which is where carpenter bees bore their round holes. Cedar decks, fences and pergolas draw them too. Properties near the Rouge Valley on Markham's east side often see hornet nests in trees and shrubs.",
      "Tell us where the wasps are going in and out and roughly how high up — that's usually enough for us to tell you what's involved before we arrive.",
    ],
    extraFaq: {
      q: "Do you come to Unionville and Cornell?",
      a: "Yes — we serve all of Markham, including Unionville, Cornell, Markham Village and Berczy Village, along with Toronto and communities across the GTA.",
    },
  },
  {
    slug: "vaughan-wasp-removal",
    href: "/vaughan-wasp-removal",
    city: "Vaughan",
    h1: "Wasp Nest Removal in Vaughan",
    metaTitle: "Wasp Nest Removal in Vaughan",
    metaDescription:
      "Wasp nest removal in Vaughan — Woodbridge, Maple, Kleinburg and Concord. Open 24/7. Call 1-800-800-WASP or text 416-700-4259.",
    heroSubheadline: "Wasp Nest Removal for Vaughan Homes and Businesses",
    intro: [
      "Many homes in Woodbridge, Maple and Vellore Village are large two-storey builds with tall peaks and high soffits, which is exactly where wasps like to build — well out of reach from the ground. How high a nest sits affects the price, so it helps to tell us roughly how far up the activity is.",
      "Around Kleinburg, bigger lots and mature trees near the Humber River mean more hornet nests in hedges and trees, and more nests in sheds and outbuildings. In Concord's industrial and commercial areas, wasps often nest in loading-dock overhangs, signage and rooftop units — we handle commercial buildings as well as homes.",
      "Call or text us day or night and describe what you're seeing. A photo taken from a safe distance is a big help.",
    ],
    extraFaq: {
      q: "Do you serve Woodbridge, Maple and Kleinburg?",
      a: "Yes — we serve all of Vaughan, including Woodbridge, Maple, Kleinburg, Concord and the Vaughan side of Thornhill.",
    },
  },
  {
    slug: "richmond-hill-wasp-removal",
    href: "/richmond-hill-wasp-removal",
    city: "Richmond Hill",
    h1: "Wasp Nest Removal in Richmond Hill",
    metaTitle: "Wasp Nest Removal in Richmond Hill",
    metaDescription:
      "Wasp nest removal in Richmond Hill — Oak Ridges, Mill Pond, Bayview Hill and more. Open 24/7. Call 1-800-800-WASP.",
    heroSubheadline: "Wasp Nest Removal for Richmond Hill Homeowners",
    intro: [
      "Richmond Hill stretches from the established streets around Mill Pond and Bayview Hill up to Oak Ridges and Lake Wilcox on the Oak Ridges Moraine. Around Mill Pond, mature trees and older homes mean hornet nests in branches and hedges, and wasps working their way into wooden soffits and attic vents.",
      "Newer neighbourhoods like Jefferson and Westbrook see more nests tucked behind vinyl siding and in soffit vents, often high up on two-storey walls. Near Lake Wilcox, docks, boathouses, sheds and deck undersides are common spots.",
      "Call or text us whenever you notice steady traffic in and out of one spot. That's usually an active nest, and the sooner it's treated the less it grows.",
    ],
    extraFaq: {
      q: "Do you serve Oak Ridges?",
      a: "Yes — we serve all of Richmond Hill, including Oak Ridges and Lake Wilcox, along with Toronto and communities across the GTA.",
    },
  },
  {
    slug: "thornhill-wasp-removal",
    href: "/thornhill-wasp-removal",
    city: "Thornhill",
    h1: "Wasp Nest Removal in Thornhill",
    metaTitle: "Wasp Nest Removal in Thornhill",
    metaDescription:
      "Wasp nest removal in Thornhill, on both the Vaughan and Markham sides of Yonge. Open 24/7. Call 1-800-800-WASP.",
    heroSubheadline: "Wasp Nest Removal on Both Sides of Yonge",
    intro: [
      "Thornhill sits on both sides of Yonge Street — the west side is part of Vaughan, the east side part of Markham — and we serve both. The older homes around Old Thornhill, near Yonge and Centre Street, have wooden trim, porches and brickwork where wasps find gaps to nest behind.",
      "Newer areas like Thornhill Woods have tall two-storey walls with vinyl siding and soffit vents, a common spot for hidden nests. Homes backing onto ravines and golf courses often see hornets nesting in trees and hedges, and carpenter bees in cedar fences and decks.",
      "Whichever side of Yonge you're on, call or text us and describe where the wasps are coming and going. A photo helps, if you can take one safely.",
    ],
    extraFaq: {
      q: "Is Thornhill part of your Vaughan or Markham service?",
      a: "Both — Thornhill is split between Vaughan and Markham at Yonge Street, and we serve the whole community on either side.",
    },
  },
  {
    slug: "pickering-wasp-removal",
    href: "/pickering-wasp-removal",
    city: "Pickering",
    h1: "Wasp Nest Removal in Pickering",
    metaTitle: "Wasp Nest Removal in Pickering",
    metaDescription:
      "Wasp nest removal in Pickering — Bay Ridges, Amberlea, Seaton and rural north Pickering. Open 24/7. Call 1-800-800-WASP.",
    heroSubheadline: "Wasp Nest Removal for Pickering Homeowners",
    intro: [
      "Pickering covers a lot of ground: lakeside homes in Bay Ridges and around Frenchman's Bay, established neighbourhoods like Amberlea, Liverpool and Rosebank, the newer Duffin Heights and Seaton communities, and rural properties up around Claremont.",
      "Near the lake, wasps nest under decks, docks and patio furniture, and in the gaps of older siding. In the newer subdivisions, soffit vents and siding seams are the usual entry points. On rural lots, barns, sheds and outbuildings are common spots, and yellowjackets sometimes nest underground in lawns and gardens.",
      "Call or text us with what you're seeing and where. If a nest is in the ground, mark the spot from a distance and keep people and pets away until it's treated.",
    ],
    extraFaq: {
      q: "Do you go to rural north Pickering?",
      a: "Yes — we serve all of Pickering, from Bay Ridges and the lakeshore up to Seaton and Claremont, along with communities across the GTA.",
    },
  },
  {
    slug: "ajax-wasp-removal",
    href: "/ajax-wasp-removal",
    city: "Ajax",
    h1: "Wasp Nest Removal in Ajax",
    metaTitle: "Wasp Nest Removal in Ajax",
    metaDescription:
      "Wasp nest removal in Ajax, from the waterfront to Pickering Village. Open 24/7. Call 1-800-800-WASP or text 416-700-4259.",
    heroSubheadline: "Wasp Nest Removal for Ajax Homeowners",
    intro: [
      "Ajax is mostly family homes, from the older streets around Pickering Village on Kingston Road to the newer subdivisions in the north end. Across the town, wasps typically get in through soffit vents, vinyl siding seams and the openings around exhaust vents and utility lines.",
      "Homes near the waterfront and along Duffins Creek tend to see more hornet nests in trees and shrubs. Decks, fences, sheds and play structures are frequent spots for paper wasps, and cedar decks and fences attract carpenter bees.",
      "Call or text us any time — tell us where you're seeing the wasps and how high up, and we'll tell you what's involved.",
    ],
    extraFaq: {
      q: "Do you serve all of Ajax?",
      a: "Yes — from the waterfront to the north end, including Pickering Village, along with Toronto and communities across the GTA.",
    },
  },
  {
    slug: "whitby-wasp-removal",
    href: "/whitby-wasp-removal",
    city: "Whitby",
    h1: "Wasp Nest Removal in Whitby",
    metaTitle: "Wasp Nest Removal in Whitby",
    metaDescription:
      "Wasp nest removal in Whitby and Brooklin — downtown, Port Whitby and the north end. Open 24/7. Call 1-800-800-WASP.",
    heroSubheadline: "Wasp Nest Removal for Whitby and Brooklin",
    intro: [
      "Whitby's older homes around downtown, near Brock and Dundas, and down toward Port Whitby have wooden porches, trim and brickwork where wasps nest behind loose boards and in mortar gaps. Carpenter bees are drawn to the older wooden fascia and railings.",
      "In newer neighbourhoods like Williamsburg, Taunton North and Brooklin, nests are usually hidden behind vinyl siding or in soffit vents on two-storey walls. Brooklin's edge-of-town lots also see nests in sheds, fences and outbuildings.",
      "Call or text us day or night with what you're seeing. A photo of where the wasps are going in helps us plan the job.",
    ],
    extraFaq: {
      q: "Do you serve Brooklin?",
      a: "Yes — we serve all of Whitby, including Brooklin and Port Whitby, along with Toronto and communities across the GTA.",
    },
  },
  {
    slug: "newmarket-wasp-removal",
    href: "/newmarket-wasp-removal",
    city: "Newmarket",
    h1: "Wasp Nest Removal in Newmarket",
    metaTitle: "Wasp Nest Removal in Newmarket",
    metaDescription:
      "Wasp nest removal in Newmarket, from Main Street to Stonehaven and Summerhill. Open 24/7. Call 1-800-800-WASP.",
    heroSubheadline: "Wasp Nest Removal for Newmarket Homeowners",
    intro: [
      "Newmarket's historic homes around Main Street have wooden soffits, trim and porches, and brick with the kind of gaps wasps use to get into walls. In neighbourhoods like Stonehaven, Summerhill and Woodland Hill, the usual spots are soffit vents, siding seams and roof peaks.",
      "Homes near Fairy Lake and the trails along the Holland River often see hornet nests in trees and shrubs. Cedar decks, fences and pergolas attract carpenter bees, and sheds and garages are common for paper wasps.",
      "Call or text us any time and describe what you're seeing. Knowing roughly how high the nest is helps us tell you what's involved.",
    ],
    extraFaq: {
      q: "Do you come up to Newmarket?",
      a: "Yes — we serve all of Newmarket, along with Toronto and communities across the GTA.",
    },
  },
  {
    slug: "whitchurch-stouffville-wasp-removal",
    href: "/whitchurch-stouffville-wasp-removal",
    city: "Whitchurch-Stouffville",
    h1: "Wasp Nest Removal in Whitchurch-Stouffville",
    metaTitle: "Wasp Nest Removal in Whitchurch-Stouffville",
    metaDescription:
      "Wasp nest removal in Stouffville, Ballantrae, Musselman's Lake and rural Whitchurch-Stouffville. Open 24/7. Call 1-800-800-WASP.",
    heroSubheadline: "Wasp Nest Removal in Stouffville and Rural Whitchurch",
    intro: [
      "Whitchurch-Stouffville mixes town and country: the older homes and newer subdivisions around Stouffville's Main Street, and rural properties around Ballantrae, Musselman's Lake, Gormley and Vandorf.",
      "In town, wasps usually nest in soffit vents, behind siding and in roof peaks. On rural properties, barns, sheds, equipment and outbuildings are common nest sites, hornets build in trees and hedgerows, and yellowjackets sometimes nest in the ground. Around Musselman's Lake, docks, boathouses and deck undersides are frequent spots.",
      "Call or text us with what you're seeing and where on the property. For bigger rural lots, a photo or a short description of the building helps us plan the visit.",
    ],
    extraFaq: {
      q: "Do you serve rural properties outside Stouffville?",
      a: "Yes — we serve all of Whitchurch-Stouffville, including Ballantrae, Musselman's Lake, Gormley and Vandorf.",
    },
  },
  {
    featured: false,
    slug: "oakville-wasp-removal",
    href: "/oakville-wasp-removal",
    city: "Oakville",
    h1: "Wasp Nest Removal in Oakville",
    metaTitle: "Wasp Nest Removal in Oakville",
    metaDescription:
      "Wasp removal in Oakville. Wasp Problem provides fast, professional wasp nest removal throughout Oakville and the GTA. Call 1-800-800-WASP.",
    heroSubheadline: "Fast Wasp Nest Removal for Oakville Homeowners",
    intro: [
      "Oakville homeowners usually call us for the same reason: wasps keep flying in and out of one specific spot on the house, and nobody wants to get close enough to check. That's typically a sign of an active nest.",
      "Call or text us and describe where you're seeing the activity — the roofline, soffit, siding, brickwork, a deck or a shed are the most common spots. A photo helps too, if it's safe to take one.",
    ],
    extraFaq: {
      q: "Do you service Oakville?",
      a: "Yes — we serve Oakville, along with Toronto, Mississauga and communities across the GTA. Call or text us and we'll let you know the earliest we can get there.",
    },
  },
  {
    featured: false,
    slug: "burlington-wasp-removal",
    href: "/burlington-wasp-removal",
    city: "Burlington",
    h1: "Wasp Nest Removal in Burlington",
    metaTitle: "Wasp Nest Removal in Burlington",
    metaDescription:
      "Wasp removal in Burlington. Wasp Problem handles active wasp nests for homes throughout Burlington and the GTA. Call 1-800-800-WASP.",
    heroSubheadline: "Fast Wasp Nest Removal for Burlington Homeowners",
    intro: [
      "If you live in Burlington and you've noticed wasps consistently going in and out of the same opening — the roof, under the soffit, along the siding or brickwork, or around a deck or shed — that's usually an active nest, not just wasps passing through.",
      "Call or text Wasp Problem and let us know what you're seeing. Photos of the area help us prepare before we arrive, if you're able to take them safely.",
    ],
    extraFaq: {
      q: "Do you service Burlington?",
      a: "Yes — we serve Burlington, along with Toronto, Mississauga and communities across the GTA. Call or text us and we'll let you know the earliest we can get there.",
    },
  },
];

export function locationMetadata(location: CityLocation): Metadata {
  const url = new URL(location.href, BRAND.url).toString();
  const ogTitle = `${location.metaTitle} | ${BRAND.name}`;

  // The opengraph-image file convention only covers its own route segment (the
  // homepage); city pages need the same brand card wired in explicitly or a
  // shared link gets no preview at all.
  const shareImage = { url: "/opengraph-image.png", width: 1200, height: 630, alt: BRAND.name };
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: location.metaDescription,
      url,
      siteName: BRAND.name,
      type: "website",
      locale: "en_CA",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: location.metaDescription,
      images: [shareImage.url],
    },
  };
}
